import * as React from "react";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string;
}

export const projects: Project[] = [
  {
    title: "Ritmo!",
    image: "/images/groupphoto_RITMO-2.jpg",
    description: "Rhythm game for Apple Vision",
    technologies: "Swift, SwiftUI, RealityKit",
  },
  {
    title: "Project Two",
    image: "https://your-project-image-url.com/2",
    description: "Mobile app that...",
    technologies: "React Native, Firebase",
  },
];

export const Projects = () => {
  return (
    <div>
      <ScrollArea className="m-10 w-11/12 whitespace-nowrap">
        <div className="flex w-max space-x-4 p-4">
          {projects.map((project) => (
            <figure key={project.title} className="shrink-0">
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="aspect-[3/4] object-cover"
                  width={300}
                  height={400}
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {project.title}
                </span>
              </figcaption>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Description:{" "}
                <span className="font-semibold text-foreground">
                  {project.description}
                </span>
              </figcaption>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Tech Stack:{" "}
                <span className="font-semibold text-foreground">
                  {project.technologies}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
