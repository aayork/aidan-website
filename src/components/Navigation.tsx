import {
  Lamp,
  User,
  Menu,
  Book,
  LifeBuoy,
  MessageCircleMore,
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
              <Lamp className="h-3 w-3 mr-1" />
              Home
            </Button>
          </a>
        </li>
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
              <User className="h-3 w-3 mr-1" />
              Profile
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
                  <Menu size={16} strokeWidth={2} aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="pb-2">
                <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                <DropdownMenuItem
                  className="cursor-pointer py-1 focus:bg-transparent focus:underline"
                  asChild
                >
                  <a href="#">
                    <Book
                      size={16}
                      strokeWidth={2}
                      className="opacity-60"
                      aria-hidden="true"
                    />
                    Documentation
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer py-1 focus:bg-transparent focus:underline"
                  asChild
                >
                  <a href="#">
                    <LifeBuoy
                      size={16}
                      strokeWidth={2}
                      className="opacity-60"
                      aria-hidden="true"
                    />
                    Support
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="cursor-pointer py-1 focus:bg-transparent focus:underline"
                  asChild
                >
                  <a href="#">
                    <MessageCircleMore
                      size={16}
                      strokeWidth={2}
                      className="opacity-60"
                      aria-hidden="true"
                    />
                    Contact us
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
