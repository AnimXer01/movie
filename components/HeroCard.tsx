import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import Link from "next/link";
const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";
export default function HeroCard({ result, idx, type }: any) {
  const imgSrc = result.image
    ? result.image
    : result.backdrop_path
    ? `${TMDB_IMAGE_ENDPOINT}${result.backdrop_path}`
    : "/notfound.jpg";
  return (
    <Link href={`/${type}/${result.id}`}>
      <Card
        isFooterBlurred
        className="w-full h-[500px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-medium text-white/60 uppercase font-bold text-yellow-500">
            # {idx} on Trending
          </p>
          <h4 className="text-white/90 font-medium text-5xl">
            {result.title || result.name}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="movie poster background"
          className="z-0 w-full h-full object-cover filter brightness-75  object-center sm:object-right-top"
          src={imgSrc}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Description:</p>
              <p className="text-tiny text-white/60">{result.overview}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
