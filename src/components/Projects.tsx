import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Code, Paintbrush } from "lucide-react";
import hsp from './hospital.webp'
import wapp from './weather.png'
import live from './online.png'

const projects = [
  {
    title: "Hospital Management System",
    description: "A modern web application built with Java and Spring Boot",
    image: hsp,
    link: "#projects",
    icon: Code
  },
  {
    title: "Weather App",
    description: "Simple Weather App fecths data from API based on city names",
    image: wapp,
    link: "https://aadi-weatherapp.vercel.app/",
    icon: Rocket
  },
  {
    title: "Online Live Code Editor",
    description: "Simple But Highly Functional HTML CSS Compiler Webapp",
    image: live,
    link: "https://aadi-kommula.github.io/Online_Live_Code_Editor/",
    icon: Paintbrush
  },
];

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={project.title}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-white/90 group-hover:bg-primary/90 transition-colors">
                    <Icon 
                      className="w-6 h-6 text-primary group-hover:text-white group-hover:rotate-12 transition-all" 
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button asChild>
                    <a href={project.link} className="inline-flex items-center gap-2">
                      View Project
                      <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}