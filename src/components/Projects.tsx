import Link from "next/link";
import { Card, CardHeader, CardContent } from "./ui/card";
import Image from "next/image";

export const Projects = () => {
  return (
    <div className="container mt-10">
      <h2 className="ds-heading m-10">Projects</h2>
      <div className="grid m-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[75rem] w-full mx-auto">
        <Link href="https://apps.apple.com/us/app/ritmo/id6480073527">
          <Card className="m-1">
            <CardHeader className="p-0">
              <Image
                src="/images/ritmo.gif"
                alt="Project"
                width="400"
                height="225"
                className="aspect-video object-cover rounded-t-md"
              />
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-xl font-bold">Ritmo!</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                A rhythm game for Apple Vision
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="https://github.com/aayork/recipe-box">
          <Card className="m-1">
            <CardHeader className="p-0">
              <Image
                src="/images/recipe-box.png"
                alt="Project"
                width="400"
                height="225"
                className="aspect-video object-cover rounded-t-md"
              />
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-xl font-bold">The Recipe Box</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Share your favorite recipes!
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="https://github.com/aayork/4050-TermProject">
          <Card className="m-1">
            <CardHeader className="p-0">
              <Image
                src="/images/movie.png"
                alt="Project"
                width="400"
                height="225"
                className="aspect-video object-cover rounded-t-md"
              />
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-xl font-bold">Cinema E-Booking</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Book movies in style 😎
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};
