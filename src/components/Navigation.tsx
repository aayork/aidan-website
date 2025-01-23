import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export const Navigation = () => (
  <header className="ds-header shadow-md" id="site-header">
    <div className="container">
      <div className="ds-header-inner">
        <Link href="/">
          <p className="ds-logo">Aidan York</p>
        </Link>
        <ul className="ds-social">
          <li>
            <Link
              href="https://github.com/aayork"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4" />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/aidan-york/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
);
