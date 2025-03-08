
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface MarketplaceItemProps {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  category: string;
  condition: string;
  seller: string;
  location: string;
  postedTime: string;
}

export function MarketplaceItem({
  id,
  title,
  price,
  imageUrl,
  category,
  condition,
  seller,
  location,
  postedTime,
}: MarketplaceItemProps) {
  return (
    <Card className="overflow-hidden neubrutalism transition-all duration-300 animate-slide-in hover:translate-y-[-5px]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-2 right-2 neubrutalism bg-white text-black border-black">
          {condition}
        </Badge>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <span className="font-bold text-campus-700">${price}</span>
        </div>
        
        <div className="space-y-2">
          <Badge variant="outline" className="mr-1 neubrutalism-sm">
            {category}
          </Badge>
          
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{location}</span>
            <span>{postedTime}</span>
          </div>
          
          <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
            <span className="text-sm">Seller: <span className="font-medium">{seller}</span></span>
            <Button className="neubrutalism bg-campus-600 hover:bg-campus-700">
              <MessageCircle className="h-4 w-4 mr-1" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default MarketplaceItem;
