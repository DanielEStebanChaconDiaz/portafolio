import './container.css'
export default function Container(){
    return(
        <div className='container2'>
            <div className="welcome">
                <h1 className='Hello'>Welcome to my portfolio!</h1>
                <p>I'm Daniel, a software developer with a passion for creating engaging and user-friendly experiences.</p>
                <div className="links">
                <a href="https://github.com/DanielEStebanChaconDiaz"><i class='bx bxl-github'></i></a>
                <a href="https://www.linkedin.com/in/danielestebanchacondiaz/"><i class='bx bxl-linkedin-square' ></i></a>
                </div>
            </div>
            <div className="img">
                <img src="./img.jpg" alt="" />
            </div>
            
        </div>
    )
}