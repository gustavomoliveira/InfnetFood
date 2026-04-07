import { createContext } from "react";
import { produtos } from "../data/produtos";
import { categorias } from "../data/categorias";
import UseFetchMultiplo from "../hooks/UseFetchMultiplo";

export const ImagensContext = createContext();

export default function ImagensProvider({ children }) {
    const { imagens: imagensProdutos, loading: loadingProdutos } = UseFetchMultiplo(produtos);
    const { imagens: imagensCategorias, loading: loadingCategorias } = UseFetchMultiplo(categorias);

    const loading = loadingProdutos || loadingCategorias;

    return (
        <ImagensContext.Provider value={{ imagensProdutos, imagensCategorias, loading }}>
            {children}
        </ImagensContext.Provider>
    );
}