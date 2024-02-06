"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function AnimePlayer({ animeLink }: any) {

  const [streamLink, setStreamLink] = useState(animeLink[0].url);
  return (
    <div className="flex flex-col m-2 justify-around lg:flex-row">
    <div>
      <iframe
        src={streamLink}
        className="border-slate-700 border-1 w-[21rem] h-[14rem] md:w-[60rem] md:h-[34rem] mx-auto overflow-hidden"
        allowFullScreen
      ></iframe>
      <h1 className="mt-2 p-2 font-medium text-sm text-teal-300">
      If current server doesn't work, please try other servers
      </h1>
      <div className="flex gap-2 flex-wrap">
          {animeLink.map((link:any) => (
            <Button variant="flat" onPress={() => {
              setStreamLink(link.url);
            }}>{link.name}</Button>
          ))}
      </div>
    </div>
  </div>
  );
}
