import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {atualizarCategoria, buscarCategoriaPorId, criarCategoria} from "../../services/Services.ts";
import type Categoria from "../../models/Categoria.ts";


export default function FormCategoria() {
    const [categoria, setCategoria] = useState<Omit<Categoria, "id">>({
        nome: "",
        descricao: ""
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            buscarCategoriaPorId(Number(id)).then((data) =>
                setCategoria({ nome: data.nome, descricao: data.descricao })
            );
        }
    }, [id]);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;
        setCategoria({
            ...categoria,
            [name]: value,
        });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (id) {
            await atualizarCategoria(Number(id), { id: Number(id), ...categoria });
        } else {
            await criarCategoria(categoria);
        }

        navigate("/categorias");
    }

    return (
        <div className="container mx-auto p-10">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto">
                <h1 className="text-2xl font-bold mb-6 text-[#0d2a47]">
                    {id ? "Editar Categoria" : "Cadastrar Categoria"}
                </h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="nome"
                        value={categoria.nome}
                        onChange={handleChange}
                        placeholder="Nome"
                        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a122e]"
                        required
                    />
                    <textarea
                        name="descricao"
                        value={categoria.descricao}
                        onChange={handleChange}
                        placeholder="Descrição"
                        rows={3}
                        className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5a122e]"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full px-4 py-3 bg-[#5a122e] text-white rounded-lg font-semibold hover:bg-[#7a1a40] transition-colors"
                    >
                        Salvar
                    </button>
                </form>
            </div>
        </div>
    );
}
