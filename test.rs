// Sample Rust file for Tree-sitter testing

use std::fmt;

// Struct with derived traits
#[derive(Debug)]
struct User {
    id: u32,
    name: String,
    is_admin: bool,
}

// Implement methods for User
impl User {
    fn new(id: u32, name: &str, is_admin: bool) -> Self {
        User {
            id,
            name: name.to_string(),
            is_admin,
        }
    }

    fn greet(&self) -> String {
        format!("Hello, {}!", self.name)
    }
}

// Generic function
fn identity<T: fmt::Debug>(value: T) -> T {
    println!("Debug: {:?}", value);
    value
}

fn main() {
    let alice = User::new(1, "Alice", true);

    println!("{}", alice.greet());

    if alice.is_admin {
        println!("{} is an admin!", alice.name);
    } else {
        println!("{} is a regular user.", alice.name);
    }

    // Vectors and loops
    let numbers = vec![1, 2, 3, 4, 5];
    for n in &numbers {
        println!("Number: {}", n);
    }

    // Call generic function
    identity(numbers);
}

