import './project.css'
import ProjectContainer from './projectContainer'
import Animacion from './animacion'
import Header from './Header'

export default function Projects(){
    return(
        <div className='container'>
            <Header/>
            <Animacion/>
            <ProjectContainer/>
        </div>
    )
 
}