import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-20 bg-secondary/30" id="contact">
      <div className="container max-w-6xl">
        <h2 className="section-title animate-fade-down">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-right">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:Aadikommula@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    Aadikommula@gmail.com
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+918978500126" className="text-muted-foreground hover:text-primary transition-colors">
                    +918978500126
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">
                    Amalapuram, India
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 hover:shadow-lg transition-shadow animate-fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Input 
                  placeholder="Your Name" 
                  required
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </div>
              <div className="space-y-2">
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </div>
              <div className="space-y-2">
                <Textarea 
                  placeholder="Your Message" 
                  className="min-h-[150px] transition-all duration-300 focus:scale-[1.02]" 
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full group" 
                disabled={isSubmitting}
              >
                <span className="group-hover:translate-x-3 transition-transform">
                  Send Message
                </span>
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-3 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}