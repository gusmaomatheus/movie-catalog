import { useId } from "react";

export default function TextInput({ label, placeholder, value, onChange }) {
    const id = useId();

    return (
        <div className="flex flex-col relative">
            <label htmlFor={id} className="absolute top-[-10px] left-[12px] bg-white px-[4px] text-black text-[16px]">
                {label}
            </label>
            <input
                type="text"
                name={id}
                id={id}
                placeholder={placeholder}
                value={value}
                className="w-[360px] px-[12px] pt-[12px] pb-[4px] border-[1px] border-solid border-gray-300 rounded-md text-gray-600 text-[18px] focus:outline-none"
                onChange={event => onChange(event.target.value)}
            />
        </div>
    );
}
