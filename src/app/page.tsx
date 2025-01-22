import Head from "next/head";
import { Navigation } from "@/components/Navigation";
import { Banner } from "@/components/Banner";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Head>
        <title>My Website</title>
        <meta name="description" content="Welcome to my portfolio website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navigation />
        <Banner />
        <About />
        <Experience />
        <Skills />
        <Blog />
        <Footer />
      </div>
    </>
  );
};

export default Home;
