export default function getStudentIdsSum(listOfStudents) {
  let sum;
  try {
    const listOfIds = listOfStudents.map((a) => a.id);
    sum = listOfIds.reduce((a, b) => a + b);
  } catch (e) {
    return String(e);
  }
  return sum;
}
