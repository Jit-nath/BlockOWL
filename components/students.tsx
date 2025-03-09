import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Import ShadCN Table components

const students = [
  { id: 1, name: "John Doe", age: 20, course: "Computer Science", grade: "A" },
  {
    id: 2,
    name: "Jane Smith",
    age: 22,
    course: "Electrical Engineering",
    grade: "B",
  },
  {
    id: 3,
    name: "Alex Johnson",
    age: 19,
    course: "Mechanical Engineering",
    grade: "C",
  },
  { id: 4, name: "Sara Lee", age: 21, course: "Biotechnology", grade: "A" },
  { id: 5, name: "David Kim", age: 23, course: "Mathematics", grade: "B" },
  { id: 6, name: "David Kim", age: 23, course: "Mathematics", grade: "B" },
  { id: 7, name: "David Kim", age: 23, course: "Mathematics", grade: "B" },
  { id: 8, name: "David Kim", age: 23, course: "Mathematics", grade: "B" },
];

const StudentTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Grade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.age}</TableCell>
              <TableCell>{student.course}</TableCell>
              <TableCell>{student.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentTable;
