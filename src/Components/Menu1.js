import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import './Footer.css'
import './Menu.css'
import moonbucks14 from '../Assets/moonbucks14.jpg'
import moonbucks12 from '../Assets/moonbucks12.jpg'
import moonbucks13 from '../Assets/moonbucks13.png'
import moonbucks1 from '../Assets/moonbucks1.png'
import moonbucks7 from '../Assets/moonbucks7.png'
import moonbucks16 from '../Assets/moonbucks16.jpg'
import mobMenu from '../Assets/menu.png';
import './Navbar.css'
const Home = () => {
    const[showMenu,setShowMenu]= useState(false);
  return (
    <section id="home">
        <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="desktopMenu">
        <Link id="lnk" to="/" spy={true ? 1: 0} smooth={true ? 1:0} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link id="lnk" to="/About" spy={true ? 1: 0} smooth={true ? 1:0} offset={-70} duration={500} className="desktopMenuListItem">About</Link>
        <Link id="lnk" to="/Menu" spy={true ? 1: 0} smooth={true ? 1:0} offset={-50} duration={500} className="desktopMenuListItem">Menu</Link>
        <Link id="lnk" to="/Contact" spy={true ? 1: 0} smooth={true ? 1:0} offset={-100} duration={500} className="desktopMenuListItem">contact</Link>

        </div>
        
        <img src={mobMenu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display:showMenu ? 'flex':'none'}}>
        <a href="/" to="home" spy={true ? 1: 0} smooth={true ? 1:0} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</a>
        <a href="/About1" to="about" spy={true ? 1: 0} smooth={true ? 1:0} offset={-70} duration={500} className="ListItem"onClick={()=>setShowMenu(false)} >About</a>
        <a href="/Menu1" to="menu" spy={true ? 1: 0} smooth={true ? 1:0} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Menu</a>
        <a href="/Contact1" to="contact" spy={true ? 1: 0} smooth={true ? 1:0} offset={-400} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>contact</a>
        </div>
    
        

    </nav>

    <div id='menu'>
    <h2 className='menuTitle'>Menu</h2>
    <span className='menuDesc'>Welcome to the world of Coffee</span>
    <div className='menuImgs'>
        <div className="imgText"><img src={moonbucks14} alt="" className="menuImg" /><div>Chocolate chip frappucino <div className="price"><strong> Rs.260 </strong></div></div></div>
        <div className="imgText"><img src={moonbucks12} alt="" className="menuImg" /><div>Unicorn frappuccino <div className="price"><strong> Rs.360 </strong></div></div></div>
        <div className="imgText"><img src={moonbucks13} alt="" className="menuImg" /><div>Strawberry frappuccino <div className="price"><strong> Rs.285 </strong></div></div></div>
        <div className="imgText"><img src={moonbucks1} alt="" className="menuImg" /><div>Halloween Drink <div className="price"><strong> Rs.390 </strong></div></div></div>
        <div className="imgText"><img src={moonbucks7} alt="" className="menuImg" /><div>Malaysia Seasonal <div className="price"><strong> Rs.280 </strong></div></div></div>
        <div className="imgText"><img src={moonbucks16} alt="" className="menuImg" /><div>Healthy Beverages <div className="price"><strong> Rs.440 </strong></div></div></div>
    </div>
        <button className="menuBtn">Order Now</button>
    </div>

    <br/>
    <div className="footer">
    Copyright #123; 2000 Vicky Stark. All right received.
</div>
</section>
  )
}

export default Home