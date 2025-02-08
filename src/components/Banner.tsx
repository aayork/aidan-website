import Image from "next/image";
import { AuroraBackground } from "./ui/aurora-background";

export const Banner = () => (
  <AuroraBackground>
    <div
      className="ds-banner pt-20 m-10"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Image
          style={{ borderRadius: "20px" }}
          src="/images/profile-image.jpg"
          alt="Profile Image"
          width={600}
          height={600}
        />

        <section>
          <h1>
            Hi! I’m Aidan, <br />a fourth-year computer science student at UGA.
          </h1>
        </section>
      </div>
    </div>
  </AuroraBackground>
);
