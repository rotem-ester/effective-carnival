/* you are given an array of numbers from 0-1024. each number appears only once. 
however, one number is missing. write a function which determines which number is missing */

function findMissingNumber(array) {
    const map = new Map()
    const fullArr = generateArray(1025)
    let index = 0

    for(let i = 0 ; i < array.length; i++){
        map.set(array[i], 1)
    }

    for(let i = 0 ; i < fullArr.length; i++){
        if (!map.get(fullArr[i])){
            index = i
            break
        }
    }

    return fullArr[index]
}

function generateArray(missingNum){
    let count = 0
    let i = 0
    const resArr = []

    while(count < 1025){
        if (count === missingNum){
            count += 1
            continue
        }
        resArr[i] = count
        count += 1
        i += 1
    }

    return resArr
}

const myArray = generateArray(88)
console.log(`missing number is ${findMissingNumber(myArray)}`)

/* write a function finding contiguous subarray within a one-dimensional array
of numbers which has the largest sum.
for example, for sequence [ -2, 1, -3, 4, -1, 2, 1, -5, 4] the contiguous subarray
with largest sum is [ 4, -1, 2, 1 ] with sum 6.
the run time complexity of your function should be O(n) */

function getSubArrayWithLargestSum(arr) {
    // [ -2, 1, -3, 4, -1, 2, 1, -5, 4]
    // not implemented
    const arrSize = arr.length
    let maxStartIndex, maxEndIndex, currEndIndex
    let max = 0
    let currMax = 0
    let currSum = 0
    let currStartIndex = 0

    for (let i = 0; i < arrSize; i++) {
        currSum = currSum + arr[i]
     
        if (currSum > currMax) {
            currMax = currSum
        }
        if (currMax > max) {
            max = currMax
        }

    }
}