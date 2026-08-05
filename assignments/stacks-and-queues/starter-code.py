class Stack:
    def __init__(self):
        self._items = []

    def push(self, value):
        # TODO: Add value to the top of the stack.
        pass

    def pop(self):
        # TODO: Remove and return the top value.
        # If empty, raise IndexError with a clear message.
        pass

    def peek(self):
        # TODO: Return the top value without removing it.
        # If empty, raise IndexError with a clear message.
        pass

    def is_empty(self):
        # TODO: Return True if stack has no items.
        pass


class Queue:
    def __init__(self):
        self._items = []

    def enqueue(self, value):
        # TODO: Add value to the end of the queue.
        pass

    def dequeue(self):
        # TODO: Remove and return the front value.
        # If empty, raise IndexError with a clear message.
        pass

    def front(self):
        # TODO: Return the front value without removing it.
        # If empty, raise IndexError with a clear message.
        pass

    def is_empty(self):
        # TODO: Return True if queue has no items.
        pass


def demo():
    # TODO: Demonstrate LIFO behavior with Stack.
    # TODO: Demonstrate FIFO behavior with Queue.
    # TODO: Print or assert expected outputs.
    pass


if __name__ == "__main__":
    demo()
