const account = {
  name: 'Justin The Wind',
  expenses: [],
  income: [],
  getItemObject: function (description, amount) {
    return { description: description, amount: amount }
  },
  addExpense: function (description, amount) {
    this.expenses.push(this.getItemObject(description, amount))
  },
  addIncome: function (description, amount) {
    this.income.push(this.getItemObject(description, amount))
  },
  getAccountSummary: function () {
    let totalExpenses = 0 // important to set this to 0... otherwise NaN error.
    let totalIncome = 0
    let balance = 0
    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.amount
    })
    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.amount
    })
    balance = totalIncome - totalExpenses
    return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`
  },
}

account.addExpense('rent', 1600)
account.addExpense('beer', 4)
account.addIncome('paycheck', 2000)
account.addIncome('side hustle', 500)
console.log(account)
console.log(account.getAccountSummary())
