function getAverageGrade(student, course) {
  for (let entry of student.transcript) {
    if (entry.course === course) {
      let sum = 0;
      for (let grade of entry.grades) {
        sum += grade;
      }
      return sum / entry.grades.length;
    }
  }

  return -1;
}

function getAssignmentMark(student, course, num) {
  for (let entry of student.transcript) {
    if (entry.course === course) {
      if (num >= 0 && num < entry.grades.length) {
        return entry.grades[num];
      }
    }
  }

  return -1;
}

function averageAssessment(students, courseName, assignment) {
  let sum = 0;
  let count = 0;

  for (let student of students) {
    for (let entry of student.transcript) {
      if (entry.course === courseName) {
        if (assignment >= 0 && assignment < entry.grades.length) {
          sum += entry.grades[assignment];
          count++;
        }
      }
    }
  }

  return count > 0 ? sum / count : -1;
}
