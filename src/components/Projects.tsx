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
    technologies: "Swift, SwiftUI, RealityKit, MusicKit",
    path: "https://apps.apple.com/us/app/ritmo/id6480073527",
  },
  {
    title: "The Recipe Box",
    image:
      "https://preview.redd.it/2lktu03mau441.jpg?width=1080&crop=smart&auto=webp&s=0157ca8037f650f3a725ea3df4c448c22b783370",
    description: "All of gam-gam's recipes in the palm of your hand",
    technologies: "Next.js, React, TypeScript, MongoDB, ShadcnUI",
    path: "https://github.com/aayork/recipe-box",
  },
  {
    title: "Movie Monkey E-Booking",
    image:
      "https://i0.wp.com/www.cemeterydance.com/extras/wp-content/uploads/2024/07/monkey-movie.jpg?fit=683%2C1024&ssl=1",
    description: "Cinema E-Booking platform",
    technologies: "Vite, Django, React, DaisyUI, RESTful APIs",
    path: "https://github.com/aayork/4050-termproject",
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
