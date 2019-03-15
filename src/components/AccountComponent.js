import React, { Component } from "react";
import Accounts from "./accounts";
import Account from "./account";
import "../style/AccountComponent.css";

class AccountComponent extends Component {
  state = {

  };

  handleChange = e => {
    this.setState({
      [e.target.name]:
        e.target.name === "name" || e.target.name === "accountName"? e.target.value : parseInt(e.target.value, 10)
    });
  };

    handleSubmit = () => {
      const { name } = this.state;
      const myAccounts = new Accounts(name);
      this.setState({ myAccounts });
  };

  handleCreateAccount = () => {
      const { myAccounts, accountName, balance } = this.state;
      const newAccount = new Account(balance, accountName);
      console.log(newAccount);
      myAccounts.addAccount(newAccount);
      this.setState({ myAccounts });
  }

  handleDelete = id => {
    const { myAccounts } = this.state;

    const myNewAccounts = new Accounts(myAccounts.name);
    myNewAccounts.accounts = myAccounts.accounts;
    myNewAccounts.removeAccount(id);
    this.setState({
      myAccounts: myNewAccounts
    });
  };
  renderAccounts = () => {
    const { accountName } = this.state;
    const { accounts: accountsArr } = this.state.myAccounts;
    return accountsArr.map(account => {
      return (
        <div key={account.id} className="card">
          <div className="card-body">
            <h5 className="card-title">
              {account.id}: {accountName} - ${account.balance}
            </h5>
            <button
              type="submit"
              className="btn btn-info"
              onClick={() => this.handleDelete(account.id)}
            >
              Delete
            </button>
            
          </div>
        </div>
      );
    });
  };

  handleOperation = () => {
    let { myAccounts, balance, operation, accountId } = { ...this.state };
    let currentAccount = myAccounts.getAnAccount(accountId);
    if (operation === 1) {
      currentAccount[0].withdraw(balance);
    } else if (operation === 2) {
      currentAccount[0].deposit(balance);
    }
    this.setState({
      myAccounts
    });
  };

  render() {
    const { accountName, myAccounts, accountId } = this.state;
    return (
      <div className="account">
        <section>
          <h1 className="header">Account Management</h1>

          <fieldset className="border p-2 fieldset">
            <legend className="w-auto">Create New Account</legend>

            <label htmlFor="account-name" className="control-label col-xs-2">
              Account Owner:<abbr title="required">*</abbr>
            </label>
            <input
              className="form-control"
              name="name"
              type="text"
              id="name"
              onChange={this.handleChange}
              required
            />
            <br />
            <div className="offset-xs-1">
              <div className="d-inline mr-2">
                <button
                  type="submit"
                  id="submitBtn"
                  onClick={this.handleSubmit}
                  className="btn btn-info"
                >
                  Submit
                </button>
              </div>
              <div className="d-inline">
                <button type="submit" id="resetBtn" className="btn btn-info">
                  Reset
                </button>
              </div>
            </div>
            <br />

            <label htmlFor="account-balance" className="control-label col-xs-2">
              Account Balance:<abbr title="required">*</abbr>
            </label>
            <input
              className="form-control col-xs-10"
              name="balance"
              type="text"
              id="balance"
              onChange={this.handleChange}
              required
            />
            <br />

            <p>
            <label htmlFor="accountName" className="control-label col-xs-2">
              Name of Account:<abbr title="required">*</abbr>
            </label>
            <input
              className="form-control"
              name="accountName"
              type="text"
              id="accountName"
              onChange={this.handleChange}
              placeholder="e.g Checking"
              required
            />
            </p>

            <p>
              <button
                className="btn btn-info"
                type="submit"
                onClick={this.handleCreateAccount}
              >
                Create Account
              </button>
            </p>
          </fieldset>
          <br />
          <fieldset className="border p-2">
            <legend className="w-auto">Account Operations</legend>
            <div className="fieldset">
              <div className="form-group row">
                <select
                  className="custom-select col-xs-12"
                  name="accountId"
                  onChange={this.handleChange}
                >
                  <option value="">--Please select the account--</option>
                  {myAccounts &&
                    myAccounts.accounts &&
                    myAccounts.accounts.map(account => (
                      <option key={account.id} value={account.id}>{`${
                        account.id
                      } - ${accountName}: ${
                        account.balance
                      }`}</option>
                    ))}
                </select>
              </div>
              <div className="form-group row">
                <select
                  className="custom-select col-xs-12"
                  name="operation"
                  onChange={this.handleChange}
                >
                  <option value="">--Please choose an operation--</option>
                  <option value="1">Withdraw</option>
                  <option value="2">Deposit</option>
                </select>
              </div>
              <label htmlFor="account-balance" className="control-label col-xs-2">
              Amount:<abbr title="required">*</abbr>
            </label>
            <input
              className="form-control col-xs-10"
              name="balance"
              type="text"
              id="balance"
              onChange={this.handleChange}
              required
            />
            <br />
              <div className="offset-xm-1">
                <button
                  type="submit"
                  id="submitBtn"
                  className="btn btn-info"
                  onClick={this.handleOperation}
                >
                  Submit
                </button>
              </div>
            </div>
          </fieldset>
        </section>
        <div className="account-right">
          {this.state.myAccounts &&
            this.state.myAccounts.accounts && 
            this.state.myAccounts.accounts.length > 0 && <h2>Total Value:{this.state.myAccounts.getTotalValue()}</h2>}
          {this.state.myAccounts &&
            this.state.myAccounts.accounts &&
            this.renderAccounts()}
        </div>
      </div>
    );
  }
}

export default AccountComponent;
