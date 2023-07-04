export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  let result;
  try {
    const studentsAtCity = listOfStudents.filter((student) => student.location === city);
    result = studentsAtCity.map((student) => {
      for (const item of newGrades) {
        if (item.studentId === student.id) {
          student.grade = item.grade; // eslint-disable-line no-param-reassign
          return student;
        }
      }
      student.grade = 'N/A'; // eslint-disable-line no-param-reassign
      return student;
    });
  } catch (e) {
    return String(e);
  }
  return result;
}
