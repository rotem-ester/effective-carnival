const doWorkPromise = new Promise( (resolve, reject) => {
    setTimeout(() => {
        //resolve([1, 2, 3])
        reject('error')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('success', result)
}).catch((error) => {
    console.log(error)
})

async function f() {
    return 1;
}

f().then(alert)