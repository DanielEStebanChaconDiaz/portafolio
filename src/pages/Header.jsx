import './Header.css'
export default function Header(){
    return(
        <header>
            <div className="logo">
                <h1> <a href="/">Daniel Chacon</a></h1>
            </div>
            <ul>
                <li className="Home">
                    <a href="/" className='home'>Home</a>
                    <a href="/About" className='about'>About me</a>
                    <a href="/Skills" className='skills1'>Skills</a>
                    <a href="/HDV" className='hdv'>HDV</a>
                    <a href="/Projects" className='projects'>Projects</a>
                    <a href="/Contact" className='contact'>Contact</a>
                </li>
            </ul>
        </header>
    )
}