"use strict";
// class Account {
//     readonly id: number;
//     public man_name: string;
//     private balance: number;
class Account {
    id;
    man_name;
    balance;
    isLimited = false;
    limit = 0;
    constructor(id, man_name, balance) {
        this.id = id;
        this.man_name = man_name;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.isLimited && amount > this.limit) {
            throw new Error(`You cannot withdraw more than ${this.limit}`);
        }
        if (this.balance < amount) {
            throw new Error("Insufficient balance...");
        }
        this.balance -= amount;
    }
    status() {
        console.log(`Account ${this.id} (${this.man_name} ) has a balance of ${this.balance} `);
    }
}
class StudentAccount extends Account {
    isLimited = true;
    limit = 10000;
}
class SavingsAccount extends Account {
    isLimited = true;
    limit = 50000;
}
class CurrentAccount extends Account {
}
const studentAccount = new StudentAccount(123, "Farid Mia", 25000);
studentAccount.withdraw(5000);
studentAccount.status();
