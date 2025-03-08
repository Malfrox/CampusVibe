
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AuthForm from "@/components/auth/AuthForm";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 px-4 border-b border-black">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <div className="inline-block">
                  <Badge className="px-3 py-1 text-sm font-medium bg-campus-100 text-campus-700 rounded-full neubrutalism">
                    Exclusive for college students
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Your campus.<br />Your community.<br />Your voice.
                </h1>
                <p className="text-lg text-gray-600 max-w-md">
                  Connect with fellow students, share anonymously, buy & sell goods, 
                  and build your campus community in one secure space.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button asChild className="neubrutalism bg-campus-600 hover:bg-campus-700">
                    <a href="#get-started">Join Your Campus</a>
                  </Button>
                  <Button asChild variant="outline" className="neubrutalism">
                    <Link to="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-6 -left-6 h-full w-full border-2 border-black bg-campus-100 rounded-lg"></div>
                <div className="relative neubrutalism overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Students on campus"
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24 px-4 bg-gray-50 border-b border-black">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need on campus</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                CampusVibe brings together all aspects of student life in one secure, 
                verified platform exclusively for your campus.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Anonymous Discussions",
                  description: "Share thoughts, seek advice, and express yourself freely without revealing your identity.",
                  icon: "🔒",
                  delay: "0",
                },
                {
                  title: "Campus Marketplace",
                  description: "Buy, sell, and trade textbooks, furniture, and more with students from your campus.",
                  icon: "🛒",
                  delay: "150",
                },
                {
                  title: "Verified Community",
                  description: "Connect only with verified students from your institution for a secure experience.",
                  icon: "✅",
                  delay: "300",
                },
                {
                  title: "Content Sharing",
                  description: "Share photos, GIFs, memes, and stories with your campus community.",
                  icon: "📷",
                  delay: "150",
                },
                {
                  title: "Peer Moderation",
                  description: "Student volunteers help maintain community guidelines and a positive environment.",
                  icon: "👥",
                  delay: "300",
                },
                {
                  title: "Real-time Notifications",
                  description: "Stay updated with activities, messages, and events relevant to you.",
                  icon: "🔔",
                  delay: "450",
                },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 neubrutalism animate-slide-in" 
                >
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Get Started Section */}
        <section id="get-started" className="py-16 md:py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold">Join your campus community today</h2>
                <p className="text-gray-600">
                  Sign up with your college email to get verified and start connecting with your campus community.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-campus-100 flex items-center justify-center text-campus-700 font-bold">1</div>
                    <p>Sign up with your .edu email</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-campus-100 flex items-center justify-center text-campus-700 font-bold">2</div>
                    <p>Verify your student status</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-campus-100 flex items-center justify-center text-campus-700 font-bold">3</div>
                    <p>Connect with your campus community</p>
                  </div>
                </div>
              </div>
              
              <div className="animate-fade-in">
                <AuthForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
