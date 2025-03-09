"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle, Trash2, GripVertical } from "lucide-react";

// Question types
type QuestionType = "text" | "email" | "radio" | "checkbox" | "textarea";

interface Question {
  id: string;
  type: QuestionType;
  title: string;
  required: boolean;
  options?: string[]; // For radio and checkbox questions
}

export default function GoogleFormModal() {
  const [open, setOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formTitle, setFormTitle] = useState("Schedule Exam");


  // Initial questions
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "q1",
      type: "text",
      title: "Name",
      required: true,
    },
    {
      id: "q2",
      type: "email",
      title: "Email",
      required: true,
    },
    {
      id: "q3",
      type: "radio",
      title: "How would you rate your experience?",
      required: true,
      options: ["Excellent", "Good", "Average", "Poor"],
    },
    {
      id: "q4",
      type: "checkbox",
      title: "What features do you like? (Select all that apply)",
      required: false,
      options: [
        "User Interface",
        "Performance",
        "Features",
        "Customer Support",
      ],
    },
    {
      id: "q5",
      type: "textarea",
      title: "Additional Feedback",
      required: false,
    },
  ]);

  // Dynamic form data based on questions
  const [formData, setFormData] = useState<Record<string, any>>({});

  // Handle input change for text, email, and textarea
  const handleInputChange = (questionId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [questionId]: value }));
  };

  // Handle radio change
  const handleRadioChange = (questionId: string, value: string) => {
    setFormData((prev) => ({ ...prev, [questionId]: value }));
  };

  // Handle checkbox change
  const handleCheckboxChange = (questionId: string, value: string) => {
    setFormData((prev) => {
      const values = prev[questionId] || [];
      if (values.includes(value)) {
        return {
          ...prev,
          [questionId]: values.filter((item: string) => item !== value),
        };
      } else {
        return { ...prev, [questionId]: [...values, value] };
      }
    });
  };

  // Add a new question
  const addQuestion = () => {
    const newQuestion: Question = {
      id: `q${questions.length + 1}_${Date.now()}`,
      type: "text",
      title: "New Question",
      required: false,
    };
    setQuestions([...questions, newQuestion]);
  };

  // Remove a question
  const removeQuestion = (questionId: string) => {
    setQuestions(questions.filter((q) => q.id !== questionId));
    // Also remove from form data
    const newFormData = { ...formData };
    delete newFormData[questionId];
    setFormData(newFormData);
  };

  // Update question properties
  const updateQuestion = (questionId: string, updates: Partial<Question>) => {
    setQuestions(
      questions.map((q) => (q.id === questionId ? { ...q, ...updates } : q))
    );
  };

  // Add option to a question (for radio and checkbox)
  const addOption = (questionId: string) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          const options = q.options || [];
          return {
            ...q,
            options: [...options, `Option ${options.length + 1}`],
          };
        }
        return q;
      })
    );
  };

  // Remove option from a question
  const removeOption = (questionId: string, optionIndex: number) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId && q.options) {
          const newOptions = [...q.options];
          newOptions.splice(optionIndex, 1);
          return { ...q, options: newOptions };
        }
        return q;
      })
    );
  };

  // Update option text
  const updateOption = (
    questionId: string,
    optionIndex: number,
    text: string
  ) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId && q.options) {
          const newOptions = [...q.options];
          newOptions[optionIndex] = text;
          return { ...q, options: newOptions };
        }
        return q;
      })
    );
  };

  // Change question type
  const changeQuestionType = (questionId: string, type: QuestionType) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          const updatedQuestion = { ...q, type };
          // Add default options for radio and checkbox if they don't exist
          if (
            (type === "radio" || type === "checkbox") &&
            (!q.options || q.options.length === 0)
          ) {
            updatedQuestion.options = ["Option 1", "Option 2"];
          }
          return updatedQuestion;
        }
        return q;
      })
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    setOpen(false);
    // Reset form after submission
    setFormData({});
  };

  // Render a question based on its type
  const renderQuestion = (question: Question) => {
    if (isEditMode) {
      return renderEditableQuestion(question);
    }

    switch (question.type) {
      case "text":
        return (
          <div className="grid gap-2">
            <Label
              htmlFor={question.id}
              className="text-sm font-medium text-white"
            >
              {question.title}{" "}
              {question.required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={question.id}
              value={formData[question.id] || ""}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required={question.required}
            />
          </div>
        );

      case "email":
        return (
          <div className="grid gap-2">
            <Label
              htmlFor={question.id}
              className="text-sm font-medium text-white"
            >
              {question.title}{" "}
              {question.required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={question.id}
              type="email"
              value={formData[question.id] || ""}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required={question.required}
            />
          </div>
        );

      case "radio":
        return (
          <div className="grid gap-4">
            <Label className="text-sm font-medium text-white">
              {question.title}{" "}
              {question.required && <span className="text-red-500">*</span>}
            </Label>
            <RadioGroup
              value={formData[question.id] || ""}
              onValueChange={(value) => handleRadioChange(question.id, value)}
              className="flex flex-col gap-3"
            >
              {question.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option}
                    id={`${question.id}-${index}`}
                  />
                  <Label
                    htmlFor={`${question.id}-${index}`}
                    className="font-normal"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case "checkbox":
        return (
          <div className="grid gap-4">
            <Label className="text-sm font-medium text-white">
              {question.title}{" "}
              {question.required && <span className="text-red-500">*</span>}
            </Label>
            <div className="flex flex-col gap-3">
              {question.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${question.id}-${index}`}
                    checked={(formData[question.id] || []).includes(option)}
                    onCheckedChange={() =>
                      handleCheckboxChange(question.id, option)
                    }
                  />
                  <Label
                    htmlFor={`${question.id}-${index}`}
                    className="font-normal"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        );

      case "textarea":
        return (
          <div className="grid gap-2">
            <Label
              htmlFor={question.id}
              className="text-sm font-medium text-white"
            >
              {question.title}{" "}
              {question.required && <span className="text-red-500">*</span>}
            </Label>
            <Textarea
              id={question.id}
              value={formData[question.id] || ""}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              className="min-h-[100px] focus:border-blue-500 focus:ring-blue-500"
              placeholder={`Enter your ${question.title.toLowerCase()}...`}
              required={question.required}
            />
          </div>
        );

      default:
        return null;
    }
  };

  // Render an editable question (for form builder mode)
  const renderEditableQuestion = (question: Question) => {
    return (
      <div className="grid gap-4">
        <div className="flex items-center gap-2">
          <GripVertical className="text-white" size={20} />

          <Select
            value={question.type}
            onValueChange={(value: QuestionType) =>
              changeQuestionType(question.id, value)
            }
          >
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Question Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="text">Short Text</SelectItem>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="textarea">Paragraph</SelectItem>
              <SelectItem value="radio">Multiple Choice</SelectItem>
              <SelectItem value="checkbox">Checkboxes</SelectItem>
            </SelectContent>
          </Select>

          <Input
            value={question.title}
            onChange={(e) =>
              updateQuestion(question.id, { title: e.target.value })
            }
            className="flex-1"
            placeholder="Question title"
          />

          <div className="flex items-center gap-2">
            <Label htmlFor={`required-${question.id}`} className="text-sm">
              Required
            </Label>
            <Checkbox
              id={`required-${question.id}`}
              checked={question.required}
              onCheckedChange={(checked) =>
                updateQuestion(question.id, { required: checked === true })
              }
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeQuestion(question.id)}
          >
            <Trash2 className="h-4 w-4 text-red-500" />
          </Button>
        </div>

        {/* Options editor for radio and checkbox questions */}
        {(question.type === "radio" || question.type === "checkbox") && (
          <div className="pl-8 space-y-2">
            {question.options?.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  value={option}
                  onChange={(e) =>
                    updateOption(question.id, index, e.target.value)
                  }
                  className="flex-1"
                  placeholder={`Option ${index + 1}`}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeOption(question.id, index)}
                >
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => addOption(question.id)}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Option
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-2xl">Open Feedback Form</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <div className="flex justify-between items-center mt-4">
              {isEditMode ? (
                <Input
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="text-2xl font-normal text-white border-0 border-b-2 border-dashed rounded-none px-0"
                  placeholder="Form Title"
                />
              ) : (
                <DialogTitle className="text-2xl font-normal text-white">
                  {formTitle}
                </DialogTitle>
              )}
              <Button
                type="button"
                onClick={() => setIsEditMode(!isEditMode)}
              >
                {isEditMode ? "Preview Form" : "Edit Form"}
              </Button>
            </div>
            {/* {isEditMode ? (
              <Textarea
                value={formDescription}
                onChange={(e) => setFormDescription(e.target.value)}
                className="text-base text-gray-600 border-0 border-b-2 border-dashed focus:border-blue-500 rounded-none px-0 min-h-[60px] resize-none"
                placeholder="Form Description"
              />
            ) : (
              <DialogDescription className="text-base text-gray-600">
                {formDescription}
              </DialogDescription>
            )} */}
          </DialogHeader>

          <div className="grid gap-6 py-6">
            {questions.map((question) => (
              <Card
                key={question.id}
                className="p-4 border shadow-sm"
              >
                {renderQuestion(question)}
              </Card>
            ))}

            {isEditMode && (
              <Button
                type="button"
                className="flex items-center gap-2"
                onClick={addQuestion}
              >
                <PlusCircle className="h-5 w-5" />
                Add Question
              </Button>
            )}
          </div>

          <DialogFooter className="border-t pt-4">
            {!isEditMode && (
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Submit
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
