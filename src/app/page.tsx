import { Navigation } from "@/components/Navigation";
import { Banner } from "@/components/Banner";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/ui/aurora-background";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
};

export default Home;
