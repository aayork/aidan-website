import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Books {
  author: string;
  image: string;
  title: string;
  description: string;
}

export const works: Books[] = [
  {
    author: "Andy Weir",
    image: "https://m.media-amazon.com/images/I/81zD9kaVW9L.jpg",
    title: "Project Hail Mary",
    description:
      "[temporary description] An astronaut wakes up on a spaceship with no memory and must save humanity.",
  },
  {
    author: "Isaac Asimov",
    image:
      "https://atboundarysedge.com/wp-content/uploads/2020/08/foundation.jpg",
    title: "Foundation Trilogy",
    description:
      "[temporary description] A story about the fall and rise of a galactic empire based on predictive mathematics.",
  },
  {
    author: "Kurt Vonnegut",
    image:
      "https://m.media-amazon.com/images/I/817dhIc6E+L._AC_UF1000,1000_QL80_.jpg",
    title: "Slaughterhouse-Five",
    description:
      "[temporary description] A semi-autobiographical novel about time travel and the bombing of Dresden.",
  },
  {
    author: "George Orwell",
    image: "https://m.media-amazon.com/images/I/71rpa1-kyvL.jpg",
    title: "1984",
    description:
      "[temporary description] A dystopian novel about a totalitarian regime and the surveillance state.",
  },
];

export const Books = () => {
  return (
    <div className="m-10">
      <h1 className="m-4 font-bold text-xl underline">What I&apos;m Reading</h1>
      <ScrollArea className="max-w-[80rem] whitespace-nowrap">
        <div className="flex w-max space-x-4 px-4 pb-4">
          {works.map((books) => (
            <figure key={books.author} className="relative shrink-0">
              <div className="relative overflow-hidden group">
                <Image
                  src={books.image}
                  alt={`${books.title}`}
                  className="aspect-[3/5] object-cover transition-all duration-300 group-hover:opacity-80"
                  width={300}
                  height={500}
                />
                <div className="absolute inset-0 items-center justify-center bg-black/70 text-white text-sm opacity-0 transition-opacity duration-600 group-hover:opacity-100 p-4">
                  <p className="text-wrap">{books.description}</p>
                </div>
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {books.title}
                </span>
              </figcaption>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Author:{" "}
                <span className="font-semibold text-foreground">
                  {books.author}
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
