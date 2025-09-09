import minhaImagem from "../assets/back1.png";
import { Link } from "react-router-dom";
import ListaCategorias from "../components/categoria/ListaCategorias.tsx";

function Home() {
    return (
        <>
            <div className="bg-[#0d2a47] flex justify-center">
                <div
                    className="container mx-auto px-4
                      grid grid-cols-1 md:grid-cols-2 gap-8
                      text-[#f1cdc5]
                      min-h-[50vh] md:min-h-[60vh]
                      items-center py-8"
                        >
                    <div className="flex flex-col gap-4 md:items-start items-center">
                        <h2 className="text-5xl font-bold text-center md:text-left text-[#d9b2a9]">
                            Bem-vinda ao ClickFarma!
                        </h2>
                        <p className="text-xl text-center md:text-left">
                            Gerencie suas categorias de forma simples e prática.
                        </p>

                        <div className="flex md:justify-start justify-center gap-4 mt-4">
                            <Link
                                to="/categorias"
                                className="bg-[#5a122e] hover:bg-[#7a1a40] transition-colors px-6 py-3 rounded-lg text-white font-semibold"
                            >
                                Ver Categorias
                            </Link>

                            <Link
                                to="/categorias/novo"
                                className="bg-[#d9b2a9] hover:bg-[#c5978a] transition-colors px-6 py-3 rounded-lg text-[#0d2a47] font-semibold"
                            >
                                Nova Categoria
                            </Link>
                        </div>
                    </div>
                    <div className="flex md:justify-end justify-center">
                        <img
                            src={minhaImagem}
                            alt="Imagem Página Home ClickFarma"
                            className="w-full max-w-[600px] h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
            <ListaCategorias />
        </>
    );
}

export default Home;
