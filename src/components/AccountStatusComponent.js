import React from 'react';

const AccountStatusComponent = (props) => {
    const { myAccounts } = props;
    const totalValue = myAccounts.getTotalValue(myAccounts.accounts);
    let maxAccount = myAccounts.getMaxBalance(myAccounts.accounts);
        maxAccount = maxAccount[0];
    let minAccount = myAccounts.getMinBalance(myAccounts.accounts);
        minAccount = minAccount[0];

    return (
        <div>
        <h2 className="total">Total Value:{`$ ${totalValue}`}</h2>
        <p>
        {totalValue !== minAccount &&
        <h5 className="minBal">Minimum Balance:{`$ ${minAccount.balance}-${minAccount.name}-${minAccount.id}`}</h5>}
        {minAccount !== maxAccount &&
        <h5 className="maxBal">Maximum Balance:{`$ ${maxAccount.balance}-${maxAccount.name}-${maxAccount.id}`}</h5>}
        </p>
        </div>
    );
}
 
export default AccountStatusComponent;

