import './hdv.css'
import Header from './Header'
import Animacion from './animacion'
export default function Hdv(){
    return (
        <div className='container'>
            <Header/>
            <Animacion/>
            <div className="hoja">
            <h1>Hoja de vida</h1>
            <img src="../public/Copia de Ejemplos hojas de vida.png" alt="" />
            </div>
        </div>
    )
}