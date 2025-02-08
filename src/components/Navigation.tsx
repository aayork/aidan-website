import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export const Navigation = () => (
  <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-white px-10 py-8 transition-all duration-400 ease-in-out shadow-md rounded-xl m-2 max-w-[100rem]">
    <Link href="/">
      <p className="uppercase text-lg tracking-widest text-black flex items-center">
        Aidan York
      </p>
    </Link>
    <ul className="list-none flex items-center flex-wrap">
      <li className="ml-3 first:ml-0 transition-all">
        <Link
          href="https://medium.com/@York_aa19"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-8 h-8 bg-[#ba0c2f] hover:bg-black rounded-full flex items-center justify-center">
            <Image
              priority
              src="/images/medium.svg"
              width={16}
              height={16}
              alt="Follow me on Medium"
            />
          </div>
        </Link>
      </li>
      <li className="ml-3 first:ml-0 transition-all">
        <Link
          href="https://github.com/aayork"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-8 h-8 bg-[#ba0c2f] hover:bg-black rounded-full flex items-center justify-center">
            <Github className="w-5 h-5 text-white" />
          </div>
        </Link>
      </li>
      <li className="ml-3 first:ml-0 transition-all">
        <Link
          href="https://www.linkedin.com/in/aidan-york/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-8 h-8 bg-[#ba0c2f] hover:bg-black rounded-full flex items-center justify-center">
            <Linkedin className="w-5 h-5 text-white" />
          </div>
        </Link>
      </li>
    </ul>
  </header>
);
