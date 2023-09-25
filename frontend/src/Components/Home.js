import React,{useState} from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from '../image/heroimg.png';
import UserReg from '../image/online-registration.png';
import RequestBook from '../image/manual.png';
import ReadBook from '../image/read.png';
import Contact from '../image/contact.png';
import '../styles/Home.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import "../styles/Footer.css";
export default function Home() {
  const [text] = useTypewriter({
    words: ['REQUEST','READ','RETURN'],
    loop: true, // Add loop configuration to cycle through words
    typeSpeed: 100,
    deleteSpeed: 80,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server or display a success message.
    console.log(formData);
  };
  return (
    <div>
      <Navbar name="LIBRARY PATH" />
      <ScrollAnimation animateIn="animate__fadeIn animate__slower" animateOut="animate__fadeOut animate__slower">
      <section className="hero" id="hero">

        <div className="hero_img">
          <img src={Hero} alt="" />
        </div>
       
        <div className="hero_text">
          <div className="text-box">
            <h5>
              TECHNO LIBRARY PATH{' '}</h5>
              <h6 style={{fontSize:'30px'}}>
              <span style={{ fontWeight: 'bold', color: '#7d1540' }}>
                {text}
              </span>
              <Cursor />
              <span >BOOK</span>
              <span style={{ color: 'blue' }}>
               
              </span>
              </h6>
          </div>
        </div>
      </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="animate__fadeIn animate__slower" animateOut="animate__fadeOut animate__slower">
      <section className="about" id="about">
        <div className="about_text">
            <h2 >ABOUT US</h2>
            <h5 >Techno Library path is an 
            online platform where every student can register and get the book.</h5>
            <div className='about_icon'>
                <div className="reg">
                <img src={UserReg} alt="" />
                <h6>STUDENT REGISTRATION</h6>
                </div>
                <div className="reg">
                <img src={RequestBook}alt=""/>
                <h6>REQUEST BOOK</h6>
                </div>
                <div className="reg"> <img src={ReadBook} alt="" />
                <h6>TAKE BOOK </h6></div>
               
            </div>
        </div>

      </section>
      </ScrollAnimation>
      
      <ScrollAnimation animateIn="animate__fadeIn animate__slower" animateOut="animate__fadeOut animate__slower">
        <section className='contact'>
            <img src={Contact} alt="" />
            <div className="form">
            <h2 style={{textAlign:'center'}}>Contact Us</h2>
            <form onSubmit={handleSubmit}>
      <div className='input'>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className='input'>
        <label>Email </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className='input'>
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <center><button type="submit">Submit</button></center>
    </form>
            </div>
            <div className="map"></div>
        </section>
      </ScrollAnimation>
      <Footer />
    </div>
  );
}
