import EpisodeCard from "@/components/EpisodeCard";
import Pagination from "@/components/Pagination";
import Nav from "@/components/Nav";
import { SeasonDetails, findTV } from "@/utils/Fetcher";

export default async function Season({
  params,
}: {
  params: { slug: string; id: string };
}) {
  const tv = await findTV(params.slug);
  const seasons = tv.number_of_seasons;
  let episodes = await SeasonDetails(params.slug, params.id);


  return (
    <div className="w-full overflow-hidden">
      <Nav />
      <div>
        <Pagination
          totalPages={seasons}
          tvId={params.slug}
          currentPage={params.id}
        />
      </div>
      <div className="grid grid-cols-2">
        {episodes.map((e: any) => (
          <EpisodeCard
            key={e.id}
            result={e}
            current={params.id}
            idx={params.slug}
          />
        ))}
      </div>
    </div>
  );
}
