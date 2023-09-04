import Logo from '../Logo/index'
import TextoOpcoes from '../textoHeader';
import './componetes.css';

function Header() {
    return(
        <div className='App-header'>
           <Logo/>
           <TextoOpcoes/>
        </div>
    );
}

export default Header;