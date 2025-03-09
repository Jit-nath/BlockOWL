"use client";

import type { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface AdministratorDetailsFormProps {
  form: UseFormReturn<any>;
}

export function AdministratorDetailsForm({
  form,
}: AdministratorDetailsFormProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Administrator Details</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Please provide information about the primary administrator who will
        manage the digital classrooms.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name*</FormLabel>
              <FormControl>
                <Input placeholder="Enter first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name*</FormLabel>
              <FormControl>
                <Input placeholder="Enter last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address*</FormLabel>
            <FormControl>
              <Input
                type="email"
                placeholder="administrator@school.edu"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position/Title*</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Principal, IT Director" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="adminPhone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number*</FormLabel>
              <FormControl>
                <Input placeholder="Enter phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
