import Account from './account';

const myAccount = new Account(23, 'Savings'); 

describe('Account class', () => {
    it('should create an account object', ()=>{
        expect(myAccount.name).toBe('Savings');
        expect(myAccount.balance).toBe(23);
        expect(myAccount.id).toEqual(0);
    }); 

    it('should have a withdraw method', ()=>{
        expect(myAccount.withdraw(10)).toBe(13);
    });
    it('should have a deposit method', ()=>{
        expect(myAccount.deposit(10)).toBe(23);
    });
    it('should return the current balance', ()=>{
        expect(myAccount.balance).toBe(23);
    });
});