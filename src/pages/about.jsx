import Header from './Header'
import Aboutme from './aboutme'
import Animacion from './animacion'
import './about.css'
export default function About(){
    return(
        <div className='container'>
            <Header/>
            <div className = 'container3'>
            <Aboutme/>
            <Animacion/>
            </div>
        </div>
    )
}