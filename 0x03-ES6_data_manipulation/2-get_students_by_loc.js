export default function getStudentsByLocation(listOfStudents, city) {
  let lst;
  try {
    lst = listOfStudents.filter((student) => student.location === city);
  } catch (e) {
    lst = [];
  }
  return lst;
}
