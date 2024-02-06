import MovieCard from "./MovieCard";

export default function ExpandedList({ heading, results, type }: any) {
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">{heading}</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 h-max w-fit m-2">
        {results.map((result: any) => (
          <MovieCard result={result} key={result.id} type={type} />
        ))}
      </section>
    </main>
  );
}
