// part 1:
// Expense - properties: description, amount
// addExpense -> arg: description of expense, amount
// getAccountSummery -> total up all expenses -> print: Stefan has $TOTAL in expenses.

// part 2:
// 1. add income array to account obj
// 2. addIncome method -> arg: description, amount
// 3. tweak getAccountSummery (add income to print)

// Stefan has a balance of 100$. $500 in income. 400$ in expenses.

const account = {
    name: 'Stefan',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        // new object (expense)
        const expense = {
            description: description,
            amount: amount,
        }
        // add that new obj to expenses array
        this.expenses.push(expense)
    },
    getAccountSummery: function () {
        // temp variable to store total amount
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0

        // calc total expenses
        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount // adding amount from each obj
        })

        // calc total income
        this.income.forEach(function (obj) {
            totalIncome += obj.amount
        })

        balance = totalIncome - totalExpenses

        return `${this.name} has a balance of ${balance}$. $${totalIncome} in income. $${totalExpenses} in expenses.` // return formated string
    },
    addIncome: function (description, amount) {
        // new obj
        const incomeObj = {
            description: description,
            amount: amount,
        }

        // add obj to income array
        this.income.push(incomeObj)
    }
}


// calls
account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummery())