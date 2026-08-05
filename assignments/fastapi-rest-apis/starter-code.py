from typing import Dict

from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, Field

app = FastAPI(title="FastAPI Assignment")


class ItemIn(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    price: float = Field(gt=0)


class Item(ItemIn):
    id: int


items_db: Dict[int, Item] = {}
next_id = 1


@app.get("/health")
def health_check() -> dict:
    return {"status": "ok"}


@app.get("/items", response_model=list[Item])
def list_items() -> list[Item]:
    # TODO: return all items from the in-memory store.
    return []


@app.post("/items", response_model=Item, status_code=status.HTTP_201_CREATED)
def create_item(payload: ItemIn) -> Item:
    # TODO: create an item with an incremental id and store it.
    raise NotImplementedError


@app.get("/items/{item_id}", response_model=Item)
def get_item(item_id: int) -> Item:
    # TODO: find an item by id or raise HTTPException(status_code=404).
    raise NotImplementedError


@app.put("/items/{item_id}", response_model=Item)
def update_item(item_id: int, payload: ItemIn) -> Item:
    # TODO: update item data if it exists, otherwise return 404.
    raise NotImplementedError


@app.delete("/items/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_item(item_id: int) -> None:
    # TODO: delete item if present, otherwise return 404.
    raise NotImplementedError
