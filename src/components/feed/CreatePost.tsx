
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Image, Smile, Upload } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export interface NewPostData {
  id: string;
  content: string;
  timestamp: string;
  likeCount: number;
  commentCount: number;
  isAnonymous: boolean;
  username?: string;
  userAvatar?: string;
  imageUrl?: string; // Added optional imageUrl property
}

interface CreatePostProps {
  onPostCreated?: (post: NewPostData) => void;
}

export function CreatePost({ onPostCreated }: CreatePostProps) {
  const [content, setContent] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast.error("Please write something before posting");
      return;
    }
    
    setIsLoading(true);
    
    // Create a new post object
    const newPost: NewPostData = {
      id: Date.now().toString(), // Simple unique ID generation
      content: content.trim(),
      timestamp: "Just now",
      likeCount: 0,
      commentCount: 0,
      isAnonymous,
      // Only add these properties if not anonymous
      ...(isAnonymous ? {} : {
        username: "You",
        userAvatar: "https://i.pravatar.cc/150?img=5" // Default avatar for demo
      })
    };
    
    // Simulate post creation delay
    setTimeout(() => {
      if (onPostCreated) {
        onPostCreated(newPost);
      }
      toast.success("Post created successfully!");
      setContent("");
      setIsLoading(false);
    }, 600);
  };

  return (
    <Card className="neubrutalism mb-6 animate-fade-in">
      <form onSubmit={handleSubmit} className="p-4">
        <Textarea
          placeholder="What's happening on campus?"
          className="resize-none border-none focus-visible:ring-0 p-0 text-base"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        
        <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Button type="button" variant="ghost" size="icon" className="text-gray-500">
              <Image className="h-5 w-5" />
            </Button>
            <Button type="button" variant="ghost" size="icon" className="text-gray-500">
              <Smile className="h-5 w-5" />
            </Button>
            <Button type="button" variant="ghost" size="icon" className="text-gray-500">
              <Upload className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Switch
                id="anonymous-mode"
                checked={isAnonymous}
                onCheckedChange={setIsAnonymous}
                className="neubrutalism"
              />
              <Label htmlFor="anonymous-mode" className="text-sm">Anonymous</Label>
            </div>
            
            <Button 
              type="submit" 
              className="neubrutalism bg-campus-600 hover:bg-campus-700" 
              disabled={isLoading}
            >
              {isLoading ? "Posting..." : "Post"}
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default CreatePost;
