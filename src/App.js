import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Componentes/Menu";
import Inicio from "./Paginas/Inicio";
import SobreMim from "./Paginas/SobreMim";


function App() {
  return (

    <BrowserRouter>

    <Menu />
    
        <Routes >
           <Route path="/" element={<Inicio />} />
           <Route path="/SobreMim" element={<SobreMim />} />
           <Route path="*" element='Erro' />
        </Routes>
    </BrowserRouter>


  )
    
}

export default App;
