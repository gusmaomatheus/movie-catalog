import Button from "../Button";

export default function MovieNotFound() {
    return (
        <div className="flex flex-col items-center bg-red-100 gap-y-[32px] border-[1px] border-solid border-red-200 rounded-md">
            <div className="flex flex-col mx-[32px] my-[32px] place-items-center gap-y-[32px]">
                <p className="text-center text-red-600 text-[28px]">Movie not found.</p>
                <Button color="#fca5a5">Try Again</Button>
            </div>
        </div>
    );
}
