"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Book {
  author: string;
  image: string;
  title: string;
  description: string;
}

export const works: Book[] = [
  {
    author: "Bill Bryson",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F91LZPx5BmwL._SL1500_.jpg&f=1&nofb=1&ipt=47ab908f9e76fc860a0dc34624b760a38636069bd0c190fc8ab98bc948e1a119&ipo=images",
    title: "A Walk in the Woods",
    description: "Hilarious story about Bill's attempt to walk the Appalachian Trail",
  },
  {
    author: "Pierce Brown",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.bromantasy.com%2Freview%2Fred-rising-1200.webp&f=1&nofb=1&ipt=d2ed9c013e6207213493b97c68c4b3c8384a7bb073037fababb1a6c841e696cb&ipo=images",
    title: "Red Rising",
    description: "A future dystopian tale about a low-caste boy who works in the mines on Mars",
  },
  {
    author: "Matt Dinniman",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Funseenlibrary.com%2Fwp-content%2Fuploads%2F2025%2F07%2Fdungeon-crawler-carl-cover.jpg&f=1&nofb=1&ipt=f4061be0c8eb2e0f451db98078175b9309de9bfae17f1eaca82e348b3c4a0dbf&ipo=images",
    title: "Dungeon Crawler Carl Series",
    description:
      "After the surface of the Earth is destroyed, Carl enters a televised underground dungeon (with his cat) where he faces all sorts of deadly foes",
  },
  {
    author: "Andy Weir",
    image: "https://m.media-amazon.com/images/I/81zD9kaVW9L.jpg",
    title: "Project Hail Mary",
    description:
      "One of the best books I've read in a while. Tells the story of an astronaut who wakes up in space with no recollection of how he got there or who he is. He eventually finds out that he is solely responsible for saving humanity, and makes an unlikely friend along the way.",
  },
  {
    author: "Isaac Asimov",
    image: "https://atboundarysedge.com/wp-content/uploads/2020/08/foundation.jpg",
    title: "Foundation Trilogy",
    description:
      "A story about the fall and rise of a galactic empire based on predictive mathematics.",
  },
  {
    author: "Kurt Vonnegut",
    image: "https://m.media-amazon.com/images/I/817dhIc6E+L._AC_UF1000,1000_QL80_.jpg",
    title: "Slaughterhouse-Five",
    description: "A semi-autobiographical novel about time travel and the bombing of Dresden.",
  },
  {
    author: "George Orwell",
    image: "https://m.media-amazon.com/images/I/71rpa1-kyvL.jpg",
    title: "1984",
    description:
      "A dystopian novel about a totalitarian regime and the surveillance state. Gets more relevant every year with the advent of technologies like Flock cameras.",
  },
];

export const Books = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const updateEdges = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  React.useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    const ro = new ResizeObserver(updateEdges);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      ro.disconnect();
    };
  }, [updateEdges]);

  const scrollByPage = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="m-10" aria-labelledby="reading-heading">
      <div className="mx-4 mb-4 flex max-w-[80rem] items-center justify-between">
        <h2
          id="reading-heading"
          className="text-xl font-bold underline decoration-[#C2DBA2]"
        >
          What I&apos;m Reading
        </h2>
        <div className="hidden gap-2 sm:flex">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => scrollByPage(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => scrollByPage(1)}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="relative max-w-[80rem]">
        <div
          ref={scrollRef}
          className="snap-x snap-mandatory scroll-px-4 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
        <ul className="flex w-max gap-4 px-4 pb-4">
          {works.map((book) => (
            <li key={book.title} className="w-[180px] shrink-0 snap-start sm:w-[220px]">
              <figure>
                {/* tabIndex lets keyboard and touch users reveal the description */}
                <div
                  tabIndex={0}
                  className="group relative overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[#C2DBA2]"
                >
                  <Image
                    src={book.image}
                    alt={`Cover of ${book.title}`}
                    className="aspect-[3/5] w-full object-cover transition-transform duration-300 group-hover:scale-105 group-focus:scale-105"
                    width={300}
                    height={500}
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/60 to-black/20 p-4 text-sm text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
                    <p>{book.description}</p>
                  </div>
                </div>
                <figcaption className="pt-2 text-xs text-muted-foreground">
                  <span className="block font-semibold text-foreground">{book.title}</span>
                  <span className="mt-1 block">
                    Author: <span className="font-semibold text-foreground">{book.author}</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        </div>

        {/* Edge shadows: shown only on the side(s) with more books to scroll to */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_60%,transparent)] left-0 w-8 bg-gradient-to-r from-black/15 to-transparent transition-opacity duration-300 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_60%,transparent)] right-0 w-8 bg-gradient-to-l from-black/15 to-transparent transition-opacity duration-300 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </section>
  );
};
