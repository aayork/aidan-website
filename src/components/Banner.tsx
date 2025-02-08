import Image from "next/image";
import { AuroraBackground } from "./ui/aurora-background";

export const Banner = () => (
  <AuroraBackground>
    <div className="ds-banner pt-20 pb-16 m-10 flex items-center">
      <div className="container flex items-center">
        <Image
          className="rounded-2xl"
          src="/images/profile-image.jpg"
          alt="Profile Image"
          width={600}
          height={600}
        />

        <section className="pl-16 pr-24">
          <h1 className="font-semibold text-4xl leading-[60px] text-black">
            Hi! I’m Aidan, <br />a fourth-year computer science student at UGA.
          </h1>
          <div className="mt-16">
            <ul className="flex items-center flex-wrap space-x-16 list-none">
              <li>
                <strong className="block text-[#ba0c2f] text-3xl font-extrabold">
                  Lots of
                </strong>
                <span className="text-sm tracking-wide">
                  Projects Completed
                </span>
              </li>
              <li>
                <strong className="block text-[#ba0c2f] text-3xl font-extrabold">
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
