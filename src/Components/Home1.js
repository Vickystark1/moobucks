import React ,{useState} from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import logo from '../Assets/logo.png';
import './Home.css';
import moonbucks8 from '../Assets/moonbucks8.png'
import order from '../Assets/order.png';
import './Footer.css'
import mobMenu from '../Assets/menu.png';
import './Navbar.css'
import Home1 from '../Components/Home1'
import About1 from '../Components/About1'
import Menu1 from '../Components/Menu1'
import Contact1 from '../Components/Contact1'
import Notfound from '../Components/Notfound'
const Home = () => {
    const[showMenu,setShowMenu]= useState(false);
  return (
    <section id="home">
        <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="desktopMenu">
        <Link id="lnk"  to="/" spy={true ? 1: 0} smooth={true ? 1:0} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link id="lnk"  to="/About1" spy={true ? 1: 0} smooth={true ? 1:0} offset={-70} duration={500} className="desktopMenuListItem">About</Link>
        <Link id="lnk"  to="/Menu1" spy={true ? 1: 0} smooth={true ? 1:0} offset={-50} duration={500} className="desktopMenuListItem">Menu</Link>
        <Link id="lnk"  to="/Contact1" spy={true ? 1: 0} smooth={true ? 1:0} offset={-100} duration={500} className="desktopMenuListItem">contact</Link>

        </div>
        
        <img src={mobMenu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display:showMenu ? 'flex':'none'}}>
        <a href="/" to="/" spy={true ? 1: 0} smooth={true ? 1:0} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</a>
        <a href="About1"  to="About1" spy={true ? 1: 0} smooth={true ? 1:0} offset={-70} duration={500} className="ListItem"onClick={()=>setShowMenu(false)} >About</a>
        <a href="Menu1"  to="Menu1" spy={true ? 1: 0} smooth={true ? 1:0} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Menu</a>
        <a href="Contact1"  to="Contact1" spy={true ? 1: 0} smooth={true ? 1:0} offset={-400} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>contact</a>
        </div>
    </nav>

    <Routes>
    <Route exact path="/Home1" element={<Home1/>}/>
        <Route path="About1" element={<About1/>}/>
        <Route path="Menu1" element={<Menu1/>}/>
        <Route path="Contact1" element={<Contact1/>}/>
        <Route element={Notfound}/>
      </Routes>
<div className='homePage'>
<div className="homeContent">
            <span className="homeText">It's Not Just a Coffee<br/> It's<span className="HomeName"> <strong className='strong'>Moonbucks</strong></span></span>
         <p className="homePara">More than just a coffee.<br/> Explore the menu,sign up for <strong>Moonbucks</strong>@Rewards .</p>
         <a href='Home1'><button className="btn"> <span className='btnText'>Order</span> <img src={order} alt="" className="btnImg" /> </button></a>
        </div>

      <img src={moonbucks8} alt="moonbucks10" className="bg" /><br/>

    <div className="footer">
    Copyright #123; 2000 Vicky Stark. All right received.
</div></div>
</section>
  )
}

export default Home