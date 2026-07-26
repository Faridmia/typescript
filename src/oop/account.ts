// class Account {
//     readonly id: number;
//     public man_name: string;
//     private balance: number;

//     constructor(id: number, man_name: string, balance: number) {
//         this.id = id;
//         this.man_name = man_name;
//         this.balance = balance;
//     }
// }

interface BaseAccount {
    readonly id:number;
    man_name: string;
    deposit( amount: number ): void;
    withdraw( amount:number ) : void;
    status() : void;
}

class Account implements BaseAccount {

    protected isLimited: boolean = false;
    protected limit: number = 0;
    constructor(public readonly id: number, public man_name: string, protected balance: number) {}

    deposit(amount: number ) : void {
        this.balance += amount;
    }

    withdraw( amount:number ) : void {
        if( this.isLimited && amount > this.limit ) {
            throw new Error(`You cannot withdraw more than ${this.limit}`);
        }
        if( this.balance < amount ) {
            throw new Error("Insufficient balance...");
        }

        this.balance -= amount;
    }

    status() : void {
        console.log(`Account ${this.id} (${this.man_name} ) has a balance of ${this.balance} `)
    }

}

class StudentAccount extends Account {
    protected isLimited: boolean = true;
    protected limit:number = 10000;
}

class SavingsAccount extends Account {
    protected isLimited: boolean = true;
    protected limit:number = 50000;
}

class CurrentAccount extends Account {}


// const studentAccount = new StudentAccount( 123, "Farid Mia", 25000 );

// studentAccount.withdraw(5000);

// studentAccount.status();

// studentAccount.withdraw(15000);

// studentAccount.status();


const savingAccount = new SavingsAccount( 123, "Farid Mia", 125000 );

savingAccount.withdraw(15000);

savingAccount.status();

savingAccount.withdraw(25000);

savingAccount.status();