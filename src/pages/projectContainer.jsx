import './projectsContainer.css'

export default function ProjectContainer(){
    return (
        <div className="projectContainer">
            <h1>Projects</h1>
            <div className="containerPro">
            <div className="project">
                <h2>Spotify API consumption</h2>
                <img src="https://www.santandersmusic.com/media/magazine/spotify-2-1.jpg" alt="" />
                <p>This project involved creating an interactive web application that consumes the Spotify API to provide users with a personalized music experience. The application allows users to search for songs, artists, and albums, and explore popular playlists.</p>
                <button><a href="https://github.com/DanielEStebanChaconDiaz/proyectoJavaScript">Go to github</a></button>
            </div>
            <div className="project">
                <h2>Cinema App</h2>
                <img src="../public/image.png" alt="" />
                <p>Created a mobile app for a cinema, which included developing a custom API. The project featured managing movie listings, showtimes, and ticket bookings, all optimized for a seamless user experience on mobile devices.</p>
                <button><a href="https://github.com/DanielEStebanChaconDiaz/proyectoMongoII">Go to github</a></button>
            </div>
            <div className="project">
                <h2>E-commerce</h2>
                <img src="https://53.fs1.hubspotusercontent-na1.net/hubfs/53/ecommerce%20marketing.jpg" alt="" />
                <p>This project involved creating two landing pages using only HTML and CSS. One page is designed for a clothing e-commerce site, while the other caters to a food e-commerce business.</p>
                <button><a href="https://github.com/DanielEStebanChaconDiaz/proyectoWeb">Go to github</a></button>
            </div>
            <div className="project">
                <h2>Snake Game</h2>
                <img src="https://play-lh.googleusercontent.com/S9ZmNx5LYCj7h2IJZb0QqkXAGki6JRaMQ25ycKfrngDkNBA6jk7rM87YcAH1prV_OA" alt="" />
                <p>Developed a classic Snake game using JavaScript, HTML, and CSS. The game features smooth controls, dynamic gameplay, and an engaging interface, bringing the nostalgic arcade experience to the web.</p>
                <button><a href="https://github.com/DanielEStebanChaconDiaz/fake_snake">Go to github</a></button>
            </div>
            </div>
        </div>
    )
}