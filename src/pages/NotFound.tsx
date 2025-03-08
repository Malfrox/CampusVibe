
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md animate-fade-in">
        <div className="mb-6 inline-block">
          <div className="h-24 w-24 relative mx-auto">
            <div className="absolute inset-0 bg-campus-100 rounded-lg transform rotate-6 neubrutalism"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold">404</span>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="neubrutalism bg-campus-600 hover:bg-campus-700">
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
