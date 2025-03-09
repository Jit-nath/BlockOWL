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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface InstitutionDetailsFormProps {
  form: UseFormReturn<any>;
}

export function InstitutionDetailsForm({ form }: InstitutionDetailsFormProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Institution Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="institutionName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institution Name*</FormLabel>
              <FormControl>
                <Input placeholder="Enter institution name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="institutionType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Institution Type*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select institution type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="primary">Primary School</SelectItem>
                  <SelectItem value="secondary">Secondary School</SelectItem>
                  <SelectItem value="highSchool">High School</SelectItem>
                  <SelectItem value="college">College</SelectItem>
                  <SelectItem value="university">University</SelectItem>
                  <SelectItem value="vocational">Vocational School</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address*</FormLabel>
            <FormControl>
              <Input placeholder="Enter street address" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City*</FormLabel>
              <FormControl>
                <Input placeholder="Enter city" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>State/Province*</FormLabel>
              <FormControl>
                <Input placeholder="Enter state/province" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Zip/Postal Code*</FormLabel>
              <FormControl>
                <Input placeholder="Enter zip/postal code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Country*</FormLabel>
            <FormControl>
              <Input placeholder="Enter country" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="phone"
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

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="https://www.example.edu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
