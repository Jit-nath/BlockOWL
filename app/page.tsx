"use client";
import Link from "next/link";
import Demo from "@/components/demo";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col dark bg-background text-foreground mx-5 ">
      {/* 1. Brand Logo */}
      <header className="container flex h-20 items-center justify-between py-6">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary">
            <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-primary-foreground">
              S
            </div>
          </div>
          <span className="text-xl font-bold">SaaSify</span>
        </div>
        <nav className="hidden space-x-4 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#demo"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Demo
          </Link>
          <Link
            href={"/student"}
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Student
          </Link>
        </nav>
        <Button asChild size="sm">
          <Link href="/login">Login</Link>
        </Button>
      </header>

      <main className="flex-1">
        <div className="h-40 relative w-full">
          <div className="fluid-animation absolute top-20 h-40 w-full"></div>
        </div>

        {/* 2. What is our brand about */}
        <section
          id="about"
          className="container py-12 md:py-24 lg:py-32 -translate-y-24 z-20"
        >
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
              <span className="text-animation"></span> Smart Education
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
              Ensuring trust, security, and transparency in academic records
              with blockchain technology
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/login">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/dashboard">Demo</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 3. Examples/Features */}
        <section id="features" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <h2 className="col-span-full text-3xl font-bold tracking-tighter md:text-4xl">
              How SaaSify Works
            </h2>

            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 bg-gradient-to-br from-blue-900 to-blue-950">
              <div className="rounded-full bg-primary/10 p-2">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Immutable Academic Records</h3>
              <p className="text-muted-foreground ">
                Store and manage academic scores securely with blockchain,
                ensuring data integrity and preventing tampering.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 bg-gradient-to-br from-blue-900 to-blue-950">
              <div className="rounded-full bg-primary/10 p-2">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Decentralized Verification</h3>
              <p className="text-muted-foreground ">
                Allow instant and transparent verification of academic records
                without intermediaries, making credential validation faster and
                more reliable.
              </p>
            </div>

            <div className="flex flex-col items-start gap-2 rounded-lg border p-6 bg-gradient-to-br from-blue-900 to-blue-950">
              <div className="rounded-full bg-primary/10 p-2">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">
                Advanced Performance Analytics
              </h3>
              <p className="text-muted-foreground ">
                Utilize AI-powered insights to analyze academic trends, student
                performance, and institutional progress.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Section */}

        <Demo />

        {/* 4. Start Button / CTA */}
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">
              Ready to Transform Your Workflow?
            </h2>
            <p className="max-w-[750px] text-lg text-muted-foreground">
              Join thousands of teams already using SaaSify to streamline their
              work and boost productivity.
            </p>
            <Button size="lg" className="mt-4">
              <Link href="/login">Start Using SaaSify</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background/5">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-primary">
                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-primary-foreground">
                  S
                </div>
              </div>
              <p className="text-sm font-medium">SaaSify</p>
            </div>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} SaaSify, Inc. All rights
              reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
