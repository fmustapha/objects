import Accounts from './accounts';
const myAccounts = [
{
    balance: 200,
    name: 'savings',
    id: 1
},

{
    balance: 600,
    name: 'current',
    id: 2
},

{
    balance: 1000,
    name: 'checking',
    id: 3
    }
]

const newAccount = new Accounts("Faith");

describe ('Accounts Class', () => {
    
    it('should create accounts objects', () => {
        expect(newAccount.name).toBe("Faith");
        expect(newAccount.accounts).toEqual([]);
    });

    it('should add new accounts', () => {
        newAccount.addAccount(myAccounts[0]);
        newAccount.addAccount(myAccounts[1]);
        newAccount.addAccount(myAccounts[2]);
        expect(newAccount.accounts).toEqual(myAccounts);
    });

    it('should return an owners accounts', () => {
        expect(newAccount.getAllAccounts()).toEqual(myAccounts);
    });

    it('should return an owners account', () => {
        const Id = 3;
        expect(newAccount.getAnAccount(Id)[0]).toEqual(myAccounts[2]);
    });

    it('should add two numbers together', () => {
        let accumulator = 19; const arrValue = 10;
        const expectedValue = accumulator + arrValue
        expect(newAccount.sumNumbers(accumulator, arrValue)).toEqual(expectedValue);
    });

    it('should return the total value of accounts', () => {
        const totalValue = newAccount.accounts[0].balance + newAccount.accounts[1].balance + newAccount.accounts[2].balance;
        expect(newAccount.getTotalValue(myAccounts)).toEqual(totalValue);
    });

    it('should return the account with the minimum balance', () => {
        expect(newAccount.getMinBalance(myAccounts)[0]).toEqual(myAccounts[0]);
    });

    it('should return the account with the maximum balance', () => {
        expect(newAccount.getMaxBalance(myAccounts)[0]).toEqual(myAccounts[2]);
    });
});