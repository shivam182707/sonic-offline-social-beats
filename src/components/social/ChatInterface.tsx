
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Send, Users } from "lucide-react";
import FriendsList from "./FriendsList";

// Mock chat data
const mockMessages = [
  { id: 1, sender: "Alex", message: "Hey, have you heard the new album by The Weeknd?", time: "10:03 AM", isMe: false },
  { id: 2, sender: "You", message: "Not yet! Is it good?", time: "10:05 AM", isMe: true },
  { id: 3, sender: "Alex", message: "It's amazing! I'll share it with you now.", time: "10:06 AM", isMe: false },
  { id: 4, sender: "You", message: "Thanks! I'll download it for offline listening.", time: "10:08 AM", isMe: true },
  { id: 5, sender: "Alex", message: "Perfect for your commute tomorrow 👌", time: "10:10 AM", isMe: false },
  { id: 6, sender: "You", message: "Exactly what I need. BTW, did you check out that playlist I sent?", time: "10:12 AM", isMe: true },
];

const ChatInterface = () => {
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [showFriends, setShowFriends] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: "You",
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: true,
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex h-full">
      <div className="flex-1 flex flex-col">
        <div className="border-b px-4 py-2 flex items-center justify-between bg-card">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" alt="Alex" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">Alex Johnson</h3>
              <p className="text-xs text-green-500">Online</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setShowFriends(!showFriends)}
          >
            <Users className="h-5 w-5" />
          </Button>
        </div>
        
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${msg.isMe ? 'bg-music-primary text-white' : 'bg-muted'} rounded-2xl px-4 py-2`}>
                  {!msg.isMe && (
                    <p className="font-medium text-xs mb-1">{msg.sender}</p>
                  )}
                  <p className="text-sm">{msg.message}</p>
                  <p className="text-right text-xs mt-1 opacity-70">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <div className="border-t p-4 bg-card">
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon" className="bg-music-primary hover:bg-music-primary/90">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
      
      <div className={`border-l w-64 bg-card ${showFriends ? 'block' : 'hidden'} md:block`}>
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold flex items-center gap-2">
              <Users className="h-4 w-4" />
              Friends
            </h2>
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setShowFriends(false)}>
              <span className="sr-only">Close</span>
              &times;
            </Button>
          </div>
          <Input placeholder="Search friends..." className="mb-4" />
          <FriendsList />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
