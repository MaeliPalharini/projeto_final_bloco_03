import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="w-full bg-[#0d2a47] text-[#f1cdc5] shadow-md">
            <div className="container mx-auto px-8">
                <div className="flex h-20 items-center">
                    <div className="flex-1">
                        <Link to="/" className="flex items-center gap-2">
                            <span className="text-2xl font-extrabold text-[#d9b2a9]">
                                ClickFarma
                            </span>
                        </Link>
                    </div>

                    <nav className="flex-1 flex justify-center">
                        <ul className="flex items-center gap-8 font-semibold text-lg">
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        `inline-block transform transition-transform duration-200 ease-out hover:scale-110 ${
                                            isActive ? "text-[#d9b2a9] font-bold" : "text-[#f1cdc5]"
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/categorias"
                                    className={({ isActive }) =>
                                        `inline-block transform transition-transform duration-200 ease-out hover:scale-110 ${
                                            isActive ? "text-[#d9b2a9] underline" : "text-[#f1cdc5]"
                                        }`
                                    }
                                >
                                    Categorias
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/categorias/novo"
                                    className={({ isActive }) =>
                                        `inline-block transform transition-transform duration-200 ease-out hover:scale-110 ${
                                            isActive ? "text-[#d9b2a9] underline" : "text-[#f1cdc5]"
                                        }`
                                    }
                                >
                                    Nova Categoria
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex-1 flex justify-end"></div>
                </div>
            </div>
        </header>
    );
}
