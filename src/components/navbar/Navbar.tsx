import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png"; //

export default function Navbar() {
    return (
        <header className="w-full bg-[#0d2a47] text-[#f1cdc5] shadow-md">
            <div className="container mx-auto px-8">
                <div className="flex h-30 items-center">
                    <div className="flex-1">
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="Logo ClickFarma"
                                className="h-25 object-contain"
                            />
                        </Link>
                    </div>

                    <nav className="flex-1 flex">
                        <ul className="flex flex-1 justify-evenly items-center font-semibold text-lg">
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
                                    to="/categorias/novo"
                                    className={({ isActive }) =>
                                        `inline-block whitespace-nowrap transform transition-transform duration-200 ease-out hover:scale-110 ${
                                            isActive ? "text-[#d9b2a9] underline" : "text-[#f1cdc5]"
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
                                        `inline-block transform transition-transform duration-200 ease-out hover:scale-110 ${
                                            isActive ? "text-[#d9b2a9] underline" : "text-[#f1cdc5]"
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
                                        `inline-block transform transition-transform duration-200 ease-out hover:scale-110 ${
                                            isActive ? "text-[#d9b2a9] underline" : "text-[#f1cdc5]"
                                        }`
                                    }
                                >
                                    Contato
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
