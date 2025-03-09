"use client";

import type { UseFormReturn } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

interface AccountSetupFormProps {
  form: UseFormReturn<any>;
}

export function AccountSetupForm({ form }: AccountSetupFormProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Account Setup</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Create your administrator account to manage your institution's digital
        classrooms.
      </p>

      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username*</FormLabel>
            <FormControl>
              <Input placeholder="Choose a username" {...field} />
            </FormControl>
            <FormDescription>
              This will be used to log in to your account.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password*</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Create a password"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Must be at least 8 characters with uppercase, lowercase, and
                numbers.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password*</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="agreeToTerms"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start space-x-3 space-y-0 mt-6">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>
                I agree to the{" "}
                <Link href="#" className="text-primary underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-primary underline">
                  Privacy Policy
                </Link>
                *
              </FormLabel>
              <FormMessage />
            </div>
          </FormItem>
        )}
      />
    </div>
  );
}
