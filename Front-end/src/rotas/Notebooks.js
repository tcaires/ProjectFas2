import axios from "axios";
import { useEffect, useState } from 'react';
import '../componetes/css/listagemtexto.css'

function Notebooks() {
    const [notebooks, setNotebooks] = useState([]);

    const accessToken = localStorage.getItem('accessToken')
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.post("http://localhost:4000/Notebooks", {
                    accessToken,
                });
                setNotebooks(data)
            } catch (err) {
                console.log('Erro na requisição:', err);
            }
        })();
    }, []);

    return (
        <div>
            <strong><h2 className="espaço">Notebooks</h2></strong>
            {notebooks.map((notebook) => {
                return (
                    <table key={notebook.id} className="table"   >
                        <tr className="th">
                            <th>Marca</th>
                            <th>Estoque</th>
                            <th>Preço</th>
                        </tr>
                        <tr className="td">
                            <td>{notebook.marca}</td>
                            <td>{notebook.estoque}</td>
                            <td>R$:{notebook.preco}</td>
                        </tr>

                    </table>
                );
            })}
        </div>
    );
}

export default Notebooks;
