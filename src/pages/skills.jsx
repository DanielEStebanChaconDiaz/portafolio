import React from 'react';
import './skills.css';
import Header from './Header';
import Animacion from './animacion'

export default function Skills() {

    const handleMouseMove = (e) => {
        const img = e.currentTarget;
        const { width, height, left, top } = img.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const rotateX = (y / height - 0.5) * 20;
        const rotateY = (x / width - 0.5) * -20;

        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (e) => {
        const img = e.currentTarget;
        img.style.transform = 'rotateX(0) rotateY(0)';
    };

    return (
        <div className="container4">
            <Header />
            <Animacion/>
                <div className="skills">
                    <div className="backend">
                        <h2>Backend</h2>
                        <ul>
                            <li>
                                <img src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" 
                                     alt="Node.js" 
                                     onMouseMove={handleMouseMove} 
                                     onMouseLeave={handleMouseLeave} />
                            </li>
                            <li>
                                <img src="https://seeklogo.com/images/M/mongodb-logo-D13D67C930-seeklogo.com.png" 
                                     alt="MongoDB" 
                                     onMouseMove={handleMouseMove} 
                                     onMouseLeave={handleMouseLeave} />
                            </li>
                            <li>
                                <img src="https://brandlogo.org/wp-content/uploads/2024/02/MySQL-Logo-300x300.png.webp" 
                                     alt="MySQL" 
                                     onMouseMove={handleMouseMove} 
                                     onMouseLeave={handleMouseLeave} />
                            </li>
                            <li>
                                <img src="https://img.icons8.com/fluent/200/express-js.png" 
                                     alt="Express.js" 
                                     onMouseMove={handleMouseMove} 
                                     onMouseLeave={handleMouseLeave} />
                            </li>
                            <li>
                                <img src="https://a.slack-edge.com/2a8628a/img/plugins/stripe/service_512.png" 
                                     alt="Stripe" 
                                     onMouseMove={handleMouseMove} 
                                     onMouseLeave={handleMouseLeave} />
                            </li>
                            <li>
                                <img src="https://miro.medium.com/v2/resize:fit:400/1*JktK87FL_sqDDnuxHxe6Fw.png" 
                                     alt="Firebase" 
                                     onMouseMove={handleMouseMove} 
                                     onMouseLeave={handleMouseLeave} />
                            </li>
                        </ul>
                    </div>
                    <div className="frontend">
                        <h2>Frontend</h2>
                        <ul>
                            <li>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" 
                                     alt="HTML5" 
                                     onMouseMove={handleMouseMove} 
                                     onMouseLeave={handleMouseLeave} />
                            </li>
                            <li>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" 
                                     alt="CSS3" 
                                     onMouseMove={handleMouseMove} 
                                     onMouseLeave={handleMouseLeave} />
                            </li>
                            <li>
                                <img src="https://assets.codegrip.tech/wp-content/uploads/2021/09/02170708/JavaScript_Logo1-293x300.png" 
                                     alt="JavaScript" 
                                     onMouseMove={handleMouseMove} 
                                     onMouseLeave={handleMouseLeave} />
                            </li>
                            <li>
                                <img src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" 
                                     alt="React" 
                                     onMouseMove={handleMouseMove} 
                                     onMouseLeave={handleMouseLeave} />
                            </li>
                            
                        </ul>
                    </div>
                    <div className="social">
                        <h2>Social skills</h2>
                        <ul>
                            <li>
                                <img src="https://img.freepik.com/vector-premium/trabajo-equipo-dibujos-animados-dibujados-mano_52683-76223.jpg" alt="" 
                                onMouseMove={handleMouseMove} 
                                onMouseLeave={handleMouseLeave}/>
                            </li>
                            <li>
                                <img src="https://www.onplusformacion.com/wp-content/uploads/2021/05/f840bf01-6d7f-4e8f-4607-e7513e5226ed.jpg" alt="" 
                                onMouseMove={handleMouseMove} 
                                onMouseLeave={handleMouseLeave}/>
                            </li>
                            <li>
                                <img src="https://cdn.goconqr.com/uploads/media/image/29147976/desktop_d1d7a509-9b33-439c-8c5a-286764d8c4a8.png" alt="" 
                                onMouseMove={handleMouseMove} 
                                onMouseLeave={handleMouseLeave}/>
                            </li>
                            <li>
                                <img src="https://www.bizneo.com/blog/wp-content/uploads/2020/09/gestion-del-tiempo.jpg" alt="" 
                                onMouseMove={handleMouseMove} 
                                onMouseLeave={handleMouseLeave}/>
                            </li>
                            <li>
                                <img src="https://img.freepik.com/vector-premium/relajacion-manejo-estres-aliviar-ansiedad-o-ira-meditacion-cerebral-ayudar-reducir-concepto-estres-medico-ayuda-resolver-problema-ansiedad-usando-aguja-reventar-globo-estres_212586-1684.jpg" alt="" 
                                onMouseMove={handleMouseMove} 
                                onMouseLeave={handleMouseLeave}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}
