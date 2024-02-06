import ExpandedList from "@/components/ExpandedList";
import Footer from "@/components/Footer";
import MediaList from "@/components/MediaList";
import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import { getSearchResults, searchAnime } from "@/utils/Fetcher";

export default async function SearchResult({
  params,
}: {
  params: { query: string };
}) {
  const data = await searchAnime(params.query);
  let searchValue = params.query;
  searchValue = searchValue.replaceAll("%20", " ");
  return (
    <main>
      <SideBar />
      <Nav />
      <div className="p-5 md:ml-20">
        <ExpandedList
          heading={`Search Results For ${searchValue}`}
          results={data}
          type="anime"
        />
        <Footer/>
      </div>
    </main>
  );
}
