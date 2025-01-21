import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Aidan York</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <link href="/assets/css/main.css" rel="stylesheet" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <header className="ds-header" id="site-header">
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
                  <i className="ri-github-fill"></i>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/aidan-york/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-fill"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="ds-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <figure>
                <Image
                  style={{ borderRadius: "20px" }}
                  src="/assets/images/profile-image.jpg"
                  alt="Profile Image"
                  width={400}
                  height={400}
                />
              </figure>
            </div>
            <div className="col-md-7">
              <section>
                <h1>
                  I’m Aidan York, <br />a fourth-year computer science student
                  at UGA.
                </h1>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-about-section">
        <div className="container">
          <section>
            <h2 className="ds-heading">About Me</h2>
            <p>
              I’m passionate about computing and programming, seeking to absorb
              as much knowledge as I can. Check out my resume!
            </p>
            <div className="ds-button-sec text-center">
              <Link
                href="/Aidan York's Resume.pdf"
                className="ds-button"
                download
              >
                Download Resume
              </Link>
            </div>
          </section>
        </div>
      </div>

      <div className="ds-skills-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="ds-heading">Core Skills</h2>
              <ul className="ds-skills-list">
                <li>Java</li>
                <li>Python</li>
                <li>Git</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Next.js</li>
                <li>React</li>
                <li>Node.js</li>
                <li>C</li>
                <li>Object Oriented Programming</li>
                <li>Linux Command Line</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h2 className="ds-heading">Relevant Coursework</h2>
              <ul className="ds-skills-list">
                <li>CS1301</li>
                <li>CS1302</li>
                <li>Calculus 1 & 2</li>
                <li>Differential Equations</li>
                <li>Discrete Math</li>
                <li>Systems Programming</li>
                <li>Advanced Web Development</li>
                <li>Data Structures</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-experience-section">
        <div className="container">
          <h2 className="ds-heading">Work Experience</h2>
          <div className="row ds-experience-list">
            <div className="col-md-6">
              <section>
                <span className="ds-year">May 2024 - July 2024</span>
                <h3 className="ds-officename">Horizon Cloud</h3>
                <span className="ds-department">Software Developer Intern</span>
                <p>I interned at Horizon Cloud as a Developer Intern.</p>
                <ul>
                  <li>
                    Discovered new methods of 3D scanning utilizing computer
                    vision for use in Placez event planning software.
                  </li>
                  <li>Using Ubuntu VM to train machine learning models.</li>
                </ul>
              </section>
            </div>
            <div className="col-md-6">
              <section>
                <span className="ds-year">May 2023 - July 2023</span>
                <h3 className="ds-officename">Apex Service Partners</h3>
                <span className="ds-department">IT Intern</span>
                <p>
                  I interned at Apex Service Partners in the summer of 2023.
                </p>
                <ul>
                  <li>Corporate work experience.</li>
                  <li>Migration of domains to a new Azure tenant.</li>
                  <li>Scripting on PCs for automation.</li>
                </ul>
              </section>
            </div>
            <div className="col-md-6">
              <section>
                <span className="ds-year">2019 - 2021</span>
                <h3 className="ds-officename">Publix Supermarkets</h3>
                <span className="ds-department">Customer Service</span>
                <p>
                  I worked at Publix for two years as a front service clerk.
                </p>
                <ul>
                  <li>Direct customer involvement.</li>
                  <li>Interpersonal Skills.</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-blog-section">
        <div className="container">
          <h2 className="ds-heading">
            <Link href="https://medium.com/@York_aa19">Blog</Link>
          </h2>
          <div className="ds-blog-list-section">
            <div className="ds-blog-list">
              <div
                id="retainable-rss-embed"
                data-rss="https://medium.com/feed/@York_aa19"
                data-maxcols="2"
                data-layout="grid"
                data-poststyle="inline"
                data-readmore="Read"
                data-buttonclass="btn ds-button"
                data-offset="-100"
                style={{ width: "max-content" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <footer className="ds-footer text-center">
        <div className="container">
          <section>
            <h4>Feel free to contact me!</h4>
            <Link href="mailto:york_aa19@outlook.com" className="ds-button">
              Email
            </Link>
          </section>
          <p>&copy;2024 Aidan York</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
