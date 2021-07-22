function fibonacciSync(n) {
    if (n <= 1){
        return n
    }

    return fibonacciSync(n - 1) + fibonacciSync (n - 2)
}


// (function() {
//     for (let i = 20; i >= 0; i--){
//         setImmediate(() => {
//             console.log(fibonacciSync(i))
//         })
//     }
// })()

//   console.log('hello')

