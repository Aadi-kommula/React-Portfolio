import { Card } from "@/components/ui/card";
import pic from './Profile-pic.jpg'

export default function About() {
  return (
    <section className="py-20 px-4" id="about">
      <h2 className="section-title">About Me</h2>
      <Card className="max-w-6xl mx-auto p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3">
            <img
              src={pic}
              alt="Profile"
              className="rounded-full w-49 h-49 object-cover mx-auto shadow-lg hover:shadow-xl"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl text-primary font-semibold mb-4 drop-shadow-xl">Aadi Kommula</h3>
            <p className="text-muted-foreground mb-4">
              I'm a Software Engineer and  web developer with a passion for creating beautiful, functional, and user-friendly websites. 
              With expertise in modern web technologies, I focus on delivering high-quality solutions that help 
              businesses grow their online presence.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge with the developer community.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}