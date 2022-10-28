import React from 'react'
 
import './home.css';
import service from '../Service/Service';
import profile from '../Profile/Profile';
import contact from '../Contact/Contact';
import blog from '../Blog/Blog';
import About from '../About/About';
import { Link, useNavigate} from 'react-router-dom'
const Home = () => {
  
  return (
    <div className='about-us'style={{textAlign:'center'}} > 
      <Link style={{textDecoration: 'none',color:'black',fontSize:'30px',padding:'10px 10px'}} to="About">About</Link>
      <Link style={{textDecoration: 'none',color:'black',fontSize:'30px',padding:'10px 10px'}} to="service">Service</Link>
      <Link style={{textDecoration: 'none',color:'black',fontSize:'30px',padding:'10px 10px'}} to="Profile/5555">Profile</Link>
      <Link style={{textDecoration: 'none',color:'black',fontSize:'30px',padding:'10px 10px'}} to="contact">Contact</Link>
      <Link style={{textDecoration: 'none',color:'black',fontSize:'30px',padding:'10px 10px'}} to="blog">Blog</Link>
      
    </div>
    
  )
}

export default Home