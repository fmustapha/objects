import Accounts from './accounts';

const account1 = {
    balance: 200,
    name: 'savings',
    id: 1
};

const account2 = {
    balance: 600,
    name: 'current',
    id: 2
};

const newAccount = new Accounts("Faith");

describe ('Accounts Class', () => {
    
    it('should create accounts objects', () => {
        expect(newAccount.name).toBe("Faith");
        expect(newAccount.accounts).toEqual([]);
    });

    it('should add new accounts', () => {
        newAccount.addAccount(account1);
        newAccount.addAccount(account2);
        expect(newAccount.accounts).toEqual([account1, account2]);
    });

    it('should return an owners accounts', () => {
        expect(newAccount.getAllAccounts()).toEqual([account1, account2]);
    });

    it('should return an owners account', () => {
        expect(newAccount.getAnAccount(1)).toEqual([account1]);
    });

    it('should return the total value of accounts', () => {
        newAccount.getTotalValue();
        const value = account1.balance + account2.balance;
        expect(newAccount.value).toEqual(value);
    });
});