import logo from '../../imagens/logo.svg';
import './componetes.css';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to='/' className='logo-link'> {/* Adicione uma classe ao Link */}
      <div className='logo'>
        <img 
          src={logo} 
          alt='logo'
          className="logo-img"
        ></img>
        <p className='logo-texto'><strong>SEC\</strong>\note</p>
      </div>
    </Link>
  )
}

export default Logo;
