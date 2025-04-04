import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Code, Paintbrush } from "lucide-react";
import hsp from '../images/hospital.webp'; import wapp from '../images/weather.png'
import live from '../images/online.png'; import tic from '../images/tic-tac.png'
import quiz from '../images/quiz.png'; import edutech from '../images/edutech.png'
import chatbot from '../images/chatbot.webp'; import todoapp from '../images/Todo App.png'
import cc from '../images/cc.png';
import flipbasket from '../images/flipbasket.png';
import befit from '../images/befit.png';
import '../App.css'

const projects = [
  {
    title: "Hospital Management System",
    description: "Users of the HMS  can manage patient records, schedule appointments, and streamline medical operations efficiently.",
    image: hsp,
    link: "#projects",
    icon: Code,
    code:"https://github.com/Aadi-kommula/HMS"
  },
  {
    title: "Edutech",
    description: "Users of the E-Learning Platform have the ability to enroll in courses and participate in quizzes.",
    image: edutech,
    link: "https://aadi-edutech.vercel.app/",
    icon: Code,
    code: "https://github.com/Aadi-kommula/Edutech"
  },
  {
    title: "ChatBot",
    description: "Users of the chatbot system can engage in conversations and receive intelligent automated replies.",
    image: chatbot,
    link: "https://aadi-chatbot.vercel.app/",
    icon: Rocket,
    code: "https://github.com/Aadi-kommula/ChatBot"
  },
  {
    title: "TodoApp",
    description: "Users of the To-Do application can create tasks, set deadlines, and track their progress efficiently.",
    image: todoapp,
    link: "https://aadi-todoapp.vercel.app/",
    icon: Code,
    code: "https://github.com/Aadi-kommula/Todo_app"
  },
  {
    title: "Currency Convertor",
    description: "Users of the Currency Converter can effortlessly convert currencies in real-time and access the latest exchange rates.",
    image: cc,
    link: "https://aadi-currency-convertor.vercel.app/",
    icon: Rocket,
    code: "https://github.com/Aadi-kommula/Currency_Convertor"
  },
  {
    title: "Flipbasket E-commerce site",
    description: "Users of the FlipBasket e-commerce platform can browse products, add items to their cart, and make secure online purchases.",
    image: flipbasket,
    link: "https://aadi-flipbasket.vercel.app/",
    icon: Code,
    code: "https://github.com/Aadi-kommula/flipbasket"
  },
  {
    title: "Befit fitness app ",
    description: "Users of the Befit fitness app can track workouts, monitor progress, and achieve their fitness goals with personalized guidance.",
    image: befit,
    link: "https://aadi-befit.vercel.app/",
    icon: Rocket,
    code: "https://github.com/Aadi-kommula/befit"
  },
  {
    title: "Weather App",
    description: "Simple Weather App fecths data from API based on city names",
    image: wapp,
    link: "https://aadi-weatherapp.vercel.app/",
    icon: Rocket,
    code: "https://github.com/Aadi-kommula/Weather-app-react"
  },
  {
    title: "Tic Tac Toe",
    description: "A Simple user friendly react based Tic Tac Toe Game",
    image: tic,
    link: "https://aadi-tic-tac-toe.vercel.app/",
    icon: Paintbrush,
    code: "https://github.com/Aadi-kommula/React-tic-tac-toe"
  },
  {
    title: "Online Live Code Editor",
    description: "Simple But Highly Functional HTML CSS Compiler Webapp",
    image: live,
    link: "https://aadi-olce.vercel.app/",
    icon: Rocket,
    code: "https://github.com/Aadi-kommula/Online_Live_Code_Editor"
  },
  {
    title: "Simple Quizapp Prototype",
    description: "A Simple react based online  Quizapp prototype",
    image: quiz,
    link: "https://aadi-quizapp.vercel.app/",
    icon: Paintbrush,
    code: "https://github.com/Aadi-kommula/React-quizapp"
  },
];

export default function Projects() {
  return (
    <section className="py-20" id="projects">
      <div className="container">
        <h2 className="section-title  text-cyan-500 hover:text-cyan-600">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={project.title}
                className="card-hover-projects overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-white/90 group-hover:bg-cyan-500 transition-colors">
                    <Icon
                      className=" w-6 h-6 text-cyan-500 group-hover:text-white group-hover:rotate-12 transition-all"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex justify-between">
                    {/* button for view project */}
                    <Button asChild className="bg-cyan-500 group-hover:bg-white/90 group-hover:text-cyan-600">
                      <a href={project.link} target="_blank" className="inline-flex bg-cyan-500 text-white   items-center gap-2">
                        View Project
                        <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>

                    {/* button for github */}
                    <Button asChild className="bg-green-600 group-hover:bg-green-600 text-white">
                      <a href={project.code} target="_blank" className="inline-flex items-center gap-2">
                        Github Repo
                      </a>
                    </Button>

                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}