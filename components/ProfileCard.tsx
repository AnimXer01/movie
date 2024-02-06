"use client";
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";
import {Chip} from "@nextui-org/react";
export default function ProfileCard({ path, name }: any) {
  return (
    <div className="w-fit">

    <Chip radius="sm" variant="faded" className="block sm:hidden p-1">{name}</Chip>
    <Card isFooterBlurred radius="lg" className="border-none hidden sm:block">
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={130}
        src={`${TMDB_IMAGE_ENDPOINT}/${path}`}
        width={130}
      />
      <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-xs sm:text-tiny text-white/80 p-0 sm:p-2">{name}</p>
      </CardFooter>
    </Card></div>
  );
}
