import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../../contexts/MovieContext";
import { api } from "../../../services/MovieService";
import MovieCard from "../../ui/MovieCard";

export default function Home() {
    const { movies, setMovies } = useContext(MovieContext);
    const [isDataFetched, setIsDataFetched] = useState(false);

    useEffect(() => {
        fetchAll();
    }, []);

    async function fetchAll() {
        setIsDataFetched(true);

        try {
            const response = await api.get();

            if (response.data) {
                setMovies(response.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsDataFetched(false);
        }
    }

    return (
        <main className="flex flex-col gap-y-[64px] mb-[32px]">
            <p className="text-emerald-400 text-[48px] text-center upperace">MOVIES CATALOG</p>
            <div className="flex flex-col items-center w-[100%] px-[256px] gap-y-[16px] ">
                {isDataFetched ? (
                    <FontAwesomeIcon className="text-emerald-400 mt-[120px]" icon={faCircleNotch} spin size="2xl" />
                ) : movies.length > 0 ? (
                    movies.map(movie => {
                        return <MovieCard key={movie.id} movie={movie} />;
                    })
                ) : (
                    <p className="text-emerald-400 text-[24px] w-[100%] text-center">Nenhum filme encontrado.</p>
                )}
            </div>
        </main>
    );
}
