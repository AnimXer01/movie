import { Button } from "@nextui-org/react";
import Tips from "@/components/Tips";
import { FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";
import Nav from "@/components/Nav";
import MoviePlayer from "@/components/MoviePlayer";
import { findMovie, getAnimeInfo, watchAnime } from "@/utils/Fetcher";

export default async function StreamMovies({ params }: { params: { slug: string } }) {

  const result = await findMovie(params.slug);
  // const tmdb = await getAnimeInfo(params.slug, "movie");
  // // console.log(tmdb);
  // const showId = tmdb.id;
  // const watchId = tmdb.episodeId;
  // const streamLink = await watchAnime(watchId, showId);
  // // console.log(streamLink);
  let title = result.title
  title = title.toLowerCase().replaceAll(" ","-")
  return (
    <div>
      <Nav />
      <div className="ml-6">
        <Link href={`/movie/${params.slug}`}>
          <Button size="sm" variant="flat">
            <FaAngleLeft size={16} /> Back
          </Button>
        </Link>
      </div>
     <MoviePlayer movieId={params.slug} movieName={title} />
      <div className="flex justify-center m-2">
        <Tips />
      </div>
    </div>
  );
}
