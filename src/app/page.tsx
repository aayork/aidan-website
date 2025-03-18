"use client";
import { Navigation } from "@/components/Navigation";
import { Banner } from "@/components/Banner";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Books } from "@/components/Books";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <div
        className="pointer-events-none fixed z-50 h-[50px] w-[50px] rounded-full bg-black/10 blur-xl transition-transform duration-100"
        style={{
          left: `${mousePosition.x - 25}px`,
          top: `${mousePosition.y - 25}px`,
        }}
      />
      <div className="w-full h-1 bg-[#C2DBA2]" />
      <Navigation />
      <Banner />
      <Projects />
      <Experience />
      <Books />
      <Footer />
    </div>
  );
};

export default Home;
