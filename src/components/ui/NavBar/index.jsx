import NavLink from "../NavLink";

export default function NavBar() {
    return (
        <nav className="flex justify-between my-[32px]">
            <div>
                <p className="text-[24px] text-emerald-400 uppercase">Movies</p>
            </div>
            <div className="flex gap-[32px]">
                <NavLink path="/">Home</NavLink>
                <NavLink path="/create">Create</NavLink>
                <NavLink path="/update">Update</NavLink>
                <NavLink path="/delete">Delete</NavLink>
            </div>
        </nav>
    );
}
