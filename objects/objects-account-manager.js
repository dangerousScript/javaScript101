// addExpenses (account, amount)
// addIncome (account, amount)
// resetAccount (account) - 0
// getAccountSummery(account)

// primer: Stefan has 900$. 1000$ is income. 100$ in expenses

// poziv
// addIncome
// addExpenses
// addExpenses
// getAccountSummery
// resetAccount
// getAccountSummery

let myAccount = {
    name: 'Stefan',
    expenses: 0,
    income: 0
}

let addExpenses = function (account, amount) {
    account.expenses += amount
}

let addIncome = function (account, amount) {
    account.income += amount
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummery = function (account) {
    console.log(`${account.name} has ${account.income - account.expenses}$. ${account.income}$ is income. ${account.expenses}$ in expenses.`)
}

addIncome(myAccount, 1000)
addExpenses(myAccount, 20)
addExpenses(myAccount, 80)
getAccountSummery(myAccount)
resetAccount(myAccount)
getAccountSummery(myAccount)
