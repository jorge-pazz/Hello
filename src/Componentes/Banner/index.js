import Style from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

///Importe

export default function Banner(){

    return(
      
        <div className={Style.banner}>

             <div className={Style.apresentacao} >

                <h1 className={Style.titulo}>
                    Olá mundo
                </h1>

                <p className={Style.paragrafo}>
                    Bem vindo ao meu blog Pessoal
                </p>
                
            </div>  


            <div className={Style.imagens}>

                <img
                    className={Style.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="Imagem Perfil Banner"
                >

                </img>

                <img
                    className={Style.minhaFoto}
                    src={minhaFoto}
                    alt="Imagem Perfil Banner"
                >
                </img>

            </div>

        </div>

    )


}