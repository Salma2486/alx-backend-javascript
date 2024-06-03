export default function updateStudentGradeByCity(students, city, newGrades) {
  const filtered = students.filter((student) => student.location === city);
  const mapped = filtered.map((student) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    const finalGrade = gradeObject ? gradeObject.grade : 'N/A';
    return { ...student, grade: finalGrade };
  });
  return mapped;
}
