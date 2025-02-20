import Image from "next/image";

export const Banner = () => {
  return (
    <div className="relative w-full min-h-[20rem] mb-32 md:mb-64 px-4 md:px-10">
      <div className="flex flex-col md:block">
        <div className="mx-14 relative md:absolute md:top-0 md:left-0 rounded-lg mb-4 md:mb-0 md:z-10">
          <Image
            src="/images/apple_campus.jpg?height=300&width=300"
            alt="Image 1"
            width={300}
            height={300}
            className="w-full md:w-auto max-w-[300px] h-auto"
          />
        </div>

        <div className="mx-14 relative md:absolute md:top-56 md:left-16 mb-4 md:mb-0 md:z-30">
          <Image
            src="/images/yosemite_tree.jpg?height=300&width=300"
            alt="Image 2"
            width={300}
            height={300}
            className="w-full md:w-auto max-w-[300px] h-auto"
          />
        </div>

        <div className="md:absolute md:mx-[12rem] md:top-0 md:left-64 md:z-10">
          <p className="text-lg mb-5">
            Hi! I&apos;m Aidan, a fourth-year computer science student at UGA.
          </p>
          <p className="text-lg mb-5">
            I like making cool things with emerging technologies and expressing
            myself creatively through code!
          </p>
          <p className="text-lg mb-5">
            In my free time, I enjoy reading fiction, fishing, exploring the
            outdoors, and spending time with friends and family.
          </p>
        </div>
      </div>
    </div>
  );
};
