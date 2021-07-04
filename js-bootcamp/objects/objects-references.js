let myAccount = {
    name: 'Rotem',
    expences: 0,
    income: 0
}

let addExpence = function(account, amount){
    account.expences += amount
    console.log(account)
}

let addIncome = function(account, amount){
    account.income += amount
}

let resetAccount = function(account){
    account.expences = 0
    account.income = 0
}

let getAccountSummary = function(account){
    return `account for ${account.name} has ${account.income - account.expences}. \
${account.income} in income. ${account.expences} in expences.`
}

addIncome(myAccount, 1000)
addExpence(myAccount, 50)
addExpence(myAccount, 50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
