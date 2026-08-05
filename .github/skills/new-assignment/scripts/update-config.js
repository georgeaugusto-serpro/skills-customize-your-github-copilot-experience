#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function usage() {
  console.error(
    'Usage: node .github/skills/new-assignment/scripts/update-config.js <id> "<title>" "<description>"'
  );
}

function buildDueDate(daysAhead) {
  const date = new Date();
  date.setDate(date.getDate() + daysAhead);
  return date.toISOString().slice(0, 10);
}

function main() {
  const [, , id, title, description] = process.argv;

  if (!id || !title || !description) {
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

  const assignmentPath = `assignments/${id}`;
  const existing = config.assignments.find((item) => item.id === id);

  if (existing) {
    existing.title = title;
    existing.description = description;
    existing.path = assignmentPath;
    existing.dueDate = existing.dueDate || buildDueDate(14);
    console.log(`Updated assignment: ${id}`);
  } else {
    config.assignments.push({
      id,
      title,
      description,
      path: assignmentPath,
      dueDate: buildDueDate(14),
    });
    console.log(`Added assignment: ${id}`);
  }

  fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}

main();