import Link from "next/link";

export const About = () => (
  <div className="ds-about-section m-10">
    <div className="container">
      <section>
        <h2 className="ds-heading">About Me</h2>
        <p>
          I love making cool things with emerging technologies and expressing
          myself creatively through code! Check out my resume to learn more.
        </p>
        <div className="ds-button-sec text-center">
          <Link href="/Aidan York's Resume.pdf" className="ds-button" download>
            Download Resume
          </Link>
        </div>
      </section>
    </div>
  </div>
);
