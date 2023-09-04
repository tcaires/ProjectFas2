import '../componetes/Pesquisa/componetes.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="pesquisa">
                <h2 className="titulo">
                    Seu novo NOTEBOOK esta aqui.
                </h2>
                <input
                placeholder="Pesquise pela marca aqui."
                className="input"/>
               <Link to='/favoritos'><button className='button'>Buscar</button></Link>
            </section>  
  );
}

export default Home;
