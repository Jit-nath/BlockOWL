import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MarksSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Marks & Certificates</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">
          View your marks and download certificates.
        </p>
        <div className="flex space-x-4 mt-4">
          <Button variant="outline">View Marks</Button>
          <Button>Download Certificate</Button>
        </div>
      </CardContent>
    </Card>
  );
}
