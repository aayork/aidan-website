import { Navigation } from "@/components/Navigation";
import { Banner } from "@/components/Banner";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Books } from "@/components/Books";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="border-[15px] border-green-950">
      {/* big custom border */}
      <Navigation />
      <Banner />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Books />
      <Footer />
    </div>
  );
};

export default Home;
