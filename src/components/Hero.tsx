import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down">
        Hi, I'm <span className="text-primary hover:text-primary/80 transition-colors cursor-default">Aadi Kommula</span>
      </h1>
      <p className="text-xl md:text-xl text-muted-foreground mb-8 max-w-4xl animate-fade-up" style={{ animationDelay: "200ms" }}>
        A passionate Software Engineer and  web developer crafting beautiful and Turning ideas into Interactive Experiences
      </p>
      <div className="flex gap-4">
        <Button 
          size="lg" 
          className="group animate-fade-up" 
          style={{ animationDelay: "400ms" }}
        >
          <span className="group-hover:translate-x-1 transition-transform"><a href="#projects">View My Work</a></span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <a href="#contact">
        <Button 
          size="lg" 
          variant="outline" 
          className="group animate-fade-up hover:bg-primary/10" 
          style={{ animationDelay: "600ms" }}
        >
          Contact Me
        </Button>
        </a>
      </div>
    </section>
  );
}