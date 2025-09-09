import { useEffect, useState } from "react";
import CardCategoria from "./CardCategoria";
import type Categoria from "../../models/Categoria.ts";
import { buscarCategorias, buscarCategoriasPorNome } from "../../services/Services";

export default function ListaCategorias() {
    const [busca, setBusca] = useState("");
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function carregarCategorias(filtro?: string) {
        try {
            if (filtro && filtro.trim()) {
                const resultado = await buscarCategoriasPorNome(filtro);
                setCategorias(resultado);
            } else {
                const resposta = await buscarCategorias();
                setCategorias(resposta);
            }
        } catch (error) {
            console.error("Erro ao buscar categorias", error);
        }
    }

    useEffect(() => {
        carregarCategorias();
    }, []);

    return (
        <section className="bg-[#f1cdc5] py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-[#0d2a47] mb-8">Categorias</h2>

                <div className="flex gap-2 mb-6">
                    <input
                        type="text"
                        placeholder="Buscar categoria por nome..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        className="border p-2 rounded w-full"
                    />
                    <button
                        onClick={() => carregarCategorias(busca)}
                        className="bg-[#5a122e] text-white px-4 py-2 rounded hover:bg-[#7a1a40] transition"
                    >
                        Buscar
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorias.length > 0 ? (
                        categorias.map((categoria: Categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))
                    ) : (
                        <p className="text-[#5a122e]">Nenhuma categoria cadastrada ainda.</p>
                    )}
                </div>
            </div>
        </section>
    );
}
