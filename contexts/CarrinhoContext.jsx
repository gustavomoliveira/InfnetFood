import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export default function CarrinhoProvider({ children }) {
    const [carrinho, setCarrinho] = useState([]);

    function addItem(novoItem) {
        setCarrinho([...carrinho, novoItem]);
    }

    function removeItem(novoItem) {
        setCarrinho(carrinho.filter((item) => item.id !== novoItem.id));
    }

    function atualizarQtde(itemAtualizado) {
        setCarrinho(carrinho.map(
            (item) => item.id === itemAtualizado.id ? {...item, quantidade: itemAtualizado.quantidade } : item)
        );
    }

    function gerarNumeroPedido() {
        return Math.floor(Math.random() * 900000) + 100000;
    }

    function limparCarrinho() {
        setCarrinho([]);
    }

    return (
        <CarrinhoContext.Provider value={{ carrinho, addItem, removeItem, atualizarQtde, gerarNumeroPedido, limparCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    )
}