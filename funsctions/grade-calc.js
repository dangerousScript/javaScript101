// to arg: studentScore, total possible score
// exp: 15/20 -> grade C (75%)
// % A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalculator = function (studentScore, totalScore = 20) {
    let formatOutput
    let percent = studentScore / totalScore * 100

    if (percent >= 90 && percent <= 100) {
        formatOutput = `Total score: ${totalScore}, Your score: ${studentScore}, Grade: A (${percent}%)`
    } else if (percent >= 80 && percent <= 89) {
        formatOutput = `Total score: ${totalScore}, Your score: ${studentScore}, Grade: B (${percent}%)`
    } else if (percent >= 70 && percent <= 79) {
        formatOutput = `Total score: ${totalScore}, Your score: ${studentScore}, Grade: C (${percent}%)`
    } else if (percent >= 60 && percent <= 69) {
        formatOutput = `Total score: ${totalScore}, Your score: ${studentScore}, Grade: D (${percent}%)`
    } else {
        formatOutput = `Total score: ${totalScore}, Your score: ${studentScore}, Grade: F (${percent}%)`
    }

    return formatOutput
}

let outPut = gradeCalculator(15, 100)
console.log(outPut)