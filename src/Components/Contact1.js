import React ,{useState} from 'react';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import './Footer.css'
import './Contact.css'
import Facebook from '../Assets/Facebook.png'
import Microsoft from '../Assets/Microsoft.png'
import Twitter from '../Assets/TwitterX.png'
import Instagram from '../Assets/Instagram.png'
import mobMenu from '../Assets/menu.png';
import './Navbar.css'
const Home = () => {
    const[showMenu,setShowMenu]= useState(false);
  return (
    <section id="home">
        <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="desktopMenu">
        <Link id="lnk"  to="/" spy={true ? 1: 0} smooth={true ? 1:0} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link id="lnk"  to="/About" spy={true ? 1: 0} smooth={true ? 1:0} offset={-70} duration={500} className="desktopMenuListItem">About</Link>
        <Link id="lnk"  to="/Menu" spy={true ? 1: 0} smooth={true ? 1:0} offset={-50} duration={500} className="desktopMenuListItem">Menu</Link>
        <Link id="lnk"  to="/Contact" spy={true ? 1: 0} smooth={true ? 1:0} offset={-100} duration={500} className="desktopMenuListItem">contact</Link>

        </div>
        
        <img src={mobMenu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display:showMenu ? 'flex':'none'}}>
        <a href="/"  to="home" spy={true ? 1: 0} smooth={true ? 1:0} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</a>
        <a href="/About1"  to="about" spy={true ? 1: 0} smooth={true ? 1:0} offset={-70} duration={500} className="ListItem"onClick={()=>setShowMenu(false)} >About</a>
        <a href="/Menu1"  to="menu" spy={true ? 1: 0} smooth={true ? 1:0} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Menu</a>
        <a href="/Contact1"  to="contact" spy={true ? 1: 0} smooth={true ? 1:0} offset={-400} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>contact</a>
        </div>
    </nav>



    <div id='contactPage'>
        <div id='contacts'>
            <h1 className="contactPageTitle">Contact</h1>
            <p className='ContactDesc'> Connect with us through this platforms</p>
            <div className="ContactImgs">
                <img src={Facebook} alt="facebook" className="contactImg" />
                <img src={Microsoft} alt="microsoft" className="contactImg" />
                <img src={Twitter} alt="twitter" className="contactImg" />
                <img src={Instagram} alt="instagram" className="contactImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Email</h1>
            <span className="ContactDesc">You can give ur review through this email"</span>
            <form className="contactForm">
                <input type='text' className="name" placeholder='Your Name'/>
                <input type='email' className="email" placeholder='Your Email'/>
                <textarea className='msg' name="message" rows="5" placeholder="Your Message"></textarea>
                <buttonarea type="button" className="submitBtn">Submit</buttonarea>
            </form>
            
            </div></div>

    <br/>
    <div className="footer">
    Copyright #123; 2000 Vicky Stark. All right received.
</div>
</section>
  )
}

export default Home
