
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      
      if (email.endsWith('.edu')) {
        toast.success("Welcome back to CampusVibe!");
        window.location.href = "/feed";
      } else {
        toast.error("Please use a valid college email (.edu)");
      }
    }, 1500);
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      
      if (!verifyEmail.endsWith('.edu')) {
        toast.error("Please use a valid college email (.edu)");
        return;
      }
      
      if (verifyPassword.length < 8) {
        toast.error("Password must be at least 8 characters");
        return;
      }
      
      toast.success("Verification email sent! Please check your inbox.");
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 neubrutalism bg-white">
      <Tabs defaultValue="login">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="login" className="text-base">Login</TabsTrigger>
          <TabsTrigger value="register" className="text-base">Register</TabsTrigger>
        </TabsList>
        
        <TabsContent value="login">
          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">College Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@college.edu" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="neubrutalism"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-xs text-campus-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="neubrutalism"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full neubrutalism bg-campus-600 hover:bg-campus-700"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="register">
          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="verify-email">College Email</Label>
              <Input 
                id="verify-email" 
                type="email" 
                placeholder="you@college.edu" 
                value={verifyEmail}
                onChange={(e) => setVerifyEmail(e.target.value)}
                required
                className="neubrutalism"
              />
              <p className="text-xs text-gray-500">
                Must be a valid .edu email address
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="verify-password">Create Password</Label>
              <Input 
                id="verify-password" 
                type="password" 
                placeholder="••••••••" 
                value={verifyPassword}
                onChange={(e) => setVerifyPassword(e.target.value)}
                required
                className="neubrutalism"
              />
              <p className="text-xs text-gray-500">
                Minimum 8 characters
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Input id="terms" type="checkbox" className="h-4 w-4" required />
                <Label htmlFor="terms" className="text-xs font-normal">
                  I agree to the <a href="#" className="text-campus-600 hover:underline">Terms of Service</a> and <a href="#" className="text-campus-600 hover:underline">Privacy Policy</a>
                </Label>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full neubrutalism bg-campus-600 hover:bg-campus-700"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AuthForm;
