import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';
// import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src="apparel.svg" alt="Logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='aboutTitle' spy={true} smooth={true} offset={-80} duration={700} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='embroidery' spy={true} smooth={true} offset={-101} duration={700} className="desktopMenuListItem">Embroidery</Link>
            <Link activeClass='active' to='materialCare' spy={true} smooth={true} offset={-120} duration={700} className="desktopMenuListItem">Material</Link>
        </div>
        <button className='desktopMenuBtn' onClick={()=> {
          document.getElementById('order').scrollIntoView({behavior: 'smooth'})
        }}>Buy Now</button>
        <img src="menu.svg" alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='aboutTitle' spy={true} smooth={true} offset={-100} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='embroidery' spy={true} smooth={true} offset={-85} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>Embroidery</Link>
            <Link activeClass='active' to='materialCare' spy={true} smooth={true} offset={-80} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>Material</Link>
        </div>
    </nav>
  )
}

export default Navbar