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
    
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Using FormSubmit.co
      await fetch("https://formsubmit.co/ajax/aadikommula@gmail.com", {
        method: "POST",
        body: formData,
      });

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-secondary/30" id="contact">
      <div className="container max-w-6xl">
        <h2 className="section-title animate-fade-down text-cyan-500 hover:text-cyan-600">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info (unchanged) */}
          <div className="space-y-6 animate-fade-right">
            <Card className="card-hover p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-white/80 transition-colors">
                  <Mail className="w-6 h-6 text-cyan-600 group-hover:text-black" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:Aadikommula@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    Aadikommula@gmail.com
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="card-hover p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-white/80 transition-colors">
                  <Phone className="w-6 h-6 group-hover:text-black" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <a href="tel:+918978500126" className="text-muted-foreground hover:text-primary transition-colors">
                    +918978500126
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="card-hover p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-white/80 transition-colors">
                  <MapPin className="w-6 h-6 group-hover:text-black" />
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

          {/* Fixed Contact Form */}
          <Card className="card-hover p-6 hover:bg-gray-100 hover:shadow-lg transition-shadow animate-fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New message from your portfolio!" />
              <input type="hidden" name="_template" value="box" />
              
              <div className="space-y-2">
                <Input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </div>
              <div className="space-y-2">
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  required
                  className="transition-all duration-300 focus:scale-[1.02]"
                />
              </div>
              <div className="space-y-2">
                <Textarea 
                  name="message"
                  placeholder="Your Message" 
                  className="min-h-[150px] transition-all duration-300 focus:scale-[1.02]" 
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full group bg-cyan-500 hover:bg-cyan-600" 
                disabled={isSubmitting}
              >
                <span className="group-hover:translate-x-3 transition-transform">
                  {isSubmitting ? "Sending..." : "Send Message"}
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