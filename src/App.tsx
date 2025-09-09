import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import Home from "./pages/Home.tsx";
import {Route, Routes} from "react-router-dom";

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categorias" element={<h1 className="p-8 text-2xl">Página de Categorias</h1>} />
                    <Route path="/categorias/novo" element={<h1 className="p-8 text-2xl">Cadastrar Nova Categoria</h1>} />
                    <Route path="*" element={<h1 className="p-8 text-2xl">Página não encontrada 😢</h1>} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
