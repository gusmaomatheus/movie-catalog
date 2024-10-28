import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MovieContext } from "../../../contexts/MovieContext";

export default function MovieDetails() {
    const { movies } = useContext(MovieContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const movie = movies.find(m => m.id === id);

    const handleNavigateBack = () => {
        navigate("/");
    };

    return (
        <main className="flex flex-col place-self-center justify-self-center w-[900px] h-[400px] mt-[160px] shadow-sm border-[1px] border-solid border-gray-200">
            <p className="text-black text-[32px] text-center mt-[32px] font-medium">MOVIE DETAILS:</p>
            {movie ? (
                <div className="flex flex-col gap-y-[8px] ms-[48px] mt-[64px]">
                    <p className="text-black text-[20px]">
                        <span className="font-semibold">Name:</span> {movie.name}
                    </p>
                    <p className="text-black text-[20px]">
                        <span className="font-semibold">Gender:</span> {movie.gender}
                    </p>
                    <p className="text-black text-[20px]">
                        <span className="font-semibold">Year:</span> {movie.dateOfRelease}
                    </p>
                </div>
            ) : (
                <p className="text-red-500 text-center mt-[32px]">Movie not found</p>
            )}
            <button
                type="button"
                className="w-[180px] h-[40px] mt-[64px] bg-red-200 rounded-md text-white text-[20px] self-center transition duration-300 ease-in-out hover:bg-red-400 hover:scale-105"
                onClick={handleNavigateBack}
            >
                Back
            </button>
        </main>
    );
}
