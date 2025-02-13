import Image from "next/image";

export const Banner = () => (
  <div className="ds-banner pt-20 pb-16 m-10 flex flex-col md:flex-row items-center text-center md:text-left">
    <div className="container flex flex-col md:flex-row items-center">
      <Image
        className="rounded-2xl w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]"
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
          <ul className="flex flex-row items-center sm:space-x-18 space-y-4 sm:space-y-0 list-none">
            <li>
              <strong className="block text-[#ba0c2f] text-2xl m-2 font-extrabold">
                {/*insert number of thing here */}
              </strong>
              <span className="text-sm tracking-wide m-2">
                {/*insert thing here */}
              </span>
            </li>
            <li>
              <strong className="block text-[#ba0c2f] text-2xl font-extrabold m-2">
                {/*insert number of thing here */}
              </strong>
              <span className="text-sm tracking-wide m-2">
                {/*insert thing here */}
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
);
