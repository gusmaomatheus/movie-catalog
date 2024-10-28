import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { api } from "../../../services/MovieService";
import Button from "../../ui/Button";
import DateInput from "../../ui/DateInput";
import TextInput from "../../ui/TextInput";

export default function CreateMovie() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [year, setYear] = useState("");
    const [isSubmiting, setIsSubmiting] = useState(false);

    async function add() {
        setIsSubmiting(true);
        try {
            const data = {
                name: name,
                gender: gender,
                dateOfRelease: year,
            };

            if (!isValid()) {
                Swal.fire({
                    toast: true,
                    position: "bottom-end",
                    icon: "error",
                    text: "Invalid form information",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });

                return;
            }

            const response = await api.post("", data);

            if (response.status === 201) {
                Swal.fire({
                    toast: true,
                    position: "bottom-end",
                    icon: "success",
                    text: "Movie registered successfully",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
            }

            navigateToHome();
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
            setIsSubmiting(false);
        }
    }

    const navigateToHome = () => {
        navigate("/");
    };

    const onChangeNameInput = useCallback(
        value => {
            setName(value);
        },
        [name]
    );

    const onChangeGenderInput = useCallback(
        value => {
            setGender(value);
        },
        [gender]
    );

    const onChangeYearInput = useCallback(
        value => {
            setYear(value);
        },
        [gender]
    );

    const isValid = () => {
        if (!name) return false;
        if (!gender) return false;
        if (!year) return false;

        return true;
    };

    return (
        <main className="flex justify-center">
            <form className="mt-[64px] border-[1px] border-gray-300 rounded-md shadow-md shadow-gray-200 flex flex-col gap-y-[64px]">
                <p className="text-black text-[32px] text-center mt-[32px] font-medium">REGISTER MOVIE</p>
                <div className="flex flex-col gap-y-[32px] mx-[64px]">
                    <TextInput
                        label="Name"
                        placeholder="The Fast and The Furious"
                        value={name}
                        onChange={onChangeNameInput}
                    />
                    <TextInput label="Gender" placeholder="Action" value={gender} onChange={onChangeGenderInput} />
                    <DateInput label="Year" value={year} onChange={onChangeYearInput} />
                    <div className="self-center flex gap-x-[24px] mb-[32px]">
                        <Button color="#fca5a5" onClick={navigateToHome}>
                            Back
                        </Button>
                        <Button color="#6ee7b7" disabled={isSubmiting} onClick={add}>
                            Submit
                        </Button>
                    </div>
                </div>
            </form>
        </main>
    );
}
