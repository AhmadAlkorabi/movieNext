'use client'
import { useGetMovieByIdQuery } from "@/app/api/MovieApi" 
import Image from "next/image";
import Spinner from "@/components/Spinner";
export default function page({ params }: {
  params: {
    id: string;
    };
}): JSX.Element {
  const movieId = params.id;
  const { data: movie, isLoading } = useGetMovieByIdQuery({
    id: movieId,
  });

 if (isLoading) return <div><Spinner/></div>;
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%" }}
        ></Image>
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie?.title || movie?.name}
          </h2>
          <p className="text-lg mb-3">{movie?.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie?.release_date || movie?.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie?.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}