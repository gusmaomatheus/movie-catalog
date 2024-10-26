import { Link } from "react-router-dom";

export default function NavLink({ children = "NavLink", path = "" }) {
    return (
        <Link
            to={path}
            className="text-emerald-400 text-[22px] uppercase transition-all ease-linear duration-300 hover:scale-110 hover:underline underline-offset-4"
        >
            {children}
        </Link>
    );
}
