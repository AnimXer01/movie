import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import MediaList from "@/components/MediaList";
import { AiringTvSeries } from "@/utils/Fetcher";
import ExpandedList from "@/components/ExpandedList";

export default async function Home() {
  const airingTv = await AiringTvSeries();
  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
      <ExpandedList heading="Airing Tv Shows" results={airingTv} type={"tv"} />
    </main>
  );
}
