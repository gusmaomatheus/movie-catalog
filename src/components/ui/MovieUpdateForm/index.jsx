import { useCallback, useEffect } from "react";
import DateInput from "../../ui/DateInput";
import TextInput from "../../ui/TextInput";

export default function MovieUpdateForm({ name, setName, gender, setGender, year, setYear, movie }) {
    useEffect(() => {
        setName(movie.name);
        setGender(movie.gender);
        setYear(movie.dateOfRelease);
    }, []);

    useEffect(() => {}, [name, gender, year]);

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

    return (
        <form className="flex flex-col gap-y-[64px] self-center">
            <div className="flex flex-col gap-y-[32px] mx-[64px]">
                <TextInput
                    label="Name"
                    placeholder="The Fast and The Furious"
                    value={name}
                    onChange={onChangeNameInput}
                />
                <TextInput label="Gender" placeholder="Action" value={gender} onChange={onChangeGenderInput} />
                <DateInput label="Year" value={year} onChange={onChangeYearInput} />
            </div>
        </form>
    );
}
