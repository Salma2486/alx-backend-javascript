export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((acc, element) => acc + element.id, 0);
}
