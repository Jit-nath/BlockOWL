import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ExamSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Exam Section</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">Appear for exams and check results.</p>
        <Button className="mt-4">Start Exam</Button>
      </CardContent>
    </Card>
  );
}
