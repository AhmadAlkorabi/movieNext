"use client";
import Pagination from "@/components/Pagination";
import { useGetMoviesQuery } from "./api/MovieApi";
import Card from "@/components/Card";
import { useState } from "react";
import Spinner from "@/components/Spinner";
export default function page({ searchParams }: { searchParams: { genre: string } }): JSX.Element {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const { data, isLoading } = useGetMoviesQuery({
    genre: searchParams.genre,
    page: pageNumber,
  });
  console.log(data);
  if (isLoading) return <div><Spinner/></div>;
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {data?.results.map((result: any) => (
          <Card result={result} />
        ))}
      </div>
      <Pagination page={pageNumber}
        onPageChange={setPageNumber}
      />
    </>
  );
}
