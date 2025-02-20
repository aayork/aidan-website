import Image from "next/image";

export const Banner = () => {
  return (
    <div className="relative w-full h-80 mb-64">
      <div className="absolute top-0 left-0 rounded-lg mx-10 z-10">
        <Image
          src="/images/apple_campus.jpg?height=300&width=300"
          alt="Image 1"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute top-56 left-16 rounded-lg mx-10 z-30">
        <Image
          src="/images/yosemite_tree.jpg?height=300&width=300"
          alt="Image 2"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute mx-[12rem] top-0 left-64 z-10">
        <p className="mb-5">
          Hi! I’m Aidan, a fourth-year computer science student at UGA.
        </p>
        <p className="mb-5">
          I like making cool things with emerging technologies and expressing
          myself creatively through code!
        </p>
        <p>
          In my free time, I enjoy reading fiction, fishing, exploring the
          outdoors, and spending time with friends and family.
        </p>
      </div>
    </div>
  );
};
