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
    title: "/images/RITMO_BLACK_LOGO.png",
    image: "/images/groupphoto_RITMO-2.jpg",
    description: "Rhythm game for Apple Vision",
    technologies: "Swift, SwiftUI, RealityKit",
  },
  {
    title: "The Recipe Box",
    image: "/images/recipe-box.png",
    description: "Share your favorite recipes!",
    technologies: "Next.js, React, TypeScript",
  },
];

export const Projects = () => {
  return (
    <div className="m-10">
      <h1 className="m-4 font-bold text-xl underline decoration-[#C2DBA2]">
        My Projects
      </h1>
      <ScrollArea className="w-11/12 whitespace-nowrap">
        <div className="flex w-max space-x-4 px-4 pb-4">
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
                {project.title.startsWith("/") ? (
                  <Image
                    src={project.title}
                    alt="Project Title"
                    width={67.5}
                    height={37.5}
                    className="object-contain"
                  />
                ) : (
                  <span className="font-semibold text-foreground">
                    {project.title}
                  </span>
                )}
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
