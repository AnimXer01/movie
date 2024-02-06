import InfoCard from "@/components/InfoCard";
import Nav from "@/components/Nav";
import ProfileCard from "@/components/ProfileCard";
import { getAnimeInfo } from "@/utils/Fetcher";

import { FaAngleLeft } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import AnimeCharacter from "@/components/AnimeCharacter";
import MovieCard from "@/components/MovieCard";

export default async function Anime({ params }: { params: { slug: string } }) {
  const result = await getAnimeInfo(params.slug);
  let related = result.recommendations.slice(0,5);
  let cast = result.characters.slice(0, 8);
  const backdropImage = `url("${result.cover}")`;
  return (
    <main
      className="bg-cover bg-center bg-no-repeat sm:bg-cover h-[60vh] sm:h-[90vh] w-fit sm:w-full"
      style={{ backgroundImage: backdropImage }}
    >
      <Nav />
      <div className="ml-5 mt-3">
        <Link href={`/anime`}>
          <Button size="sm" variant="flat">
            <FaAngleLeft size={16} /> Back
          </Button>
        </Link>
      </div>
      <div className=" absolute top-[40%] sm:top-[65%]">
        <InfoCard result={result} type={"anime"} />
        <h1 className="text-xl pt-5 px-5">Description</h1>
        <p className="text-xs  pl-5">{result.description}</p>
        <h2 className="text-xl pt-5 pl-5">Casts:</h2>
        <div className="flex flex-wrap gap-2 m-5">
          {cast.map((c: any) => (
            <AnimeCharacter key={c.id} path={c.image} name={c.name.full} />
          ))}
        </div>
        <div>
          <h1 className="text-xl p-4">Trailer</h1>
          <iframe
            src={`https://youtube.com/embed/${result.trailer.id}`}
            className="border-slate-700 border-1 w-[21rem] h-[14rem] md:w-[62rem] md:h-[34rem] mx-auto rounded-3xl"
            allowFullScreen={true}
          ></iframe>
        </div>
        <div>
          <h1 className="text-xl p-4">You may also like</h1>

          <div className="flex flex-wrap gap-5 justify-around">
            {related.map((e: any) => (
              <MovieCard key={e.id} result={e} type={"anime"} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
