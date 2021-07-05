const account = {
    name: 'Rotem Cohen',
    expenses: [],
    income: [],

    addExpense: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0
        
        this.expenses.forEach(function(expense){
            totalExpenses += expense.amount
        })
        this.income.forEach(function(income){
            totalIncome += income.amount
        })
        
        balance = totalIncome - totalExpenses
        
        console.log(`${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`)
    }
}

account.addExpense('Rent', 3300)
account.addExpense('Coffee and cake', 16)
account.addIncome('salary', 9000)
account.getAccountSummary()
