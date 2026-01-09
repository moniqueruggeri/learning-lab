import "./Menu.css"
import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Como fazer</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu