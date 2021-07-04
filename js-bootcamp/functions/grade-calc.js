
let gradeCalc = function(studentScore, totalPossibleScore){
    let percentScore = (studentScore / totalPossibleScore) * 100
    let gradeGroup;

    if (percentScore < 60){
        gradeGroup = 'F'
    } else if (percentScore >= 60 && percentScore < 70){
        gradeGroup = 'D'
    } else if (percentScore >= 70 && percentScore < 80){
        gradeGroup = 'C'
    } else if (percentScore >= 80 && percentScore < 89){
        gradeGroup = 'B'
    } else if (percentScore >= 90){
        gradeGroup = 'A'
    }

    return `You got a ${gradeGroup} (${percentScore}%)!`
}

console.log(gradeCalc(40, 100))
console.log(gradeCalc(65, 100))
console.log(gradeCalc(75, 100))
console.log(gradeCalc(85, 100))
console.log(gradeCalc(90, 100))
