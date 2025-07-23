import {useEffect , useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";

// import { Container } from 'react-bootstrap'
// import { Link } from 'react-scroll'


const Navbar = () => {
  const [sticky,setSticky]= useState(false);

useEffect(()=>{
  window.addEventListener('scroll',()=>{
window.scrollY > 50 ? setSticky(true) : setSticky(false);
  })
},[]);

  return (
  <nav className={`upper  ${sticky? 'dark-nav' : ''}`} >
   <div className='canter container '>
    <img src={logo} alt=""  className='logo '/>
            <ul>
            {/* <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={0} duration={500}>Program</Link></li>
            <li><Link to=''>About us</Link></li>
            <li> <a href="#campus">Campus</a></li>
            <li>Testimonials</li>
            <li> <Link to='contact' smooth={true} offset={0} duration={500}><button className='bolte'>Contact us</button></Link></li> */}
            <li><a href="#hero">Home</a></li>
            <li><a href="#program">Program</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#campos">Campos</a></li>
            <li><a href="#testimonial">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul> 
        <div className="hamburger"><RxHamburgerMenu /></div>
        </div>
        
</nav>
  )
}

export default Navbar