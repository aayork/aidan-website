import { Card, CardHeader, CardContent } from "./ui/card";
import Image from "next/image";

export const Projects = () => {
  return (
    <div className="container mt-10 p-15">
      <h2 className="ds-heading m-10">Projects</h2>
      <div className="grid m-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[75rem] w-full mx-auto">
        <Card>
          <CardHeader className="p-0">
            <Image
              src="/images/ritmo.gif"
              alt="Project"
              width="400"
              height="225"
              className="aspect-video object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-xl font-bold">Ritmo!</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              A rhythm game for Apple Vision
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="p-0">
            <Image
              src="/images/recipe-box.png"
              alt="Project"
              width="400"
              height="225"
              className="aspect-video object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-xl font-bold">The Recipe Box</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Share your favorite recipes!
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="p-0">
            <Image
              src="/images/movie.png"
              alt="Project"
              width="400"
              height="225"
              className="aspect-video object-cover"
            />
          </CardHeader>
          <CardContent className="p-4">
            <div className="text-xl font-bold">Cinema E-Booking</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Book movies in style 😎
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
