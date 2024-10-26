import NavLink from "../NavLink";

export default function NavBar() {
    return (
        <nav className="flex justify-between my-[32px]">
            <div>
                <p className="text-[24px] text-emerald-400 uppercase">Movies</p>
            </div>
            <div className="flex gap-[32px]">
                <NavLink path="/create">Criar</NavLink>
                <NavLink path="/update">Alterar</NavLink>
                <NavLink path="/delete">Remover</NavLink>
            </div>
        </nav>
    );
}
