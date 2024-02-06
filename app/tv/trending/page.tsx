import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import MediaList from "@/components/MediaList";
import { TrendingTvSeries } from "@/utils/Fetcher";
import ExpandedList from "@/components/ExpandedList";

export default async function Home() {
  const trendingTv = await TrendingTvSeries();
  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
      <ExpandedList heading="Trending Tv Shows" results={trendingTv} type={"tv"} />
    </main>
  );
}
