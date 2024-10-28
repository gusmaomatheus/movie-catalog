import { useState } from "react";
import MovieManagement from "../../ui/MovieManagement";
import MovieNotFound from "../../ui/MovieNotFound";
import SearchMovie from "../../ui/SearchMovie";

export default function UpdateMovie() {
    const [movie, setMovie] = useState(null);
    const [isSearchingMovie, setIsSearchingMovie] = useState(false);

    return (
        <main className="flex flex-col items-center">
            <SearchMovie
                setMovie={setMovie}
                isSearchingMovie={isSearchingMovie}
                setIsSearchingMovie={setIsSearchingMovie}
            />
            <div className="mt-[64px]">
                {isSearchingMovie ? (
                    movie ? (
                        <MovieManagement type="update" movie={movie} setIsSearchingMovie={setIsSearchingMovie} />
                    ) : (
                        <MovieNotFound setIsSearchingMovie={setIsSearchingMovie} />
                    )
                ) : (
                    ""
                )}
            </div>
        </main>
    );
}
