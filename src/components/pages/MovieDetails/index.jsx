import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MovieContext } from "../../../contexts/MovieContext";
import Button from "../../ui/Button";

export default function MovieDetails() {
    const { movies } = useContext(MovieContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const movie = movies.find(m => m.id === id);

    const handleNavigateBack = () => {
        navigate("/");
    };

    return (
        <main className="flex flex-col place-self-center justify-self-center w-[800px] h-[330px] mt-[160px] gap-y-[32px] shadow-sm border-[1px] border-solid border-gray-200">
            <p className="text-black text-[32px] text-center mt-[32px] font-medium">MOVIE DETAILS:</p>
            {movie ? (
                <div className="flex flex-col gap-y-[8px] ms-[48px]">
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
            <Button color="#fca5a5" onClick={handleNavigateBack}>
                Back
            </Button>
        </main>
    );
}
