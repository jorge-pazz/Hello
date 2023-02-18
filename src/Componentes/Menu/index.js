import { Link } from 'react-router-dom';
import Style from './Menu.module.css';


export default function Menu(){

    return(

       <header>

            <nav className={Style.navegacao}>
                <Link to='/' className={Style.link}>Inicio</Link>

                <Link to='/SobreMim' className={Style.link}>Sobre Mim</Link>

            </nav>

       </header>
    )


}