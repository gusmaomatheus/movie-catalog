export default function Button({
    children,
    color = "blue",
    onClick = () => {
        return;
    },
}) {
    return (
        <button
            type="button"
            className={`w-[180px] h-[40px] mt-[64px] rounded-md text-white text-[20px] self-center transition duration-300 ease-in-out hover:scale-105`}
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
