import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/details/${movie.id}`);
    };

    return (
        <div
            className="flex items-center px-[32px] w-[100%] h-[70px] gap-[32px] border-[1px] border-emerald-200 border-solid rounded-md hover:cursor-pointer hover:bg-emerald-50 transition duration-150 ease-linear hover:-translate-y-1"
            onClick={handleClick}
        >
            <p className="text-black text-[20px]">
                <span className="font-semibold">Id:</span> {movie.id}
            </p>
            <p className="text-black text-[20px]">
                <span className="font-semibold">Name:</span> {movie.name}
            </p>
        </div>
    );
}
