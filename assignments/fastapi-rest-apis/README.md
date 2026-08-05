# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Build a REST API using FastAPI to practice route creation, request validation with Pydantic, and standard CRUD operations.

## 📝 Tasks

### 🛠️ Design API models and base routes

#### Description
Create the FastAPI app structure, define data models for an item resource, and implement foundational routes to verify the API is running.

#### Requisitos
O programa concluído deve:

- Create a FastAPI application instance
- Define at least one Pydantic model for request and response data
- Implement a health-check route such as GET /health
- Implement GET /items to list all items from an in-memory store


### 🛠️ Implement CRUD operations with validation

#### Description
Implement full CRUD endpoints for items and enforce validation and error handling for invalid input and missing resources.

#### Requisitos
O programa concluído deve:

- Implement POST /items to create a new item
- Implement GET /items/{item_id} to fetch one item by id
- Implement PUT /items/{item_id} to update an existing item
- Implement DELETE /items/{item_id} to remove an item
- Return appropriate status codes (for example 201, 404, 422)
- Include clear error messages for not found and validation failures
