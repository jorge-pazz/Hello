import Banner from 'Componentes/Banner'
import PostModelo from 'Componentes/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'
import React from 'react'

export default function SobreMim() {
  return (
    
    <main>

      <Banner />

      <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
        conteudo...
      </PostModelo>
      
    </main>

  )
}
