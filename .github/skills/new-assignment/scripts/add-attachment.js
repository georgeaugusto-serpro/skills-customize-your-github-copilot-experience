#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function usage() {
  console.error(
    'Usage: node .github/skills/new-assignment/scripts/add-attachment.js <id> "<display-name>" <filename> <type>'
  );
}

function main() {
  const [, , id, displayName, filename, type] = process.argv;

  if (!id || !displayName || !filename || !type) {
    usage();
    process.exit(1);
  }

  const repoRoot = process.cwd();
  const configPath = path.join(repoRoot, "config.json");

  if (!fs.existsSync(configPath)) {
    console.error(`config.json not found at ${configPath}`);
    process.exit(1);
  }

  const rawConfig = fs.readFileSync(configPath, "utf8");
  const config = JSON.parse(rawConfig);

  if (!Array.isArray(config.assignments)) {
    console.error('Invalid config.json: expected "assignments" array.');
    process.exit(1);
  }

  const assignment = config.assignments.find((item) => item.id === id);
  if (!assignment) {
    console.error(`Assignment not found for id: ${id}`);
    process.exit(1);
  }

  if (!Array.isArray(assignment.attachments)) {
    assignment.attachments = [];
  }

  const existing = assignment.attachments.find((item) => item.file === filename);
  if (existing) {
    existing.name = displayName;
    existing.type = type;
    console.log(`Updated attachment: ${filename}`);
  } else {
    assignment.attachments.push({
      name: displayName,
      file: filename,
      type,
    });
    console.log(`Added attachment: ${filename}`);
  }

  fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}

main();