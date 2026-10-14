import { Github, Linkedin, House, FileUser } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#", icon: House },
  { label: "GitHub", href: "https://github.com/aayork", icon: Github, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aidan-york/", icon: Linkedin, external: true },
  // Opens the PDF in a new tab; rename the file in /public to avoid spaces/apostrophes in the URL
  { label: "Resume", href: "/Aidan York's Resume.pdf", icon: FileUser, external: true },
];

export const Navigation = () => {
  return (
    <nav className="sticky top-5 z-50 mx-auto my-10 w-fit max-w-lg rounded-full bg-white/50 p-2 shadow-lg backdrop-blur-md sm:p-3">
      <ul className="flex items-center justify-between gap-1 sm:gap-4">
        {navItems.map(({ label, href, icon: Icon, external }) => (
          <li key={label}>
            <Button
              asChild
              variant="ghost"
              className="rounded-full px-3 text-gray-600 shadow-none hover:bg-white/50 hover:text-gray-900"
            >
              <a
                href={href}
                aria-label={label}
                title={label}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                <span className="hidden sm:ml-1 sm:inline">{label}</span>
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
