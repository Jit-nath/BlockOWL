interface SubjectMarks {
  subject: string;
  marks: number; 
}

interface Marks {
  studentID: number;
  subjects: SubjectMarks[];
}

export type { Marks, SubjectMarks };
