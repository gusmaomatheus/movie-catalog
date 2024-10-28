import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    };

    return (
        <main className="mt-[128px] flex flex-col items-center gap-y-[64px]">
            <div>
                <p className="text-center text-[128px] text-emerald-400 font-extrabold uppercase">404</p>
                <p className="text-center text-[24px] text-emerald-400 font-medium uppercase">page not found</p>
            </div>
            <div className="place-items-center">
                <p className="text-center text-[20px] text-emerald-400 mb-[64px]">
                    The post or page that you are looking for either has just moved or doesn't exists in this server.
                </p>
                <button
                    type="button"
                    onClick={navigateToHome}
                    className="h-[40px] px-[16px] border-[1px] border-solid border-emerald-400 text-emerald-400 rounded-md text-[18px] self-center transition duration-300 ease-in-out hover:scale-105 hover:text-white hover:bg-emerald-400"
                >
                    Returns to Home Page
                </button>
            </div>
        </main>
    );
}
