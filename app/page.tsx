import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Calendar,
  CheckCircle,
  ClipboardList,
  CreditCard,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Settings,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-5">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="BlockOWL Dashboard Preview"
              width={50}
              height={50}
              className="object-cover"
              priority
            />
            <span className="text-xl font-bold">BlackOWL</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#demo"
              className="text-sm font-medium hover:text-primary"
            >
              Demo
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log In
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2 px-8">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Campus Management Solution
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    BlackOWL is an all-in-one solution for educational
                    institutions to streamline administration, enhance learning
                    experiences, and connect your entire campus.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row px-8">
                  <Button size="lg" className="px-8">
                    Request Demo
                  </Button>
                  <Button size="lg" variant="outline" className="px-8">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/placeholder.jpg?height=500&width=800"
                    alt="BlockOWL Dashboard Preview"
                    width={800}
                    height={500}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Powerful Features
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your educational institution
                  efficiently
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card>
                <CardHeader className="pb-2">
                  <LayoutDashboard className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Intuitive Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Centralized control panel with real-time analytics and
                    customizable widgets.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Users className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Student Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Comprehensive student profiles, attendance tracking, and
                    performance analytics.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <BookOpen className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Course Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Create, organize, and manage courses with integrated
                    assessment tools.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Calendar className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Automated timetable generation with conflict resolution and
                    resource allocation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <FileText className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Document Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Secure storage and sharing of academic documents, policies,
                    and resources.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CreditCard className="h-6 w-6 text-primary mb-2" />
                  <CardTitle>Fee Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Streamlined billing, payment processing, and financial
                    reporting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  See BlackOWL in Action
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore how BlackOWL transforms campus management
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-lg border bg-background shadow">
                  <div className="relative aspect-video">
                    <Image
                      src="/demo.png"
                      alt="Student Dashboard Demo"
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Button
                        variant="outline"
                        className="bg-background/80 hover:bg-background"
                      >
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Student Dashboard</h3>
                    <p className="text-sm text-muted-foreground">
                      Personalized learning experience for students
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border bg-background shadow">
                  <div className="relative aspect-video">
                    <Image
                      src="/demo.png"
                      alt="Course Management Demo"
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Button
                        variant="outline"
                        className="bg-background/80 hover:bg-background"
                      >
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Course Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Effortless course creation and management
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="overflow-hidden rounded-lg border bg-background shadow">
                  <div className="relative aspect-video">
                    <Image
                      src="/demo.png"
                      alt="Admin Dashboard Demo"
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Button
                        variant="outline"
                        className="bg-background/80 hover:bg-background"
                      >
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Admin Dashboard</h3>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive administrative control
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border bg-background shadow">
                  <div className="relative aspect-video">
                    <Image
                      src="/demo.png"
                      alt="Reporting System Demo"
                      width={600}
                      height={400}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Button
                        variant="outline"
                        className="bg-background/80 hover:bg-background"
                      >
                        Watch Demo
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">Reporting System</h3>
                    <p className="text-sm text-muted-foreground">
                      Data-driven insights and analytics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How BlackOWL Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple implementation, powerful results
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 mt-12">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <ClipboardList className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">1. Assessment</h3>
                  <p className="text-muted-foreground mt-2">
                    We analyze your institution's needs and customize BlackOWL
                    to fit your requirements.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <Settings className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">2. Implementation</h3>
                  <p className="text-muted-foreground mt-2">
                    Our team handles the setup, data migration, and integration
                    with your existing systems.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">3. Training</h3>
                  <p className="text-muted-foreground mt-2">
                    Comprehensive training for administrators, faculty, and
                    students to ensure smooth adoption.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <div className="rounded-lg border bg-card p-8">
                  <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold">
                        Why Choose BlackOWL?
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>
                            Seamless integration with existing systems
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>
                            Scalable solution that grows with your institution
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Dedicated support team available 24/7</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>
                            Regular updates with new features and improvements
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>Secure, compliant, and reliable platform</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src="/demo.png"
                        alt="BlockOWL Platform Overview"
                        width={600}
                        height={400}
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Campus?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to schedule a personalized demo and discuss
                  how BlackOWL can benefit your institution.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="px-8">
                  Contact Sales
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground hover:bg-primary-foreground/10 px-8"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 md:h-24 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">BlackOWL</span>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline">
              Contact
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 BlackOWL. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
