import { useId } from "react";

export default function DateInput({ label, ref }) {
    const id = useId();

    const handleInputChange = event => {
        ref.current.value = event.target.value;
    };

    return (
        <div className="flex flex-col relative">
            <label htmlFor={id} className="absolute top-[-10px] left-[12px] bg-white px-[4px] text-black text-[16px]">
                {label}
            </label>
            <input
                type="date"
                name={id}
                id={id}
                ref={ref}
                className="w-[360px] px-[12px] pt-[12px] pb-[4px] border-[1px] border-solid border-gray-300 rounded-md text-gray-600 text-[18px] focus:outline-none"
                onChange={handleInputChange}
            />
        </div>
    );
}
