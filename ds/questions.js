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