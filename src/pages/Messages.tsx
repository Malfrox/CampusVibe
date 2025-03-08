
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import Navbar from "@/components/layout/Navbar";
import { useToast } from "@/hooks/use-toast";

// Mock data for conversations
const CONVERSATIONS = [
  {
    id: "1",
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: "Hey, are you still selling that textbook?",
    timestamp: "2h ago",
    unread: true,
  },
  {
    id: "2",
    name: "Taylor Smith",
    avatar: "https://i.pravatar.cc/150?img=2",
    lastMessage: "Thanks for the notes! They were super helpful.",
    timestamp: "Yesterday",
    unread: true,
  },
  {
    id: "3",
    name: "Morgan Lee",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "When's the next study group meeting?",
    timestamp: "2d ago",
    unread: false,
  },
  {
    id: "4",
    name: "Jordan Wilson",
    avatar: "https://i.pravatar.cc/150?img=4",
    lastMessage: "Did you submit the assignment?",
    timestamp: "1w ago",
    unread: false,
  }
];

// Mock messages for the active conversation
const MESSAGES = [
  {
    id: "1",
    senderId: "2",
    text: "Hey there! I saw your post about the calculus textbook",
    timestamp: "3:42 PM",
  },
  {
    id: "2",
    senderId: "current-user",
    text: "Hi! Yes, I'm selling it for $50. It's in great condition, barely used.",
    timestamp: "3:44 PM",
  },
  {
    id: "3",
    senderId: "2",
    text: "That sounds perfect. Is it the 8th edition?",
    timestamp: "3:45 PM",
  },
  {
    id: "4",
    senderId: "current-user",
    text: "Yes, it's the 8th edition with all the practice problem answers included.",
    timestamp: "3:47 PM",
  },
  {
    id: "5",
    senderId: "2",
    text: "Great! Can we meet at the student center tomorrow around 2pm?",
    timestamp: "3:50 PM",
  }
];

const Messages = () => {
  const [activeConversation, setActiveConversation] = useState(CONVERSATIONS[0]);
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState(MESSAGES);
  const { toast } = useToast();

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    
    const newMessage = {
      id: String(Date.now()),
      senderId: "current-user",
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages([...messages, newMessage]);
    setMessageText("");
    
    // Simulate received message
    setTimeout(() => {
      const responseMessage = {
        id: String(Date.now() + 1),
        senderId: activeConversation.id,
        text: "Thanks for the info! See you tomorrow at 2pm.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, responseMessage]);
      
      toast({
        title: "New message",
        description: `${activeConversation.name}: Thanks for the info! See you tomorrow at 2pm.`,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navbar />
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 neubrutalism bg-white p-0 overflow-hidden">
          {/* Conversation List */}
          <div className="md:col-span-1 border-r border-black">
            <div className="p-4 border-b border-black">
              <h2 className="text-xl font-bold mb-4">Messages</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  type="text" 
                  placeholder="Search conversations..." 
                  className="pl-10 neubrutalism"
                />
              </div>
            </div>
            
            <div className="overflow-y-auto max-h-[calc(100vh-13rem)]">
              {CONVERSATIONS.map((conversation) => (
                <div 
                  key={conversation.id}
                  onClick={() => setActiveConversation(conversation)}
                  className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                    activeConversation.id === conversation.id ? "bg-gray-100" : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Avatar className="h-10 w-10 neubrutalism">
                      <img 
                        src={conversation.avatar} 
                        alt={conversation.name} 
                        className="object-cover"
                      />
                    </Avatar>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-sm">{conversation.name}</h3>
                        <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                    </div>
                    
                    {conversation.unread && (
                      <Badge className="h-2 w-2 p-0 bg-campus-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Messages */}
          <div className="md:col-span-2 flex flex-col h-[calc(100vh-13rem)]">
            <div className="p-4 border-b border-black flex items-center gap-3">
              <Avatar className="h-10 w-10 neubrutalism">
                <img 
                  src={activeConversation.avatar} 
                  alt={activeConversation.name} 
                  className="object-cover"
                />
              </Avatar>
              <div>
                <h3 className="font-semibold">{activeConversation.name}</h3>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`flex ${message.senderId === "current-user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[70%] p-3 rounded-lg ${
                      message.senderId === "current-user" 
                        ? "bg-campus-100 border border-campus-600 neubrutalism-sm" 
                        : "bg-gray-100 border border-gray-300 neubrutalism-sm"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs text-gray-500 block text-right mt-1">
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="p-4 border-t border-black">
              <div className="flex gap-2">
                <Input 
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Type a message..." 
                  className="flex-1 neubrutalism"
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button 
                  onClick={handleSendMessage}
                  className="neubrutalism bg-campus-600 hover:bg-campus-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
