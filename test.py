# Sample Python file for Tree-sitter testing

import math
from typing import List, Dict

class Circle:
    def __init__(self, radius: float):
        self.radius = radius

    def area(self) -> float:
        return math.pi * self.radius ** 2

    def circumference(self) -> float:
        return 2 * math.pi * self.radius


def greet(name: str = "World") -> str:
    return f"Hello, {name}!"


def process_numbers(nums: List[int]) -> Dict[str, float]:
    return {
        "count": len(nums),
        "sum": sum(nums),
        "average": sum(nums) / len(nums) if nums else 0
    }


if __name__ == "__main__":
    circle = Circle(5)
    print("Area:", circle.area())
    print("Circumference:", circle.circumference())
    print(greet("Alice"))
    print(process_numbers([1, 2, 3, 4, 5]))

