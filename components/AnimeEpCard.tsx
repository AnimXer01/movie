import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { watchAnime } from "@/utils/Fetcher";

export default function AnimeEpisodeCard({ result, idx, img }: any) {
  let watchLink = `/anime/${idx}/season/stream/${result.id}`;
  return (
    <div>
      <Link href={watchLink}>
        <Card className="py-4 m-2 sm:m-6">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">
              Episode {result.number}
            </p>
            <h4 className="font-medium text-medium">{result.title}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={result.image}
              width={270}
            />
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}
