let counter = 0;

class Account {
    constructor(balance, name) {
        this.balance = balance;
        this.name = name;
        this.id = counter++; 
    }

    deposit(amount) {
       this.balance = this.balance + amount;
       return this.balance;
    }
    withdraw(amount) {
        this.balance -= amount;
        return this.balance;
    }
    
    balance() {
      return this.balance;  
    }
}

export default Account;
