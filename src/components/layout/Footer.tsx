
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="mt-auto py-6 border-t border-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-6 w-6 bg-campus-600 rounded-sm neubrutalism flex items-center justify-center">
                <span className="text-white font-bold text-xs">CV</span>
              </div>
              <span className="font-extrabold text-base tracking-tight">
                CampusVibe
              </span>
            </div>
            <p className="text-sm text-gray-600 max-w-xs">
              The exclusive social platform where college students connect, share, and thrive.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-semibold mb-1">Platform</span>
              <Link to="/feed" className="text-gray-600 hover:text-campus-600">Feed</Link>
              <Link to="/marketplace" className="text-gray-600 hover:text-campus-600">Marketplace</Link>
              <Link to="/messages" className="text-gray-600 hover:text-campus-600">Messages</Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="font-semibold mb-1">Community</span>
              <Link to="/guidelines" className="text-gray-600 hover:text-campus-600">Guidelines</Link>
              <Link to="/moderation" className="text-gray-600 hover:text-campus-600">Moderation</Link>
              <Link to="/support" className="text-gray-600 hover:text-campus-600">Support</Link>
            </div>
            
            <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
              <span className="font-semibold mb-1">Legal</span>
              <Link to="/privacy" className="text-gray-600 hover:text-campus-600">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-campus-600">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-600 hover:text-campus-600">Cookie Policy</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} CampusVibe. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="#" className="text-gray-500 hover:text-campus-600 text-xs">Status</Link>
            <Link to="#" className="text-gray-500 hover:text-campus-600 text-xs">Feedback</Link>
            <Link to="#" className="text-gray-500 hover:text-campus-600 text-xs">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
