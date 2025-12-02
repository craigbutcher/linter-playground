-- Sample Lua file for Tree-sitter testing

-- Define a table
local user = {
	id = 1,
	name = "Alice",
	isAdmin = true,
}

-- Function with default argument
local function greet(name)
	name = name or "World"
	return "Hello, " .. name .. "!"
end

-- Simple loop
for i = 1, 5 do
	print("Number: " .. i)
end

-- Conditional logic
if user.isAdmin then
	print(user.name .. " is an admin")
else
	print(user.name .. " is a regular user")
end

-- Example of higher-order function
local function applyTwice(func, value)
	return func(func(value))
end

local function square(x)
	return x * x
end

print("Apply twice result: " .. applyTwice(square, 2))
print(greet(user.name))
