// Sample Go file for Tree-sitter testing
package main

import (
    "fmt"
    "math"
)

type User struct {
    ID     int
    Name   string
    IsAdmin bool
}

func (u User) Greet() string {
    return fmt.Sprintf("Hello, %s!", u.Name)
}

func CircleArea(radius float64) float64 {
    return math.Pi * radius * radius
}

func main() {
    alice := User{ID: 1, Name: "Alice", IsAdmin: true}
    fmt.Println(alice.Greet())

    if alice.IsAdmin {
        fmt.Println(alice.Name, "is an admin!")
    } else {
        fmt.Println(alice.Name, "is a regular user.")
    }

    nums := []int{1, 2, 3, 4, 5}
    sum := 0
    for _, n := range nums {
        sum += n
    }
    fmt.Println("Sum:", sum)

    fmt.Println("Circle area (r=5):", CircleArea(5))
}

