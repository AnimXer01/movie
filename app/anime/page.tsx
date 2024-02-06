import AniSearchBar from "@/components/AniSearchBar";
import Footer from "@/components/Footer";
import HomeNav from "@/components/HomeNav";
import MediaList from "@/components/MediaList";
import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import { getAnimePopular, getAnimeTrending } from "@/utils/Fetcher";

export default async function MoviePage() {
  const trendingAnime = await getAnimeTrending();
  const popularAnime = await getAnimePopular();
  return (
    <main>
      <SideBar />
      <HomeNav />
      <div className="flex justify-center mt-2">
        <AniSearchBar />
      </div>
      <div className="p-5 md:ml-20">
        <MediaList
          header="Trending Anime"
          expand={"#"}
          results={trendingAnime}
          type={"anime"}
        />
        <MediaList
          header="Popular Anime"
          expand={"#"}
          results={popularAnime}
          type={"anime"}
        />
        
        <Footer />
      </div>
    </main>
  );
}
