import "./Footer.sass"
import { education, onlineEducation, community } from "../../images"

const Footer = () => {
    return (
        <footer className="footer">
            <p>Grupo Alura</p>
            <div className="footerLinks">
                <ul className="education">
                    <li className="title">Educação</li>
                {education.map((item, index) => (
                    <li className="item" key={index}>
                        <img src={item.src} alt={item.alt}/>
                        <p>{item.text}</p>
                    </li>
                    ))}
                </ul>
                <ul className="onlineEducation">
                    <li className="title">Educação Online</li>
                    {onlineEducation.map((item, index) => (
                    <li className="item" key={index}>
                        <img src={item.src} alt={item.alt}/>
                        <p>{item.text}</p>
                    </li>
                    ))}
                </ul>
                <ul className="community">
                    <li className="title">Comunidades</li>
                    {community.map((item, index) => (
                    <li className="item" key={index}>
                        <img src={item.src} alt={item.alt}/>
                        <p>{item.text}</p>
                    </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer