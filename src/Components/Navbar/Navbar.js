import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        {/* <img src="logo.png" alt="Logo" className='logo' /> */}
        <div className="desktopMenu">
            <Link activeClass='active' to='aboutTitle' spy={true} smooth={true} offset={-50} duration={700} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='embroidery' spy={true} smooth={true} offset={-100} duration={700} className="desktopMenuListItem">Embroidery</Link>
            <Link activeClass='active' to='materialCare' spy={true} smooth={true} offset={-80} duration={700} className="desktopMenuListItem">Material</Link>
            {/* <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-40} duration={700} className="desktopMenuListItem">Portfolio</Link> */}
            {/* <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-60} duration={700} className="desktopMenuListItem">Experience</Link> */}
        </div>
        {/* <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contactMe').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src="./contact.png" alt="" className="desktopMenuImg" />Contact Me</button> */}

        <img src="menu.svg" alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-55} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-90} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-60} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>Experience</Link>
            <Link activeClass='active' to='contactMe' spy={true} smooth={true} offset={-60} duration={700} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar