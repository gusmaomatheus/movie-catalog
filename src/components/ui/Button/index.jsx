export default function Button({
    children,
    color = "blue",
    disabled = false,
    onClick = () => {
        return;
    },
}) {
    return (
        <button
            type="button"
            className={`w-[120px] h-[40px] rounded-md text-white text-[18px] self-center transition duration-300 ease-in-out hover:scale-105`}
            style={{ backgroundColor: color }}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
