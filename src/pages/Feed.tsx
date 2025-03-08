
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CreatePost, { NewPostData } from "@/components/feed/CreatePost";
import PostCard from "@/components/feed/PostCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Explicitly type the mock posts array to match NewPostData interface
const MOCK_POSTS: NewPostData[] = [
  {
    id: "1",
    content: "Just aced my CS midterm! All those late nights at the library finally paid off. 🎉",
    timestamp: "2 hours ago",
    likeCount: 24,
    commentCount: 5,
    isAnonymous: false,
    username: "Alex Johnson",
    userAvatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    content: "Does anyone know if the cafeteria is serving that amazing pasta today? I've been craving it all week!",
    timestamp: "4 hours ago",
    likeCount: 15,
    commentCount: 8,
    isAnonymous: true,
  },
  {
    id: "3",
    content: "Found this spot on campus that's perfect for studying. Great lighting, quiet, and strong wifi. It's the east corner of the library's third floor by the tall windows.",
    imageUrl: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    timestamp: "Yesterday",
    likeCount: 42,
    commentCount: 7,
    isAnonymous: false,
    username: "Maya Patel",
    userAvatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "4",
    content: "To the person who returned my lost ID card to the front desk - thank you so much! Faith in humanity restored.",
    timestamp: "Yesterday",
    likeCount: 57,
    commentCount: 3,
    isAnonymous: true,
  },
  {
    id: "5",
    content: "Anyone else think Professor Wilson's pop quiz today was way harder than it needed to be? I feel like I just stared at question 3 for 20 minutes straight.",
    timestamp: "2 days ago",
    likeCount: 35,
    commentCount: 12,
    isAnonymous: true,
  },
];

const Feed = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [posts, setPosts] = useState(MOCK_POSTS);

  const handlePostCreated = (newPost: NewPostData) => {
    setPosts([newPost, ...posts]);
  };

  const filteredPosts = activeTab === "all" 
    ? posts 
    : activeTab === "anonymous" 
      ? posts.filter(post => post.isAnonymous)
      : posts.filter(post => !post.isAnonymous);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container max-w-3xl mx-auto px-4 pt-20 pb-12">
        <div className="my-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="neubrutalism bg-white">
              <TabsTrigger value="all" className="flex-1 data-[state=active]:bg-campus-600 data-[state=active]:text-white">
                All Posts
              </TabsTrigger>
              <TabsTrigger value="regular" className="flex-1 data-[state=active]:bg-campus-600 data-[state=active]:text-white">
                Regular
              </TabsTrigger>
              <TabsTrigger value="anonymous" className="flex-1 data-[state=active]:bg-campus-600 data-[state=active]:text-white">
                Anonymous
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <CreatePost onPostCreated={handlePostCreated} />
        
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline" className="neubrutalism">
            Load More
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Feed;
