import { Link } from 'react-router-dom';
import MenuLink from '../MenuLink';
import Style from './Menu.module.css';


export default function Menu(){

    return(

       <header>

            <nav className={Style.navegacao}>
                
                <MenuLink to="/">
                    Inicio
                </MenuLink>

                <MenuLink to="/SobreMim">
                    Sobre Mim
                </MenuLink>

            </nav>

       </header>
    )


}