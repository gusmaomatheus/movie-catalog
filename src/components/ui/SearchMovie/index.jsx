import { useNavigate } from "react-router-dom";
import Button from "../Button";
import TextInput from "../TextInput";

export default function SearchMovie() {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    };
    return (
        <form className="flex flex-col gap-y-[32px]">
            <p className="text-black text-[32px] text-center mt-[32px] font-medium uppercase">search movie</p>
            <TextInput label="Movie id" placeholder="1" />
            <div className="flex gap-x-[16px] self-center">
                <Button color="#7dd3fc">Search</Button>
                <Button color="#fca5a5" onClick={navigateToHome}>
                    Cancel
                </Button>
            </div>
        </form>
    );
}
