import ExpandedList from "@/components/ExpandedList";
import Footer from "@/components/Footer";
import MediaList from "@/components/MediaList";
import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import { getSearchResults } from "@/utils/Fetcher";

export default async function SearchResult({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getSearchResults(params.slug);
  let searchValue = params.slug;
  searchValue = searchValue.replaceAll("%20", " ");
  return (
    <main>
      <SideBar />
      <Nav />
      <div className="p-5 md:ml-20">
        <ExpandedList
          heading={`Search Results For ${searchValue}`}
          results={data}
        />
        <Footer/>
      </div>
    </main>
  );
}
