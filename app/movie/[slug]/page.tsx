import InfoCard from "@/components/InfoCard";
import Nav from "@/components/Nav";
import ProfileCard from "@/components/ProfileCard";
import {
  findMovie,
  getMovieCasts,
  getTrailerMovie,
  relatedMovies,
} from "@/utils/Fetcher";
const TMDB_IMAGE_ENDPOINT = "https://image.tmdb.org/t/p/original";

import { FaAngleLeft } from "react-icons/fa6";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import MovieCard from "@/components/MovieCard";

export default async function Movie({ params }: { params: { slug: string } }) {
  const result = await findMovie(params.slug);
  var cast = await getMovieCasts(params.slug);
  var related = await relatedMovies(params.slug);
  var trailer = await getTrailerMovie(params.slug);
  trailer = trailer.filter((t: any) => t.type === "Trailer");
  related = related.slice(0, 5);
  cast = cast.slice(0, 8);

  const backdropImage = `url("${TMDB_IMAGE_ENDPOINT}${result.backdrop_path}")`;
  return (
    <main
      className="bg-cover sm:bg-right-top bg-center bg-no-repeat sm:bg-cover h-[60vh] sm:h-[90vh] w-fit sm:w-full "
      style={{ backgroundImage: backdropImage }}
    >
      <Nav />
      <div className="ml-5 mt-3">
        <Link href={`/movie`}>
          <Button size="sm" variant="flat">
            <FaAngleLeft size={16} /> Back
          </Button>
        </Link>
      </div>
      <div className=" absolute top-[40%] sm:top-[65%]">
        <InfoCard result={result} />
        <h1 className="text-xl pt-5 px-5">Description</h1>
        <p className="text-xs  pl-5">{result.overview}</p>
        <h2 className="text-xl pt-5 pl-5">Casts:</h2>
        <div className="flex flex-wrap gap-2 m-5">
          {cast.map((c: any) => (
            <ProfileCard key={c.id} path={c.profile_path} name={c.name} />
          ))}
        </div>
        <div>
          <h1 className="text-xl p-4">Trailer</h1>
          {trailer.length > 0 && (<iframe
            src={`https://youtube.com/embed/${trailer[0].key}`}
            className="border-slate-700 border-1 w-[21rem] h-[14rem] md:w-[62rem] md:h-[34rem] mx-auto rounded-3xl"
            allowFullScreen={true}
          ></iframe>)}
          
        </div>
        <div>
          <h1 className="text-xl p-4">You may also like</h1>

          <div className="flex flex-wrap gap-5 justify-around">
            {related.map((e: any) => (
              <MovieCard key={e.id} result={e} type={"movie"} />
            ))}
          </div>
        </div>
        
      </div>
    </main>
  );
}
