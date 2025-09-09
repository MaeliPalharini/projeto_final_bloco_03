import axios from "axios";
import type Categoria from "../models/Categoria.ts";


const api = axios.create({
    baseURL: "http://localhost:4000"
});

export const buscarCategorias = async () => {
    const resposta = await api.get<Categoria[]>("/categorias");
    return resposta.data;
};

export const buscarCategoriasPorNome = async (nome: string) => {
    const resposta = await api.get<Categoria[]>(`/categorias/nome/${nome}`);
    return resposta.data;
};

export const buscarCategoriaPorId = async (id: number) => {
    const resposta = await api.get<Categoria>(`/categorias/${id}`);
    return resposta.data;
};

export const criarCategoria = async (categoria: Omit<Categoria, "id">) => {
    const resposta = await api.post("/categorias", categoria);
    return resposta.data;
};

export const atualizarCategoria = async (id: number, categoria: Categoria) => {
    const resposta = await api.put(`/categorias/${id}`, categoria);
    return resposta.data;
};

export const deletarCategoria = async (id: number) => {
    await api.delete(`/categorias/${id}`);
};
