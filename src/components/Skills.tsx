import { Card } from "@/components/ui/card";
import { Code, Layout, Database, FileCode, Laptop ,Rocket } from "lucide-react";

const skills = [
  { name: "HTML & CSS", level: "Advanced", icon: Layout },
  { name: "JavaScript", level: "Advanced", icon: FileCode },
  { name: "React", level: "Intermediate", icon: Code },
  { name: "SQL", level: "Intermediate", icon: Database },
  { name: "Java", level: "Intermediate", icon: Laptop },
  { name: "Git", level: "Advanced", icon: Rocket },
];

export default function Skills() {
  return (
    <section className="py-20 bg-secondary/30" id="skills">
      <div className="container">
        <h2 className="section-title  text-cyan-500 hover:text-cyan-600">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={skill.name}
                className="card-hover-border p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-white/80 transition-colors">
                    <Icon 
                      className="icon-style w-8 h-8 text-cyan-600 group-hover:scale-110 transition-transform" 
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground">{skill.level}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}