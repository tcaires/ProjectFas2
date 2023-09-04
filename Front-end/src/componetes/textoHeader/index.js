import './componetes.css';
import { Link } from 'react-router-dom';

const textoOpcoes = ['NOTEBOOKS', 'FAVORITOS', 'LOGIN'];

function TextoOpcoes() {
  return (
    <ul className='opcoes'>
      {textoOpcoes.map((texto, index) => (
        <li key={index} className='opcao'>
          <Link to={`/${texto.toLowerCase()}`} className='opcao-link'> 
          {texto}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default TextoOpcoes;
