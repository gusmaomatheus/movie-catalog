import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../../contexts/MovieContext";
import Button from "../Button";
import TextInput from "../TextInput";

export default function SearchMovie({ setMovie, isSearchingMovie, setIsSearchingMovie }) {
    const navigate = useNavigate();

    const { movies } = useContext(MovieContext);
    const [movieId, setMovieId] = useState("");

    const findMovie = () => {
        if (!movieId) return;

        const movie = movies.find(movie => movie.id == movieId);

        setMovie(movie ? movie : null);
        setIsSearchingMovie(true);
        onChangeMovieId("");
    };

    const onChangeMovieId = value => {
        setMovieId(value);
    };

    const navigateToHome = () => {
        navigate("/");
        setIsSearchingMovie(false);
        setMovieId("");
        setMovie(null);
    };

    return (
        <form className="flex flex-col gap-y-[32px]">
            <p className="text-black text-[32px] text-center mt-[32px] font-medium uppercase">search movie</p>
            <TextInput label="Movie id" placeholder="1" value={movieId} onChange={onChangeMovieId} />
            <div className="flex gap-x-[16px] self-center">
                <Button color="#7dd3fc" disabled={isSearchingMovie} onClick={findMovie}>
                    Search
                </Button>
                <Button color="#fca5a5" onClick={navigateToHome}>
                    Cancel
                </Button>
            </div>
        </form>
    );
}
