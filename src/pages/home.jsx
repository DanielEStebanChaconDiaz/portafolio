import './Home.css'
import Header from './Header'
import Container from './container'
import Animacion from './animacion'
import Cursor from './cursor.jsx';


export default function Home(){
    return(
        <div className = 'container'>
            <Header/>
            <Container/>
            <Animacion/>
            <Cursor/>
        </div>
    )
}