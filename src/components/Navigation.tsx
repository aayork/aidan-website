import {
  Lamp,
  Github,
  Linkedin,
  Menu,
  FileUser,
  MessageCircleMore,
  Rss,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navigation = () => {
  return (
    <nav className="sticky top-5 z-50 bg-white/50 backdrop-blur-md rounded-full shadow-lg p-6 my-10 mx-auto max-w-sm">
      <ul className="flex justify-between space-x-8">
        <li>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            <Button
              size="default"
              variant="ghost"
              className="shadow-none"
              aria-label="Open edit menu"
            >
              <Lamp className="h-4 w-4 mr-1" />
              Home
            </Button>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/aayork"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            <Button
              size="default"
              variant="ghost"
              className="shadow-none"
              aria-label="Open edit menu"
            >
              <Github className="h-4 w-4 mr-1" />
              Github
            </Button>
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  variant="ghost"
                  className="rounded-full shadow-none"
                  aria-label="Open edit menu"
                >
                  <Menu className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="pb-2">
                <DropdownMenuLabel>More Stuff</DropdownMenuLabel>
                <DropdownMenuItem
                  className="cursor-pointer py-1 focus:bg-transparent focus:underline"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/aidan-york/">
                    <Linkedin
                      size={16}
                      strokeWidth={2}
                      className="opacity-60"
                      aria-hidden="true"
                    />
                    LinkedIn
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer py-1 focus:bg-transparent focus:underline"
                  asChild
                >
                  <a href="https://medium.com/@York_aa19">
                    <Rss
                      size={16}
                      strokeWidth={2}
                      className="opacity-60"
                      aria-hidden="true"
                    />
                    Medium
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer py-1 focus:bg-transparent focus:underline"
                  asChild
                >
                  <a href="/Aidan York's Resume.pdf" download>
                    <FileUser
                      size={16}
                      strokeWidth={2}
                      className="opacity-60"
                      aria-hidden="true"
                    />
                    Résumé
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer py-1 focus:bg-transparent focus:underline"
                  asChild
                >
                  <a href="mailto:york_aa19@outlook.com">
                    <MessageCircleMore
                      size={16}
                      strokeWidth={2}
                      className="opacity-60"
                      aria-hidden="true"
                    />
                    Contact
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </a>
        </li>
      </ul>
    </nav>
  );
};
