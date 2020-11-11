// Two args: studentScore, totalPossibleScore
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let grade = function (studentScore, totalPossibleScore) {
  let gradePercent = (studentScore / totalPossibleScore) * 100
  let letterGrade
  if (gradePercent >= 90) {
    letterGrade = 'A'
  } else if (gradePercent >= 80) {
    letterGrade = 'B'
  } else if (gradePercent >= 70) {
    letterGrade = 'C'
  } else if (gradePercent >= 60) {
    letterGrade = 'D'
  } else {
    letterGrade = 'F'
  }
  return `You got a ${letterGrade} (${gradePercent}%)`
}

let result = grade(18, 25)
console.log(result)
