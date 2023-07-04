export default function getListStudentIds(arr = []) {
  let lst;

  try {
    lst = arr.map((item) => item.id);
  } catch (e) {
    lst = [];
  }

  return lst;
}
