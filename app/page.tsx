import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import MediaList from "@/components/MediaList";
import { FaDiscord, FaHouse } from "react-icons/fa6";

import {
  TrendingTvSeries,
  NowPlayingMovie,
  TrendingMovie,
  AiringTvSeries,
  TopRatedTvSeries,
  getMovieByGenre,
  getTVByGenre,
} from "@/utils/Fetcher";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import HomeNav from "@/components/HomeNav";
import { Button } from "@nextui-org/react";
import Link from "next/link";


export default async function Home() {
  const nowPlaying = await NowPlayingMovie(1);
  const trendingMovie = await TrendingMovie();
  const airingTv = await AiringTvSeries();
  const trendingTv = await TrendingTvSeries();
  const topratedTv = await TopRatedTvSeries();
  const actionMovie = await getMovieByGenre("28");
  const horrorMovie = await getMovieByGenre("27");
  const thrillerMovie = await getMovieByGenre("53");
  const actionTv = await getTVByGenre("10759");
  return (
    <main>
      <SideBar />
      <HomeNav />
      <div className="flex justify-center mt-2">
        <SearchBar />

      </div>
      <div className="p-5 md:ml-20">
        
        <MediaList
          header="Now Playing Movies"
          expand={"movie/nowplaying"}
          results={nowPlaying}
          type={"movie"}
        />
        <MediaList
          header="Trending Movies"
          expand={"movie/trending"}
          results={trendingMovie}
          type="movie"
        />
        <MediaList
          header="Trending Tv Series"
          expand={"tv/trending"}
          results={trendingTv}
          type="tv"
        />
        <MediaList
          header="Top Rated Tv Series"
          expand={"tv/toprated"}
          results={topratedTv}
          type="tv"
        />
        <MediaList
          header="Action Tv Series"
          results={actionTv}
          type="tv"
        />
        
        <MediaList
          header="Horror Movies"
          results={horrorMovie}
          type={"movie"}
        />
        <MediaList
          header="Thriller Movies"
          results={thrillerMovie}
          type={"movie"}
        />
        <MediaList
          header="Action Movies"
          results={actionMovie}
          type={"movie"}
        />

        <Footer />
      </div>
    </main>
  );
}
