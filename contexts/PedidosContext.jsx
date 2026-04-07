import { createContext, useState } from "react";
import { pedidos } from "../data/pedidos";

export const PedidosContext = createContext();

export default function PedidosProvider({ children })  {
    const [historicoPedidos, setHistoricoPedidos] = useState(pedidos);

    function montarPedido(item, total) {
       return {
            id: historicoPedidos.length + 1,
            restaurante: "InfnetFood",
            itens: item.map(p => p.nome),
            total: total,
            status: "Preparando",
            data: new Date().toLocaleDateString("pt-BR")
        }
    }

    function addPedido(item, total) {
        setHistoricoPedidos([...historicoPedidos, montarPedido(item, total)]);
    }

    return (
        <PedidosContext.Provider value={{ historicoPedidos, addPedido }}>
            {children}
        </PedidosContext.Provider>
    )
}