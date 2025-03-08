
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import PostCard from "@/components/feed/PostCard";
import MarketplaceItem from "@/components/marketplace/MarketplaceItem";
import { Edit, Settings } from "lucide-react";

// Mock data
const USER_POSTS = [
  {
    id: "1",
    content: "Just aced my CS midterm! All those late nights at the library finally paid off. 🎉",
    timestamp: "2 days ago",
    likeCount: 24,
    commentCount: 5,
    isAnonymous: false,
    username: "Alex Johnson",
    userAvatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "3",
    content: "Found this spot on campus that's perfect for studying. Great lighting, quiet, and strong wifi. It's the east corner of the library's third floor by the tall windows.",
    imageUrl: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    timestamp: "1 week ago",
    likeCount: 42,
    commentCount: 7,
    isAnonymous: false,
    username: "Alex Johnson",
    userAvatar: "https://i.pravatar.cc/150?img=1",
  },
];

const USER_MARKETPLACE_ITEMS = [
  {
    id: "1",
    title: "Calculus Textbook - 8th Edition",
    price: 45,
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Textbooks",
    condition: "Like New",
    seller: "Alex Johnson",
    location: "North Campus",
    postedTime: "2 days ago",
  },
  {
    id: "3",
    title: "Bicycle - Trek Mountain Bike",
    price: 220,
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Transportation",
    condition: "Used",
    seller: "Alex Johnson",
    location: "West Campus",
    postedTime: "1 week ago",
  },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container max-w-4xl mx-auto px-4 pt-20 pb-12">
        <Card className="neubrutalism overflow-hidden mb-8 animate-fade-in">
          <div className="h-40 bg-gradient-to-r from-campus-500 to-campus-700 relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white hover:bg-white/30"
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="px-6 pb-6 relative">
            <div className="absolute -top-16 left-6 border-4 border-white rounded-full overflow-hidden neubrutalism bg-white">
              <Avatar className="h-32 w-32">
                <img src="https://i.pravatar.cc/150?img=1" alt="Alex Johnson" />
              </Avatar>
            </div>
            
            <div className="pt-20 flex flex-col md:flex-row justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">Alex Johnson</h1>
                  <Badge className="neubrutalism-sm">Class of 2024</Badge>
                </div>
                <p className="text-gray-600">Computer Science • University of Technology</p>
                <p className="mt-2 text-sm max-w-md">
                  Coffee enthusiast, coding wizard, and always looking for study buddies for upcoming exams!
                </p>
              </div>
              
              <div className="flex gap-3">
                <Button variant="outline" className="neubrutalism">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
                <Button className="neubrutalism bg-campus-600 hover:bg-campus-700">
                  Edit Profile
                </Button>
              </div>
            </div>
            
            <div className="flex gap-6 mt-6">
              <div className="text-center">
                <p className="font-semibold">24</p>
                <p className="text-sm text-gray-600">Posts</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">156</p>
                <p className="text-sm text-gray-600">Friends</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">5</p>
                <p className="text-sm text-gray-600">Items</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="neubrutalism bg-white mb-6">
            <TabsTrigger value="posts" className="flex-1 data-[state=active]:bg-campus-600 data-[state=active]:text-white">
              Posts
            </TabsTrigger>
            <TabsTrigger value="marketplace" className="flex-1 data-[state=active]:bg-campus-600 data-[state=active]:text-white">
              Marketplace
            </TabsTrigger>
            <TabsTrigger value="saved" className="flex-1 data-[state=active]:bg-campus-600 data-[state=active]:text-white">
              Saved
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="posts" className="animate-slide-in">
            <div className="space-y-6">
              {USER_POSTS.length > 0 ? (
                USER_POSTS.map((post) => (
                  <PostCard key={post.id} {...post} />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600">No posts yet</p>
                  <Button asChild className="mt-4 neubrutalism">
                    <a href="/feed">Create your first post</a>
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="marketplace" className="animate-slide-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {USER_MARKETPLACE_ITEMS.length > 0 ? (
                USER_MARKETPLACE_ITEMS.map((item) => (
                  <MarketplaceItem key={item.id} {...item} />
                ))
              ) : (
                <div className="text-center py-12 col-span-2">
                  <p className="text-lg text-gray-600">No marketplace items yet</p>
                  <Button asChild className="mt-4 neubrutalism">
                    <a href="/marketplace">List your first item</a>
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="saved" className="animate-slide-in">
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No saved items yet</p>
              <p className="text-sm text-gray-500 mt-2">
                Items you save will appear here for easy access
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
