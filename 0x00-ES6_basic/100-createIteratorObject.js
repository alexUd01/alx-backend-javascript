export default function createIteratorObject(report) {
  let list = [];

  for (let item in report.allEmployees) {
    list = [...list, ...report.allEmployees[item]];
  }
  return list;
}
