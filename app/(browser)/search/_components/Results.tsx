import { getSearch } from "@/lib/searchService";

import ResultCard, { ResultCardSkeleton } from "./ResultCard";
import { Skeleton } from "@/components/ui/skeleton";

interface ResultProps{
    term?:string;
}

const Results =async ({term } : ResultProps) => {

 const data = await getSearch(term)

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Results for term &quot;{term}&quot;
      </h2>
      {data.length === 0 && (
        <div>
            <p className="text-muted-foreground text-sm">No results found</p>
        </div>
      )}
      <div className="flex flex-col gap-y-4">
        {data.map((results)=>(
            <ResultCard data={results} key={results.id} />
        ))}
      </div>
    </div>
  );
};

export default Results;


export const ResultsSkeleton = () => {
    return (
      <div>
        <Skeleton className="h-8 w-[290px] mb-4" />
        <div className="flex flex-col gap-y-4">
          {[...Array(4)].map((_, i) => (
            <ResultCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  };