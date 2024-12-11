import { getSearch } from "@/lib/searchService";
import { result } from "lodash";
import ResultCard from "./ResultCard";

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
        {data.map((result)=>(
            <ResultCard data={result} key={result.id} />
        ))}
      </div>
    </div>
  );
};

export default Results;


export const ResultsSkeleton = ()=>{
    return (
        <div className=""></div>
    )
}