import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ClassroomSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Classroom</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">
          Join your classroom and participate in discussions.
        </p>
        <Button className="mt-4">Enter Classroom</Button>
      </CardContent>
    </Card>
  );
}
