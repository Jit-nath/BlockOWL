"use client";
import { Sun, Search, Bell, Moon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import StudentTable from "@/components/students";
import { useState } from "react";
import ClassroomChat from "@/components/Chatui";
import { ExamCard } from "@/components/ui/ExamCard";
import { ClassCard } from "@/components/ui/classCard";

export default function DashboardPage() {
  const [dark, toggle] = useState<boolean>(true);

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
        {/* ................................................................................... */}
        {/* Sidebar */}
        {/* <aside className="hidden w-64 border-r bg-background/95 md:block">
          <div className="flex h-full flex-col">
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-2 text-sm font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg bg-accent px-3 py-2 text-accent-foreground"
                >
                  <BarChart3 className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <BookOpen className="h-4 w-4" />
                  Classes & Departments
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <FileText className="h-4 w-4" />
                  Question Papers & Scores
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-4 w-4" />
                  Student Records
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <MessageSquare className="h-4 w-4" />
                  Classroom Chat
                </Link>
              </nav>
            </div>
            <div className="mt-auto border-t p-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9">
                  <AvatarImage
                    src="/placeholder.svg?height=36&width=36"
                    alt="User"
                  />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Admin User</span>
                  <span className="text-xs text-muted-foreground">
                    admin@saasify.edu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside> */}

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
                <Button className="mb-4 rounded-2xl">Add Class</Button>
                <ClassCard />
                <ClassCard />
                <ClassCard />
                <ClassCard />
              </TabsContent>
              <TabsContent value="exams" className="sm:w-full">
                <Button className="mb-4 rounded-2xl">Schedule Exam</Button>
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
