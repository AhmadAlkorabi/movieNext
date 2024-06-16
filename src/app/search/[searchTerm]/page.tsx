'use client'
import { useGetMovieSearchQuery } from "@/app/api/MovieApi"
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import Spinner from "@/components/Spinner";
import { useState } from "react";

export default function page({ params }: { params: { searchTerm: string } }): JSX.Element {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const searchTerm = params.searchTerm;
  const { data, isLoading } = useGetMovieSearchQuery({
    search: searchTerm,
    page: pageNumber,
  });
  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {data?.results.map((result: any) => (
          <Card result={result} />
        ))}
      </div>
      <Pagination page={pageNumber} onPageChange={setPageNumber} />
    </>
  );
}
