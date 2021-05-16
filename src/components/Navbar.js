import { useState } from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/logo1.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNav(true)
        }
        else {
            setNav(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <Link to="main" className="logo">
                <img 
                    src={logo}
                    alt="logo" 
                />
            </Link>
            <input 
                className="menu-btn" 
                type="checkbox" 
                id="menu-btn" 
            />
            <label className="menu-icon"  htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="#">Header</Link></li>
                <li><Link to="#">Products</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar