import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Navbar() {
    return (
        <header className="w-full bg-[#0d2a47] text-[#f1cdc5] shadow-md">
            <div className="container mx-auto px-8">
                <div className="flex h-32 items-center gap-10">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Logo ClickFarma"
                            className="h-30 object-contain"
                        />
                    </Link>

                    <nav>
                        <ul className="flex items-center gap-15 font-bold text-lg">
                            <li>
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) =>
                                        `inline-block transition-transform duration-200 hover:scale-110 ${
                                            isActive ? "text-[#d9b2a9]" : "text-[#f1cdc5]"
                                        }`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/categorias/novo"
                                    className={({ isActive }) =>
                                        `inline-block transition-transform duration-200 hover:scale-110 ${
                                            isActive ? "text-[#d9b2a9]" : "text-[#f1cdc5]"
                                        }`
                                    }
                                >
                                    Cadastrar Categoria
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/sobre"
                                    className={({ isActive }) =>
                                        `inline-block transition-transform duration-200 hover:scale-110 ${
                                            isActive ? "text-[#d9b2a9]" : "text-[#f1cdc5]"
                                        }`
                                    }
                                >
                                    Sobre nós
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/contato"
                                    className={({ isActive }) =>
                                        `inline-block transition-transform duration-200 hover:scale-110 ${
                                            isActive ? "text-[#d9b2a9]" : "text-[#f1cdc5]"
                                        }`
                                    }
                                >
                                    Contato
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
