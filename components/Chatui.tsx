import { useState } from "react";
import { Send, UserCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ClassroomChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Teacher",
      text: "Welcome to the class!",
      sender: "teacher",
    },
    { id: 2, user: "Student", text: "Hello, Sir!", sender: "student" },
  ]);
  setMessages([]);

  return (
    <div className="flex flex-col w-full h-screen bg-gray-50 dark:bg-gray-900">
      {/* Chat Header */}
      <div className="p-4 border-b bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Class Chat
        </h2>
      </div>

      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start space-x-3 ${
              msg.sender === "student" ? "justify-end" : ""
            }`}
          >
            {msg.sender === "teacher" && (
              <UserCircle className="w-8 h-8 text-gray-500" />
            )}
            <div
              className={`p-3 rounded-lg max-w-lg ${
                msg.sender === "teacher"
                  ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
            {msg.sender === "student" && (
              <UserCircle className="w-8 h-8 text-gray-500" />
            )}
          </div>
        ))}
      </ScrollArea>

      {/* Chat Input */}
      <div className="p-4 border-t bg-white dark:bg-gray-800 dark:border-gray-700 flex items-center space-x-2">
        <Input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
        />
        <Button variant="outline">
          <Send className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
}
