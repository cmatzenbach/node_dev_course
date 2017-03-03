var account = {
  balance: 0  
};

function deposit(acc, amt) {
  acc.balance += amt;
}

function withdraw(acc, amt) {
  acc.balance -= amt;
}

function getBalance(acc) {
  return acc.balance;
}

deposit(account, 500);
console.log(getBalance(account));

withdraw(account, 40);
console.log(getBalance(account));
