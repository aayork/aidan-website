import Link from "next/link";
import Image from "next/image";
import { Lamp, User, Settings } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="sticky top-0 bg-white bg-opacity-60 rounded-full shadow-lg p-6 my-10 mx-auto max-w-sm">
      <ul className="flex justify-between space-x-8">
        <li>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            <Lamp className="h-3 w-3 mr-1" />
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            <User className="h-3 w-3 mr-1" />
            Profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 flex items-center"
          >
            <Settings className="h-3 w-3 mr-1" />
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};
