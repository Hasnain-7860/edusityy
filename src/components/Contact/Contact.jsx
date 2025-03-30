import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b9b5498c-afa8-4399-a9f1-d6b0bba0b517");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        // event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact container' id='contact'>
        <div className="contact-col">
            <h3>Send Us a Message
                <img src={msg_icon} alt="" />
            </h3>
            <p>Feel free to reach out Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Vel magni ipsam repellat nihil deserunt illo consequuntur quos quia repellendus
                  laborum eum sit recusandae itaque vero, reprehenderit
                   accusantium ab voluptatibus repudiandae.</p>
                   <ul>
                    <li> <img src={mail_icon} alt="" />Contact@Greatstick.dev</li>
                    <li> <img src={phone_icon} alt="" />91+9873502463</li>
                    <li> <img src={location_icon} alt="" /> A 59 Saheen Bagh token no - 6  okhla New Delhi <br />INDIA delhi</li>
                   </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label> Your Name</label>
                    <input type="" name='name' placeholder='Enter your name' 
                    required/>
                    <label>phone Number</label>
                    <input type=" text" name='Phone'  placeholder='Enter your mobaile number'
                    required/>
                    <label>write your message here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea> <br />
                    <button type='submit' className='boltt'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact