import { Button, Code } from "@nextui-org/react";
import Tips from "@/components/Tips";
import { FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";
import Nav from "@/components/Nav";

import { getAnimeInfo, watchAnime } from "@/utils/Fetcher";
import AnimePlayer from "@/components/AnimePlayer";
export default async function StreamMovies({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const stream = await watchAnime(params.id);
  let name = params.id;
  let dubstream = !name.includes("dub") ? name.replace("-ep","-dub-ep") : name;
  let substream = name.replace("-dub-ep","-ep");
  let variant = params.id.includes("dub");
  return (
    <div>
      <Nav />
      <div className="ml-6">
        <Link href={`/anime/${params.slug}/season`}>
          <Button size="sm" variant="flat">
            <FaAngleLeft size={16} /> Back
          </Button>
        </Link>
      </div>
      <div className="flex ml-6 p-2 gap-2 justify-center">
        <Link href={`/anime/${params.slug}/season/stream/${substream}`}>
        <Button size="sm" variant="flat" color={variant ? `default`: `success`}>SUB</Button>
        </Link>
        <Link href={`/anime/${params.slug}/season/stream/${dubstream}`}>
        <Button size="sm" variant="flat" color={variant ? `success`: `default`}>DUB</Button>
        </Link>
      </div>

      <AnimePlayer animeLink={stream} />

      <div className="flex justify-center m-2">
        <Tips />
      </div>
    </div>
  );
}
