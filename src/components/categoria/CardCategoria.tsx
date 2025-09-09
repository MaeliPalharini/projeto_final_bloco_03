
import { Link } from "react-router-dom";
import type Categoria from "../../models/Categoria.ts";

interface Props {
    categoria: Categoria;
}

export default function CardCategoria({ categoria }: Props) {
    return (
        <div className="bg-[#f1cdc5] p-6 rounded-lg shadow-md border border-[#d9b2a9]">
            <h3 className="text-lg font-bold text-[#0d2a47]">{categoria.nome}</h3>
            <p className="text-[#5a122e] mb-4">{categoria.descricao}</p>

            <div className="flex gap-3">
                <Link
                    to={`/categorias/editar/${categoria.id}`}
                    className="bg-[#0d2a47] text-[#f1cdc5] px-4 py-2 rounded-md hover:bg-[#163b63] transition"
                >
                    Editar
                </Link>
                <Link
                    to={`/categorias/deletar/${categoria.id}`}
                    className="bg-[#5a122e] text-[#f1cdc5] px-4 py-2 rounded-md hover:bg-[#7a1a40] transition"
                >
                    Deletar
                </Link>
            </div>
        </div>
    );
}

