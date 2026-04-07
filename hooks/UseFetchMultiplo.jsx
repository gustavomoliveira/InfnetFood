import { useState, useEffect } from "react";

export default function useFetchMultiplo(itens) {
    const [imagens, setImagens] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function buscarImagens() {
            try {
                const resultados = await Promise.all(
                    itens.map(item => {
                        if (!item.urlBusca) {
                            return Promise.resolve({ id: item.id, imagem: null });
                        }
                        return fetch(item.urlBusca)
                            .then(r => r.json())
                            .then(data => ({
                                id: item.id,
                                imagem: data.meals?.[0]?.strMealThumb || null
                            }));
                    })
                );

                const imagensPorId = {};
                resultados.forEach(({ id, imagem }) => {
                    imagensPorId[id] = imagem;
                });
                setImagens(imagensPorId);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        buscarImagens();
    }, []);

    return { imagens, loading, error };
}