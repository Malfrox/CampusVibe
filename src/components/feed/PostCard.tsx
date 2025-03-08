
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, MessageCircle, Share2, Flag, MoreHorizontal } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface PostCardProps {
  id: string;
  content: string;
  imageUrl?: string;
  timestamp: string;
  likeCount: number;
  commentCount: number;
  isAnonymous?: boolean;
  username?: string;
  userAvatar?: string;
}

export function PostCard({
  id,
  content,
  imageUrl,
  timestamp,
  likeCount: initialLikeCount,
  commentCount,
  isAnonymous = false,
  username = "",
  userAvatar = "",
}: PostCardProps) {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <Card className="neubrutalism overflow-hidden animate-slide-in">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            {isAnonymous ? (
              <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500 font-medium text-sm">Anon</span>
              </div>
            ) : (
              <Avatar className="h-10 w-10 border border-black">
                <img src={userAvatar || "/placeholder.svg"} alt={username} />
              </Avatar>
            )}
            <div>
              <p className="font-medium">{isAnonymous ? "Anonymous" : username}</p>
              <p className="text-xs text-gray-500">{timestamp}</p>
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="neubrutalism">
              <DropdownMenuItem>Save post</DropdownMenuItem>
              <DropdownMenuItem>Copy link</DropdownMenuItem>
              <DropdownMenuItem>Not interested</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">
                <Flag className="h-4 w-4 mr-2" />
                Report post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <p className="my-3 text-balance">{content}</p>
        
        {imageUrl && (
          <div className="mt-3 mb-4 overflow-hidden">
            <img 
              src={imageUrl} 
              alt="Post image" 
              className="w-full h-auto object-cover neubrutalism"
            />
          </div>
        )}
      </div>
      
      <Separator className="bg-gray-200" />
      
      <div className="p-2 flex items-center justify-between">
        <Button 
          variant="ghost" 
          size="sm" 
          className={`flex items-center gap-1 ${isLiked ? 'text-red-500' : ''}`}
          onClick={handleLike}
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500' : ''}`} />
          <span>{likeCount}</span>
        </Button>
        
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          <MessageCircle className="h-4 w-4" />
          <span>{commentCount}</span>
        </Button>
        
        <Button variant="ghost" size="sm">
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}

export default PostCard;
