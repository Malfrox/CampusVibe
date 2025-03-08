
import { Link, useLocation } from "react-router-dom";
import { Bell, Home, MessageCircle, Search, ShoppingCart, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navbar() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black animate-fade-in">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 bg-campus-600 rounded-sm neubrutalism flex items-center justify-center">
            <span className="text-white font-bold">CV</span>
          </div>
          <span className="font-extrabold text-lg tracking-tight hidden sm:inline-block">
            CampusVibe
          </span>
        </Link>

        <div className="hidden md:flex relative max-w-md w-full mx-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            type="text" 
            placeholder="Search posts, marketplace items..." 
            className="pl-10 pr-4 py-2 w-full neubrutalism"
          />
        </div>

        <nav className="flex items-center gap-1 sm:gap-3">
          <Link to="/feed" className={`p-2 ${isActive('/feed') ? 'bg-gray-100 rounded-md' : ''}`}>
            <Home className="h-5 w-5" />
          </Link>
          <Link to="/messages" className={`p-2 relative ${isActive('/messages') ? 'bg-gray-100 rounded-md' : ''}`}>
            <MessageCircle className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-campus-600 text-white">
              2
            </Badge>
          </Link>
          <Link to="/marketplace" className={`p-2 ${isActive('/marketplace') ? 'bg-gray-100 rounded-md' : ''}`}>
            <ShoppingCart className="h-5 w-5" />
          </Link>
          <Link to="/notifications" className={`p-2 relative ${isActive('/notifications') ? 'bg-gray-100 rounded-md' : ''}`}>
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-campus-600 text-white">
              5
            </Badge>
          </Link>
          <Link to="/profile">
            <Button 
              variant="outline" 
              size="sm" 
              className={`ml-1 neubrutalism ${isActive('/profile') ? 'bg-gray-100' : ''}`}
            >
              <User className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline-block">Profile</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
