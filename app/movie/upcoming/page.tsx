import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import { UpcomingMovie } from "@/utils/Fetcher";
import ExpandedList from "@/components/ExpandedList";



export default async function Home() {
  const upcomingMovie = await UpcomingMovie(1);
  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
      <ExpandedList heading="Up Coming Movies" results={upcomingMovie} type={"movie"} />

    </main>
  );
}
