"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

type Message = {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
};

const messages: Message[] = [
  {
    id: "1",
    sender: "Alice Johnson",
    content: "Hey, how are you doing?",
    timestamp: "10:30 AM",
  },
  {
    id: "2",
    sender: "Bob Smith",
    content: "Did you finish the report?",
    timestamp: "Yesterday",
  },
  {
    id: "3",
    sender: "Charlie Brown",
    content: "Let's meet for lunch tomorrow",
    timestamp: "Monday",
  },
  {
    id: "4",
    sender: "Diana Prince",
    content: "Can you help me with this task?",
    timestamp: "2 days ago",
  },
  {
    id: "5",
    sender: "Ethan Hunt",
    content: "Mission accomplished!",
    timestamp: "Last week",
  },
];

export default function Messages() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMessages = messages.filter(
    (message) =>
      message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.content.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Card className="mx-auto w-full">
      <CardHeader>
        <CardTitle>Messages</CardTitle>
        <Input
          type="search"
          placeholder="Search messages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mt-2"
        />
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {filteredMessages.map((message) => (
            <div key={message.id} className="mb-4 flex items-start space-x-4">
              <Avatar>
                <AvatarImage
                  src={`/placeholder.svg?height=40&width=40&text=${message.sender[0]}`}
                  alt={message.sender}
                />
                <AvatarFallback>
                  {message.sender[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">{message.sender}</h3>
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {message.content}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
