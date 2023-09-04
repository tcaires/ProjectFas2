import axios from "axios";
import { useEffect, useState } from "react";
import '../componetes/css/listagemtexto.css';


function Favoritos() {
    const [notebooks, setNotebooks] = useState([]);
    const [filtro, setFiltro] = useState("");
    const [resultados, setResultados] = useState([]);
    const accessToken = localStorage.getItem('accessToken');
    const [semResultados, setSemResultados] = useState(false);


    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.post('http://localhost:4000/Notebooks', {
                    accessToken,
                });
                setNotebooks(data);
            } catch (err) {
                console.log('Erro na Req:', err);
            }
        })();
    }, );

    const handlePesquisar = () => {
        const notebooksFiltrados = notebooks.filter((notebook) =>
            notebook.marca.toLowerCase().includes(filtro.toLowerCase())
        );

        if (notebooksFiltrados.length === 0) {
            setSemResultados(true);
        } else {
            setSemResultados(false);
        }

        setResultados(notebooksFiltrados);
    };


    return (
        <div>
            <h2 className="espaço">Pesquise Por Marca</h2>
            <input className="input espaço"
                type="text"
                placeholder="Filtrar por marca..."
                value={filtro}
                onChange={(e) => setFiltro(e.target.value)}
            />
            <button className='button2' onClick={handlePesquisar}>Pesquisar</button>

            {semResultados ? (
                <p>Nenhum resultado encontrado para "{filtro}".</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr className="th">
                            <th>Marca</th>
                            <th>Estoque</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultados.map((notebook) => (
                            <tr className="td" key={notebook.id}>
                                <td>{notebook.marca}</td>
                                <td>{notebook.estoque}</td>
                                <td>R$:{notebook.preco}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

        </div>
    );
}

export default Favoritos;
