import Style from './PostModelo.module.css'
import fotoCapa from 'assets/sobre_mim_capa.png'

export default function PostModelo({fotoCapa, titulo, children}){

    return(

        <article>

            <div
                className={Style.postModeloContainer}
                Style={{ backgroundImage: fotoCapa  }}
            >
            </div>

            <h2 className={Style.titulo}>
                {titulo}
            </h2>

            <div
                className={Style.postConteudoContainer}
            >
                {children}
            </div>

        </article>

    )


}