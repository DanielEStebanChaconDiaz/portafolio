import './Header.css'
export default function Header(){
    return(
        <header>
            <div className="logo">
                <h1> <a href="#/">Daniel Chacon</a></h1> {/* Actualizado a usar hash */}
            </div>
            <ul>
                <li className="Home">
                    <a href="#/" className='home'>Home</a> {/* Actualizado a usar hash */}
                    <a href="#/About" className='about'>About me</a> {/* Actualizado a usar hash */}
                    <a href="#/Skills" className='skills1'>Skills</a> {/* Actualizado a usar hash */}
                    <a href="#/HDV" className='hdv'>HDV</a> {/* Actualizado a usar hash */}
                    <a href="#/Projects" className='projects'>Projects</a> {/* Actualizado a usar hash */}
                    <a href="#/Contact" className='contact'>Contact</a> {/* Actualizado a usar hash */}
                </li>
            </ul>
        </header>
    )
}
