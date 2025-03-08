
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MarketplaceItem from "@/components/marketplace/MarketplaceItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Search } from "lucide-react";

const MOCK_ITEMS = [
  {
    id: "1",
    title: "Calculus Textbook - 8th Edition",
    price: 45,
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Textbooks",
    condition: "Like New",
    seller: "Jamie Smith",
    location: "North Campus",
    postedTime: "2 days ago",
  },
  {
    id: "2",
    title: "Mini Refrigerator - perfect for dorms",
    price: 75,
    imageUrl: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Appliances",
    condition: "Good",
    seller: "Tyler Jones",
    location: "East Residence Hall",
    postedTime: "3 days ago",
  },
  {
    id: "3",
    title: "Bicycle - Trek Mountain Bike",
    price: 220,
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Transportation",
    condition: "Used",
    seller: "Alex Wong",
    location: "West Campus",
    postedTime: "1 week ago",
  },
  {
    id: "4",
    title: "Desk Lamp with USB charging port",
    price: 25,
    imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Home Goods",
    condition: "New",
    seller: "Morgan Lee",
    location: "Off Campus Housing",
    postedTime: "2 days ago",
  },
  {
    id: "5",
    title: "Psychology 101 Notes - Full Semester",
    price: 15,
    imageUrl: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Study Materials",
    condition: "N/A",
    seller: "Jordan Park",
    location: "Library",
    postedTime: "5 days ago",
  },
  {
    id: "6",
    title: "Wireless Noise Cancelling Headphones",
    price: 120,
    imageUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Electronics",
    condition: "Like New",
    seller: "Casey Chen",
    location: "South Campus",
    postedTime: "1 day ago",
  },
];

const Marketplace = () => {
  const [items, setItems] = useState(MOCK_ITEMS);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredItems = items.filter(item => {
    // Apply search filter
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply category filter
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = ["all", ...new Set(items.map(item => item.category))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-20 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Campus Marketplace</h1>
            <p className="text-gray-600">Buy, sell, and trade with other students on campus</p>
          </div>
          
          <Button className="neubrutalism bg-campus-600 hover:bg-campus-700">
            <Plus className="h-4 w-4 mr-2" />
            List an Item
          </Button>
        </div>
        
        <div className="bg-white neubrutalism p-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input 
                type="text" 
                placeholder="Search items..."
                className="pl-10 neubrutalism"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="neubrutalism">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="neubrutalism">
                {categories.map((category, index) => (
                  <SelectItem key={index} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select defaultValue="newest">
              <SelectTrigger className="neubrutalism">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="neubrutalism">
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <MarketplaceItem key={item.id} {...item} />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 mb-4">No items match your search criteria</p>
            <Button 
              variant="outline" 
              className="neubrutalism"
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
        
        {filteredItems.length > 0 && (
          <div className="mt-8 text-center">
            <Button variant="outline" className="neubrutalism">
              Load More
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Marketplace;
