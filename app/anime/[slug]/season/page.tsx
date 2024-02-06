import EpisodeCard from "@/components/EpisodeCard";
import Pagination from "@/components/Pagination";
import Nav from "@/components/Nav";
import { SeasonDetails, findTV, getAnimeInfo } from "@/utils/Fetcher";
import AnimeEpisodeCard from "@/components/AnimeEpCard";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";

export default async function Season({
  params,
}: {
  params: { slug: string};
}) {
  const result = await getAnimeInfo(params.slug);
  let episodes = result.episodes;

  return (
    <div className="w-full overflow-hidden">
      <Nav />
      <div className="ml-6 p-2">
        <Link href={`/anime/${params.slug}`}>
          <Button size="sm" variant="flat">
            <FaAngleLeft size={16} /> Back
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {episodes.map((e: any,index:number) => (
          <AnimeEpisodeCard
            key={index}
            result={e}
            idx={params.slug}
            img={result.image}
            
          />
        ))}
      </div>
    </div>
  );
}
