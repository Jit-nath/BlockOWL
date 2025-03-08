"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

import StudentTable from "@/components/students";
import { useState } from "react";
import ClassroomChat from "@/components/Chatui";
import { ExamCard } from "@/components/ui/ExamCard";
import { ClassCard } from "@/components/ui/classCard";

export default function DashboardPage() {
  const [dark, toggle] = useState<boolean>(true);

  const students = [
    { id: 1, name: "John Doe", subID: "ID", Marks: 0 },
    { id: 2, name: "John Doe", subID: "ID", Marks: 0 },
    { id: 3, name: "John Doe", subID: "ID", Marks: 0 },
    { id: 4, name: "Bob Johnson", subID: "ID", Marks: 0 },
  ];

  const [studentMarks, setStudentMarks] = useState(
    students.map((student) => ({
      id: student.id,
      name: student.name,
      subID: student.subID,
      marks: "",
    }))
  );

  const [submitted, setSubmitted] = useState<Boolean>(false);

  const handleMarksChange = (id: number, value: string) => {
    setStudentMarks((prev) =>
      prev.map((s) => (s.id === id ? { ...s, marks: value } : s))
    );
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
      const jsonData = JSON.stringify(studentMarks);
      console.log(jsonData);
    }, 1000);
  };

  return (
    <div
      className={`flex min-h-screen flex-col dark bg-background text-foreground w-screen`}
      id="haveToBeDark"
    >
      {/* Header */}
      {/* .................................................................................................................. */}
      {/* <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
              <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary-foreground">
                S
              </div>
            </div>
            <span className="text-xl font-bold">SaaSify EDU</span>
          </div>

          <div className="flex items-center gap-4">
            <div
              className="cursor-pointer p-2"
              onClick={() => toggle((prev) => !prev)}
            >
              {dark ? <Sun /> : <Moon />}
            </div>
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-8" />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="User"
              />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header> */}

      <div className="flex flex-1">
        {/* Main Content */}
        {/* .................................................................................................................. */}
        <main className="flex-1 overflow-auto m-2">
          <div className="container py-6">
            <h1 className="mb-6 text-2xl font-bold">Hi name!</h1>
            <Tabs defaultValue="overview" className="space-y-2 ">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="classes">Classes</TabsTrigger>
                <TabsTrigger value="exams">Exams</TabsTrigger>
                <TabsTrigger value="students">Students</TabsTrigger>
                <TabsTrigger value="communication">Chat</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                overview
              </TabsContent>
              <TabsContent value="classes" className="sm:w-full">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="mb-2 rounded-2xl cursor-pointer">
                      Add Class
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Insert Class Details</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      {/* Label for the input field */}
                      <label
                        htmlFor="class-name"
                        className="text-sm font-medium"
                      >
                        Class Name
                      </label>
                      <Input
                        id="class-name"
                        placeholder="Enter Class Name"
                        className="w-full mt-2"
                      />
                      <label
                        htmlFor="class-name"
                        className="text-sm font-medium"
                      >
                        Semester
                      </label>
                      <Input
                        id="class-name"
                        placeholder="Enter Semester"
                        className="w-full mt-2"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
              </TabsContent>
              <TabsContent value="exams" className="sm:w-full space-x-2">
                <Button className="mb-2 rounded-2xl cursor-pointer">
                  Schedule Exam
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="mb-2 rounded-2xl cursor-pointer">
                      Upload Marks
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <DialogHeader>
                      <DialogTitle>
                        Manually upload marks of your class
                      </DialogTitle>
                    </DialogHeader>
                    {/* Scrollable Table Container */}
                    <ScrollArea className="max-h-[80vh]">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Subject ID</TableHead>
                            <TableHead>Marks</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {students.map((student) => (
                            <TableRow key={student.id}>
                              <TableCell>{student.id}</TableCell>
                              <TableCell>{student.name}</TableCell>
                              <TableCell>{student.subID}</TableCell>
                              <TableCell>
                                <Input
                                  value={
                                    studentMarks.find(
                                      (s) => s.id === student.id
                                    )?.marks || ""
                                  }
                                  onChange={(e) =>
                                    handleMarksChange(
                                      student.id,
                                      e.target.value
                                    )
                                  }
                                />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </ScrollArea>
                    <Button
                      onClick={handleSubmit}
                      variant={submitted ? "secondary" : "default"} 
                    >
                      {submitted ? "Done" : "Submit"}
                    </Button>
                  </DialogContent>
                </Dialog>

                <ExamCard />
                <ExamCard />
                <ExamCard />
                <ExamCard />
              </TabsContent>
              <TabsContent value="students">
                <StudentTable />
              </TabsContent>
              <TabsContent value="communication">
                <ClassroomChat />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
