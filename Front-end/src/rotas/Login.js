import '../componetes/login/logininput.css';
import criaToken from '../function/Sign_in/token';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div>
           <form onSubmit={(event)=> {
                event.preventDefault()
                criaToken();
            }}> 
                <input 
                    className='loginInput'
                    placeholder="Nome"
                    
                    />
                <input
                className='loginInput'
                    type="password"
                    placeholder="Senha"
                />
                <Link to='/notebooks'><button 
                className='button3'>Login
                </button></Link>
            </form>
        </div>
    );
}

export default Login;
