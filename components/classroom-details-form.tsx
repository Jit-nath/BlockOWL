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

interface ClassroomDetailsFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
}

const gradeLevels = [
  { id: "preschool", label: "Preschool" },
  { id: "elementary", label: "Elementary (K-5)" },
  { id: "middleSchool", label: "Middle School (6-8)" },
  { id: "highSchool", label: "High School (9-12)" },
  { id: "college", label: "College/University" },
  { id: "adult", label: "Adult Education" },
];

const subjects = [
  { id: "math", label: "Mathematics" },
  { id: "science", label: "Science" },
  { id: "english", label: "English/Language Arts" },
  { id: "history", label: "History/Social Studies" },
  { id: "languages", label: "Foreign Languages" },
  { id: "arts", label: "Arts & Music" },
  { id: "pe", label: "Physical Education" },
  { id: "technology", label: "Technology/Computer Science" },
  { id: "business", label: "Business/Economics" },
  { id: "other", label: "Other" },
];

export function ClassroomDetailsForm({ form }: ClassroomDetailsFormProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Classroom Details</h2>
      <p className="text-sm text-muted-foreground mb-4">
        Tell us about the classrooms you want to digitize.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="totalClassrooms"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Total Number of Classrooms*</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  placeholder="Enter number of classrooms"
                  {...field}
                  onChange={(e) =>
                    field.onChange(Number.parseInt(e.target.value) || 0)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="averageClassSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Average Class Size*</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={1}
                  placeholder="Enter average number of students"
                  {...field}
                  onChange={(e) =>
                    field.onChange(Number.parseInt(e.target.value) || 0)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="gradeLevel"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>Grade Levels*</FormLabel>
              <FormDescription>
                Select all grade levels that apply to your institution.
              </FormDescription>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {gradeLevels.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="gradeLevel"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: string) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="subjects"
        render={() => (
          <FormItem>
            <div className="mb-4">
              <FormLabel>Subjects*</FormLabel>
              <FormDescription>
                Select all subjects that will be taught in digital classrooms.
              </FormDescription>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {subjects.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="subjects"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: string) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
