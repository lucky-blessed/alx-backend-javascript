export default function getStudentIDsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
