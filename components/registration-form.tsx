"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { InstitutionDetailsForm } from "./institution-details-form";
import { AdministratorDetailsForm } from "./administrator-details-form";
import { ClassroomDetailsForm } from "./classroom-details-form";
import { AccountSetupForm } from "./account-setup-form";

const formSchema = z
  .object({
    // Institution details
    institutionName: z
      .string()
      .min(2, { message: "Institution name is required" }),
    institutionType: z
      .string()
      .min(1, { message: "Institution type is required" }),
    address: z.string().min(5, { message: "Address is required" }),
    city: z.string().min(2, { message: "City is required" }),
    state: z.string().min(2, { message: "State is required" }),
    zipCode: z.string().min(5, { message: "Zip code is required" }),
    country: z.string().min(2, { message: "Country is required" }),
    phone: z.string().min(10, { message: "Valid phone number is required" }),
    website: z
      .string()
      .url({ message: "Please enter a valid URL" })
      .optional()
      .or(z.literal("")),

    // Administrator details
    firstName: z.string().min(2, { message: "First name is required" }),
    lastName: z.string().min(2, { message: "Last name is required" }),
    email: z.string().email({ message: "Valid email is required" }),
    position: z.string().min(2, { message: "Position is required" }),
    adminPhone: z
      .string()
      .min(10, { message: "Valid phone number is required" }),

    // Classroom details
    totalClassrooms: z.coerce
      .number()
      .min(1, { message: "At least 1 classroom is required" }),
    gradeLevel: z
      .array(z.string())
      .min(1, { message: "Select at least one grade level" }),
    subjects: z
      .array(z.string())
      .min(1, { message: "Select at least one subject" }),
    averageClassSize: z.coerce
      .number()
      .min(1, { message: "Average class size is required" }),

    // Account setup
    username: z
      .string()
      .min(5, { message: "Username must be at least 5 characters" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" }),
    confirmPassword: z.string(),
    agreeToTerms: z
      .boolean()
      .refine((val) => val === true, {
        message: "You must agree to the terms and conditions",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      institutionName: "",
      institutionType: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      phone: "",
      website: "",

      firstName: "",
      lastName: "",
      email: "",
      position: "",
      adminPhone: "",

      totalClassrooms: 1,
      gradeLevel: [],
      subjects: [],
      averageClassSize: 20,

      username: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
    mode: "onChange",
  });

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const onSubmit = (data: FormValues) => {
    if (step < totalSteps) {
      nextStep();
      return;
    }

    console.log("Form submitted:", data);
    // Here you would typically send the data to your backend
    alert("Registration submitted successfully!");
  };

  const validateCurrentStep = async () => {
    let isValid = false;

    switch (step) {
      case 1:
        isValid = await form.trigger([
          "institutionName",
          "institutionType",
          "address",
          "city",
          "state",
          "zipCode",
          "country",
          "phone",
          "website",
        ]);
        break;
      case 2:
        isValid = await form.trigger([
          "firstName",
          "lastName",
          "email",
          "position",
          "adminPhone",
        ]);
        break;
      case 3:
        isValid = await form.trigger([
          "totalClassrooms",
          "gradeLevel",
          "subjects",
          "averageClassSize",
        ]);
        break;
      case 4:
        isValid = await form.trigger([
          "username",
          "password",
          "confirmPassword",
          "agreeToTerms",
        ]);
        break;
    }

    if (isValid) {
      if (step < totalSteps) {
        nextStep();
      } else {
        form.handleSubmit(onSubmit)();
      }
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Register Your Institution</CardTitle>
        <CardDescription>
          Complete the form below to register your academic institution for
          digital classroom services.
        </CardDescription>
        <div className="flex items-center justify-between mt-4">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step > index + 1
                    ? "bg-primary text-primary-foreground"
                    : step === index + 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step > index + 1 ? <Check className="h-4 w-4" /> : index + 1}
              </div>
              {index < totalSteps - 1 && <Separator className="w-16 mx-2" />}
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {step === 1 && <InstitutionDetailsForm form={form} />}
            {step === 2 && <AdministratorDetailsForm form={form} />}
            {step === 3 && <ClassroomDetailsForm form={form} />}
            {step === 4 && <AccountSetupForm form={form} />}
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={prevStep}
          disabled={step === 1}
        >
          <ChevronLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button type="button" onClick={validateCurrentStep}>
          {step === totalSteps ? "Submit Registration" : "Next"}
          {step !== totalSteps && <ChevronRight className="ml-2 h-4 w-4" />}
        </Button>
      </CardFooter>
    </Card>
  );
}
