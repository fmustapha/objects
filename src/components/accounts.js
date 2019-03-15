
class Accounts {
    constructor(name, accounts = [], value=0) {
        this.name = name;
        this.value = value;
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

    getTotalValue() {
        this.accounts.forEach(account => {
            this.value+=account.balance;
        });
        return this.value;
    }
}

export default Accounts;