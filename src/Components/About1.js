import React ,{useState,} from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import './Footer.css'
import './About.css';

import moonbucks2 from '../Assets/moonbucks2.jpg'
import moonbucks4 from '../Assets/moonbucks4.png'
import moonbucks7 from '../Assets/moonbucks7.png'
import mobMenu from '../Assets/menu.png';
import './Navbar.css'
const Home = () => {
    const[showMenu,setShowMenu]= useState(false);
  return (
    <section id="home">
        <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="desktopMenu" onClick={()=>setShowMenu(!showMenu)} >
        <Link id="lnk"  to="home" spy={true ? 1: 0} smooth={true ? 1:0} offset={-100} duration={500} className="desktopMenuListItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link id="lnk"  to="About" spy={true ? 1: 0} smooth={true ? 1:0} offset={-70} duration={500} className="desktopMenuListItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link id="lnk"  to="Menu" spy={true ? 1: 0} smooth={true ? 1:0} offset={-50} duration={500} className="desktopMenuListItem" onClick={()=>setShowMenu(false)}>Menu</Link>
        <Link id="lnk"  to="Contact" spy={true ? 1: 0} smooth={true ? 1:0} offset={-100} duration={500} className="desktopMenuListItem" onClick={()=>setShowMenu(false)}>contact</Link>

        </div>
        
        <img src={mobMenu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display:showMenu ? 'flex':'none'}}>
        <a href="/"  to="home" spy={true ? 1: 0} smooth={true ? 1:0} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</a>
        <a href="About"  to="About" spy={true ? 1: 0} smooth={true ? 1:0} offset={-70} duration={500} className="ListItem"onClick={()=>setShowMenu(false)} >About</a>
        <a href="Menu1"  to="menu" spy={true ? 1: 0} smooth={true ? 1:0} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Menu</a>
        <a href="Contact1"  to="contact" spy={true ? 1: 0} smooth={true ? 1:0} offset={-400} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>contact</a>
        </div>
    </nav>

    

    <div id='about'>
        <span className="aboutTitle">About</span>
        <span className="aboutDesc">Everyones favorite <strong className="aboutStrong">Starbucks</strong> put together in a specially curated collection. </span>
        <div className="aboutBars">
            <div className="aboutBar">
                <img src={moonbucks2} alt="" className="aboutBarImg"/>
                <div className="aboutBarText">
                    <h2 className='aboutHeading'>Java Chip Frappacino</h2>
                    <p>We blend mocha sauce and Frappuccino chips with Frappuccino</p>
                </div>
            </div>
            <div className="aboutBar">
                <img src={moonbucks4} alt="" className="aboutBarImg"/>
                <div className="aboutBarText">
                    <h2 className='aboutHeading'>Cafe Americano</h2>
                    <p>Rich in flavour,full-bodied espresso with hot water in true...</p>
                </div>
            </div>
            <div className="aboutBar">
                <img src={moonbucks7} alt="" className="aboutBarImg"/>
                <div className="aboutBarText">
                    <h2 className='aboutHeading'>Cold Americano</h2>
                    <p>Our signature rich mocha-flavoure sauce blended with delicate...</p>
                </div>
            </div>
        </div>
    </div><br/>
    <div className="footer">
    Copyright #123; 2000 Vicky Stark. All right received.
</div>
</section>
  )
}

export default Home