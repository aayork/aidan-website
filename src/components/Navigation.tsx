import {
  Github,
  Menu,
  FileUser,
  MessageCircleMore,
  Linkedin,
  GitPullRequest,
  House,
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
              className="shadow-none rounded-full hover:bg-white/50"
              aria-label="Open edit menu"
            >
              <House className="h-4 w-4 mr-1" />
              Home
            </Button>
          </a>
        </li>
        <li>
          <a
            href="/projects"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            <Button
              size="default"
              variant="ghost"
              className="shadow-none rounded-full hover:bg-white/50"
              aria-label="Open edit menu"
            >
              <GitPullRequest className="h-4 w-4 mr-1" />
              Projects
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
                  className="shadow-none rounded-full hover:bg-white/50"
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
                    <Linkedin className="h-4 w-4 mr-1" />
                    LinkedIn
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer py-1 focus:bg-transparent focus:underline"
                  asChild
                >
                  <a href="https://github.com/aayork">
                    <Github className="h-4 w-4 mr-1" />
                    Github
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
