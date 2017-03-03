console.log('starting password manager');

var store = require('node-persist');
store.initSync();
/*
 * account.name {string} account provider
 * account.username {string} user
 * account.password {string}
 */

function createAccount(account) {
  var accounts = store.getItemSync('accounts');
  if (typeof(accounts) === undefined) accounts = [];

  accounts.push(account);
  store.setItemSync('accounts',accounts);

  return account;
}

function getAccount(accountName) {
  var accounts = store.getItemSync('accounts');
  var match;

  accounts.forEach(function(a) {
    if (a.name === accountName) match = a;
  });

  return match;

}

var fb = {
  name: 'Facebook',
  username: 'cmatzenbach',
  password: 'testy'
};

createAccount(fb);

console.log(getAccount('Facebook'));
