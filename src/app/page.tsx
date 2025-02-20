import { Navigation } from "@/components/Navigation";
import { Banner } from "@/components/Banner";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Books } from "@/components/Books";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div>
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
