import * as React from "react";
import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Books {
  author: string;
  image: string;
  title: string;
}

export const works: Books[] = [
  {
    author: "Ornella Binni",
    image:
      "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    title: "The Book of Life",
  },
  {
    author: "Tom Byrom",
    image:
      "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    title: "The Book of Life",
  },
  {
    author: "Vladimir Malyavko",
    image:
      "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    title: "The Book of Life",
  },
  {
    author: "Haruki Murakami",
    image:
      "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=300&q=80",
    title: "The Book of Life",
  },
  {
    author: "Jane Austen",
    image:
      "https://images.unsplash.com/photo-1606800052040-02869c7760d4?auto=format&fit=crop&w=300&q=80",
    title: "The Book of Life",
  },
  {
    author: "George Orwell",
    image:
      "https://images.unsplash.com/photo-1514894780887-121968d00567?auto=format&fit=crop&w=300&q=80",
    title: "The Book of Life",
  },
  {
    author: "Agatha Christie",
    image:
      "https://images.unsplash.com/photo-1601994949427-0c5beea6ed20?auto=format&fit=crop&w=300&q=80",
    title: "The Book of Life",
  },
  {
    author: "Fyodor Dostoevsky",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=300&q=80",
    title: "The Book of Life",
  },
  {
    author: "J.K. Rowling",
    image:
      "https://images.unsplash.com/photo-1579208570378-8c970854bc23?auto=format&fit=crop&w=300&q=80",
    title: "The Book of Life",
  },
  {
    author: "Ernest Hemingway",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=300&q=80",
    title: "The Book of Life",
  },
  {
    author: "Emily Brontë",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218a6d1?auto=format&fit=crop&w=300&q=80",
    title: "The Book of Life",
  },
];

export const Books = () => {
  return (
    <div>
      <ScrollArea className="m-10 w-11/12 whitespace-nowrap">
        <div className="flex w-max space-x-4 p-4">
          {works.map((books) => (
            <figure key={books.author} className="shrink-0">
              <div className="overflow-hidden">
                <Image
                  src={books.image}
                  alt={`${books.title}`}
                  className="aspect-[3/4] object-cover"
                  width={300}
                  height={400}
                />
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
