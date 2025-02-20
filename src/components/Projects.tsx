import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string;
  path: string;
}

export const projects: Project[] = [
  {
    title: "/images/RITMO_BLACK_LOGO.png",
    image: "/images/groupphoto_RITMO-2.jpg",
    description: "Rhythm game for Apple Vision",
    technologies: "Swift, SwiftUI, RealityKit",
    path: "/projects/ritmo",
  },
  {
    title: "The Recipe Box",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",
    description: "Share your favorite recipes!",
    technologies: "Next.js, React, TypeScript",
    path: "https://github.com/aayork/recipe-box",
  },
];

export const Projects = () => {
  return (
    <div className="m-14">
      <h1 className="mb-4 font-bold text-xl underline decoration-[#C2DBA2]">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.path} href={project.path}>
            <figure key={project.title} className="flex flex-col">
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="aspect-[5/6] object-cover w-full"
                  width={500}
                  height={600}
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
          </Link>
        ))}
      </div>
    </div>
  );
};
