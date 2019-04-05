
class Accounts {
    constructor(name, accounts=[]) {
        this.name = name;
        this.value = this.getTotalValue(accounts);
        this.accounts = accounts;    
    }

    getAnAccount(accountId) {
        const account = this.accounts.filter(account => account.id === accountId);
        return account;
    }
    
    getAllAccounts() {
        return this.accounts;
    }

    addAccount(account) {
        return this.accounts.push(account);
    }

    removeAccount(accountId) {
        return this.accounts = this.accounts.filter((account) => account.id !== accountId);
    }

    getTotalValue(accounts) {
        return accounts.map( account => account.balance ).reduce(this.sumNumbers, 0)
    }

    sumNumbers(accumulator, currentValue) {
        return accumulator + currentValue;
    }
}

export default Accounts;