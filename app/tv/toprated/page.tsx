import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import { TopRatedTvSeries } from "@/utils/Fetcher";
import ExpandedList from "@/components/ExpandedList";

export default async function Home() {
  const topratedTv = await TopRatedTvSeries();
  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
      <ExpandedList heading="Top Rated Tv Shows" results={topratedTv} type={"tv"} />
    </main>
  );
}
