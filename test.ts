// Sample TypeScript file for Tree-sitter testing

type User = {
	id: number;
	name: string;
	email?: string; // optional property
};

enum Role {
	Admin = "ADMIN",
	User = "USER",
}

class Account {
	private balance: number;

	constructor(public user: User, public role: Role) {
		this.balance = 0;
	}

	deposit(amount: number): void {
		if (amount <= 0) throw new Error("Amount must be positive");
		this.balance += amount;
	}

	withdraw(amount: number): boolean {
		if (amount > this.balance) return false;
		this.balance -= amount;
		return true;
	}

	getBalance(): number {
		return this.balance;
	}
}

// Generic function
function identity<T>(value: T): T {
	return value;
}

// Example usage
const user: User = { id: 1, name: "Alice" };
const account = new Account(user, Role.User);
account.deposit(100);

console.log(`Balance: ${account.getBalance()}`);
console.log(identity<string>("Hello TypeScript!"));

