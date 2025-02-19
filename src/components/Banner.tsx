import Image from "next/image";

export const Banner = () => {
  return (
    <div className="relative w-full m-10 md:w-1/2 h-80">
      <div className="absolute top-0 left-0 rounded-lg shadow-md z-10">
        <Image
          src="/images/placeholder.svg?height=300&width=300"
          alt="Image 1"
          width={300}
          height={300}
        />
      </div>
      <div className="absolute top-48 left-16 rounded-lg shadow-md z-30">
        <Image
          src="/images/placeholder.svg?height=300&width=300"
          alt="Image 2"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
