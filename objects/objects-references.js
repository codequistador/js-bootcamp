let myAccount = {
  name: 'Justin Stagramin',
  expenses: 0,
  income: 0,
}

// account changes account AND myAccount (both point to same object in memory)
// If we change properties the above applies.
// If we assign the entire `account` object to something different we break the binding between the two.
let addExpense = function (account, expense) {
  // account = {} // break the binding
  account.expenses = account.expenses + expense
}

// Add income to account (account, amount to add)
let addIncome = function (account, income) {
  account.income = account.income + income
}

// reset account. reset expenses and income to 0
let resetAccount = function (account) {
  account.income = 0
  account.expenses = 0
}

// get account summary. print summary of account
// Account total, income, expenses
let getAccountSummary = function (account) {
  let accountTotal = account.income - account.expenses
  return `Account for ${account.name} has $${accountTotal}. $${account.income} in income and $${account.expenses} in expenses.`
}

// Add some income
addIncome(myAccount, 3150)
// Add an expense
addExpense(myAccount, 1345)
// Add another expense
addExpense(myAccount, 767)
// Check account
console.log(getAccountSummary(myAccount))
// Reset
resetAccount(myAccount)
// Check account again
console.log(getAccountSummary(myAccount))
