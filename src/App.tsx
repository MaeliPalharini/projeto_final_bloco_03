import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import Home from "./pages/Home.tsx";
import {Route, Routes} from "react-router-dom";
import FormCategoria from "./components/categoria/FormCategoria.tsx";
import DeleteCategoria from "./components/categoria/DeletarCategoria.tsx";
import ListaCategorias from "./components/categoria/ListaCategorias.tsx";

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categorias" element={<ListaCategorias />} />
                    <Route path="/categorias/novo" element={<FormCategoria />} />
                    <Route path="/categorias/editar/:id" element={<FormCategoria />} />
                    <Route path="/categorias/deletar/:id" element={<DeleteCategoria />} />
                    <Route path="*" element={<h1 className="p-8 text-2xl">Página não encontrada 😢</h1>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
