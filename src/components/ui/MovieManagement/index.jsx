import { useState } from "react";
import Swal from "sweetalert2";
import { api } from "../../../services/MovieService";
import Button from "../Button";

export default function MovieManagement({ type = "update", movie, setIsSearchingMovie }) {
    const [isExecuting, setIsExecuting] = useState(false);

    const updateMovie = () => {};

    async function deleteMovie() {
        setIsExecuting(true);
        try {
            const response = await api.delete(`/${movie.id}`);

            if (response.status === 200) {
                Swal.fire({
                    toast: true,
                    position: "bottom-end",
                    icon: "success",
                    text: "Movie deleted successfully",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
                setIsSearchingMovie(false);
            }
        } catch (error) {
            Swal.fire({
                toast: true,
                position: "bottom-end",
                icon: "error",
                text: error.message,
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            });
        } finally {
            setIsExecuting(false);
        }
    }

    const cancel = () => {
        setIsSearchingMovie(false);
    };

    return (
        <main className="flex flex-col place-self-center justify-self-center w-[800px] h-[330px] gap-y-[32px] shadow-sm border-[1px] border-solid border-gray-200">
            <p className="text-black text-[32px] text-center mt-[32px] font-medium">
                {type === "update" ? "UPDATE MOVIE" : "DELETE MOVIE"}
            </p>
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
            <div className="flex gap-x-[16px] self-center">
                <Button color="#6ee7b7" disabled={isExecuting} onClick={type === "update" ? updateMovie : deleteMovie}>
                    {type === "update" ? "Update" : "Delete"}
                </Button>
                <Button color="#fca5a5" disabled={isExecuting} onClick={cancel}>
                    Cancel
                </Button>
            </div>
        </main>
    );
}
