import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@nextui-org/react";
const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";
import { Chip } from "@nextui-org/react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa6";
import Link from "next/link";

export default function InfoCard({ result, type }: any) {
  let title = result.title;
  if (type === "anime") {
    title = result.title.english;
  }
  const genre = result.genres;
  const date = result.release_date
    ? result.release_date
    : result.first_air_date;
  const rating = result.rating
    ? result.rating / 10
    : result.vote_average
    ? result.vote_average.toFixed(1)
    : 5.2;
  const imgSrc = result.image
    ? result.image
    : result.poster_path
    ? `${TMDB_IMAGE_ENDPOINT}${result.poster_path}`
    : "/notfound.jpg";
  const runtime = result.runtime ? result.runtime : result.episode_run_time;
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] "
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4 mx-auto  w-1/2 sm:w-auto">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src={imgSrc}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90 text-3xl py-2">
                  {title || result.title || result.name}
                </h3>
                <div className="flex justify-start gap-1 py-2">
                  <Chip size="sm" variant="bordered" radius="sm">
                    {genre[0].name || genre[0]}
                  </Chip>
                  {genre[1] && (
                    <Chip size="sm" variant="bordered" radius="sm">
                      {genre[1].name || genre[1]}
                    </Chip>
                  )}
                </div>
                <div className="flex gap-2">
                  <Chip size="sm" radius="sm" color="warning" variant="flat">
                    {runtime || result.duration} mins
                  </Chip>
                  <Chip size="sm" radius="sm" color="warning" variant="flat">
                    {rating} ⭐
                  </Chip>
                  <Chip size="sm" radius="sm" color="warning" variant="flat">
                    {date
                      ? date.slice(0, 4)
                      : result.releaseDate
                      ? result.releaseDate
                      : "2023"}
                  </Chip>
                </div>
                <div className="mt-5">
                  {result.releaseDate ? (
                    // Component for result.releaseDate
                    <Link href={`/anime/${result.id}/season`}>
                      <Button color="default" variant="ghost">
                        <FaLayerGroup size="20" /> Episodes
                      </Button>
                    </Link>
                  ) : result.first_air_date || result.startDate ? (
                    // Component for result.first_air_date or result.startDate
                    <Link href={`${result.id}/season/1`}>
                      <Button color="default" variant="ghost">
                        <FaLayerGroup size="20" /> Seasons
                      </Button>
                    </Link>
                  ) : (
                    // Default component if none of the conditions are met
                    <Link href={`/movie/${result.id}/stream`}>
                      <Button color="default" variant="ghost">
                        <FaCirclePlay size="20" /> Play
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
