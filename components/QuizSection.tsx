import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function QuizSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quiz Section</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">
          Attempt quizzes and test your knowledge.
        </p>
        <Button className="mt-4">Start Quiz</Button>
      </CardContent>
    </Card>
  );
}
