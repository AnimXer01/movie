import Footer from "@/components/Footer";
import HeroCard from "@/components/HeroCard";
import HeroSlider from "@/components/HeroSlider";
import MediaList from "@/components/MediaList";
import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import {
  NowPlayingMovie,
  TopRatedMovie,
  TrendingMovie,
  UpcomingMovie,
  getMovieByGenre,
} from "@/utils/Fetcher";

export default async function MoviePage() {
  const nowPlaying = await NowPlayingMovie(1);
  const trendingMovie = await TrendingMovie();
  const popularMovie = await TopRatedMovie();
  const upcomingMovie = await UpcomingMovie();
  const actionMovie = await getMovieByGenre("28");
  const horrorMovie = await getMovieByGenre("27");
  const thrillerMovie = await getMovieByGenre("53");
  return (
    <main>
      <SideBar />
      <Nav />
      <div className="p-5 md:ml-20">
      <HeroSlider results={trendingMovie} type={"movie"}/>
        <MediaList
          header="Now Playing Movies"
          expand={"movie/nowplaying"}
          results={nowPlaying}
          type={"movie"}
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
        <MediaList
          header="Top-Rated Movies"
          expand={"movie/toprated"}
          results={popularMovie}
          type={"movie"}
        />
        <MediaList
          header="UpComing Movies"
          expand={"movie/upcoming"}
          results={upcomingMovie}
          type={"movie"}
        />

        <Footer />
      </div>
    </main>
  );
}
