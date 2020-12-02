// Two args: studentScore, totalPossibleScore
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const grade = function (studentScore, totalPossibleScore) {
  if (
    typeof studentScore !== 'number' ||
    typeof totalPossibleScore !== 'number'
  ) {
    throw Error('The function demands numbers')
  }

  const gradePercent = (studentScore / totalPossibleScore) * 100
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

try {
  const result = grade(420, true)
  console.log(result)
} catch (error) {
  console.log(error.message)
}
