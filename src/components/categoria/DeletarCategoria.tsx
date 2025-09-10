import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../models/Categoria.ts";
import { buscarCategoriaPorId, deletarCategoria } from "../../services/Services.ts";
import { ToastAlerta } from "../../utils/ToastAlerta.ts";

export default function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>();
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            buscarCategoriaPorId(Number(id)).then((data) => setCategoria(data));
        }
    }, [id]);

    async function handleDelete() {
        try {
            if (id) {
                setIsLoading(true);
                await deletarCategoria(Number(id));
                ToastAlerta("Categoria apagada com sucesso!", "sucesso");

                setTimeout(() => {
                    setIsLoading(false);
                    navigate("/categorias");
                }, 1500);
            }
        } catch (error) {
            ToastAlerta("Erro ao deletar a categoria.", "erro");
            setIsLoading(false);
        }
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-[#0d2a47]">Deletar Categoria</h1>

            {categoria && (
                <div className="bg-[#f1cdc5] border border-[#d9b2a9] p-6 rounded-lg shadow-md">
                    <p className="text-lg text-[#0d2a47]">
                        Tem certeza que deseja deletar a categoria{" "}
                        <strong className="text-[#5a122e]">{categoria.nome}</strong>?
                    </p>

                    <div className="flex gap-4 mt-6">
                        <button
                            onClick={handleDelete}
                            disabled={isLoading}
                            className={`px-5 py-2 rounded-lg text-white transition ${
                                isLoading
                                    ? "bg-gray-400 cursor-not-allowed"
                                    : "bg-[#5a122e] hover:bg-red-500"
                            }`}
                        >
                            {isLoading ? "Excluindo..." : "Confirmar"}
                        </button>

                        <button
                            onClick={() => navigate("/categorias")}
                            disabled={isLoading}
                            className="px-5 py-2 bg-[#0d2a47] text-white rounded-lg hover:bg-[#12365f] transition"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
