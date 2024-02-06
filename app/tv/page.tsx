import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import MediaList from "@/components/MediaList";
import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import {
  AiringTvSeries,
  TopRatedTvSeries,
  TrendingTvSeries,
  getTVByGenre,
} from "@/utils/Fetcher";

export default async function TVPage() {
  const airingTv = await AiringTvSeries();
  const trendingTv = await TrendingTvSeries();
  const topratedTv = await TopRatedTvSeries();
  const crimeTv = await getTVByGenre("80");
  const documentTv = await getTVByGenre("99");
  const actionTv = await getTVByGenre("10759");
  const dramatv = await getTVByGenre("18");
  return (
    <main>
      <SideBar />
      <Nav />

      <div className="p-5 md:ml-20">
        <HeroSlider results={trendingTv} type={"tv"}/>
        <MediaList
          header="Top-Rated Tv Series"
          expand={"tv/toprated"}
          results={topratedTv}
          type={"tv"}
        />
        <MediaList
          header="Crime Tv Series"
          results={crimeTv}
          type={"tv"}
        />
        <MediaList
          header="Action Tv Series"
          results={actionTv}
          type={"tv"}
        />
        <MediaList
          header="Drama Tv Series"
          results={dramatv}
          type={"tv"}
        />
        <MediaList
          header="Airing Tv Series"
          expand={"tv/airing"}
          results={airingTv}
          type={"tv"}
        />
        <MediaList
          header="Documentary Tv Series"
          results={documentTv}
          type={"tv"}
        />
        <Footer />
      </div>
    </main>
  );
}
