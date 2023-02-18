import { Link, useLocation } from 'react-router-dom';
import Style from './MenuLink.module.css';

export default function MenuLink({children, to}){

    const localizacao = useLocation();

    return(

        <div>
            <Link to={to} className={`
                ${Style.link} 
                

                

                ${localizacao.pathname === to ? Style.linkDestacado : ""}`}>
                    {children}
                </Link>
        </div>
        
    )


}