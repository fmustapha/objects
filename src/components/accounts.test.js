import Accounts from './accounts';
const newAccounts = [
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
        newAccount.addAccount(newAccounts[0]);
        newAccount.addAccount(newAccounts[1]);
        newAccount.addAccount(newAccounts[2]);
        expect(newAccount.accounts).toEqual(newAccounts);
    });

    it('should return an owners accounts', () => {
        expect(newAccount.getAllAccounts()).toEqual(newAccounts);
    });

    it('should return an owners account', () => {
        const Id = 3;
        expect(newAccount.getAnAccount(Id)[0]).toEqual(newAccounts[2]);
    });

    it('should add two numbers together', () => {
        let accumulator = 19; const arrValue = 10;
        const expectedValue = accumulator + arrValue
        expect(newAccount.sumNumbers(accumulator, arrValue)).toEqual(expectedValue);
    });

    it('should return the total value of accounts', () => {
        const totalValue = newAccount.accounts[0].balance + newAccount.accounts[1].balance + newAccount.accounts[2].balance;
        console.log(newAccount.getTotalValue(newAccounts), "<---totalValue")
        expect(newAccount.getTotalValue(newAccounts)).toEqual(totalValue);
    });
});