import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MarksSection from "@/components/MarksSection";
import ClassroomSection from "@/components/ClassroomSection";
import QuizSection from "@/components/QuizSection";
import ExamSection from "@/components/ExamSection";

export default function StudentProfile() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Student Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-sm text-gray-500">ID: 123456</p>
              <p className="text-sm text-gray-500">Class: 10th Grade</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <MarksSection />
      <ClassroomSection />
      <QuizSection />
      <ExamSection />
    </div>
  );
}
