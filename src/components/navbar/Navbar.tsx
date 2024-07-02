import { NavLink } from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <nav>
        <div className="navbar">
            <div className="nav_logo">
                <i></i>
                <h3>Cookipé</h3>
            </div>
            <div className="nav_menu">
                <ul className="nav_list">
                    <li>
                        <NavLink to=''>Latest recipes</NavLink>
                    </li>
                    <li>
                        <NavLink to=''>Popular</NavLink>
                    </li>
                    <li>
                        <NavLink to=''>Videos</NavLink>
                    </li>
                    <li>
                        <NavLink to=''>Blogs</NavLink>
                    </li>
                    <li>
                        <NavLink to=''>About us</NavLink>
                    </li>
                </ul>
                <div className="share_btn">
                    <button>Share Recipe</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar