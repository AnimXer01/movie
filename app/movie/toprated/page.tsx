import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import { TopRatedMovie } from "@/utils/Fetcher";
import ExpandedList from "@/components/ExpandedList";



export default async function Home() {
  const topratedmovie = await TopRatedMovie();
  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
      <ExpandedList heading="Top Rated Movies" results={topratedmovie} type={"movie"} />

    </main>
  );
}
