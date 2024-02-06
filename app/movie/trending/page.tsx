import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import { TrendingMovie } from "@/utils/Fetcher";
import ExpandedList from "@/components/ExpandedList";


export default async function Home() {
  const trendingPlaying = await TrendingMovie();
  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
      <ExpandedList heading="Trending Movies" results={trendingPlaying} type={"movie"} />
     
    </main>
  );
}