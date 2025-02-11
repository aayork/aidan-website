import Image from "next/image";
import { AuroraBackground } from "./ui/aurora-background";

export const Banner = () => (
  <AuroraBackground>
    <div className="ds-banner pt-20 pb-16 m-10 flex flex-col md:flex-row items-center text-center md:text-left">
      <div className="container flex flex-col md:flex-row items-center">
        <Image
          className="rounded-2xl w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px]"
          src="/images/profile-image.jpg"
          alt="Profile Image"
          width={600}
          height={600}
        />

        <section className="mt-8 md:mt-0 md:pl-16 md:pr-24">
          <h1 className="font-semibold text-3xl sm:text-4xl leading-[40px] sm:leading-[50px] md:leading-[60px] text-black">
            Hi! I’m Aidan, <br />a fourth-year computer science student at UGA.
          </h1>
          <div className="mt-10 sm:mt-16">
            <ul className="flex flex-col sm:flex-row items-center sm:space-x-16 space-y-4 sm:space-y-0 list-none">
              <li>
                <strong className="block text-[#ba0c2f] text-2xl sm:text-3xl font-extrabold">
                  Lots of
                </strong>
                <span className="text-sm tracking-wide">
                  Projects Completed
                </span>
              </li>
              <li>
                <strong className="block text-[#ba0c2f] text-2xl sm:text-3xl font-extrabold">
                  2
                </strong>
                <span className="text-sm tracking-wide">Internships</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </AuroraBackground>
);
