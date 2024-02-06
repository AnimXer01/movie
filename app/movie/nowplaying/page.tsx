import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import MediaList from "@/components/MediaList";
import { NowPlayingMovie } from "@/utils/Fetcher";
import ExpandedList from "@/components/ExpandedList";



export default async function Home() {
  const nowPlaying = await NowPlayingMovie(1);
  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
      <ExpandedList heading="Now Playing Movies" results={nowPlaying} type={"movie"} />

    </main>
  );
}
