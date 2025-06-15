import React from 'react'

import './Contact.css'
import msg_icon from '../../assets/message_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone.png'
import location_icon from '../../assets/location.png'
import white_arrow from '../../assets/arrow-right.png'

const Contact = () => {


 const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "58028223-5266-4762-af23-c4c87f4ce007");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
    <div className="contact-col"> 
    <h3>Send us a Message <img src={msg_icon} alt=''/></h3>
    <p>Free free to  reach out through contact form or find our contact information below.
    Your feedback, questions, and suggestions are important to us  we strive  to provide exceptional service to
    our community</p> 
    <ul>
        <li><img src={mail_icon} alt=''/>havardUni4u@gmail.com</li>
        <li><img src={phone_icon} alt=''/>+977 9812345678</li>
        <li><img src={location_icon} alt=''/>Putalisadak, Kathmandu <br/>
Bagmati Province, Nepal</li>
    </ul> 
    </div>
    <div className="contact-col"> 
    <form onSubmit={onSubmit}>
        <label htmlFor="">Your Name</label>
        <input type="text" name='name' placeholder='Enter Your name' required/>
        <label htmlFor="">  Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter your phone number' required />
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="6" placeholder='Enter your message here' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow}/></button>
    </form>
    <span>{result}</span>
      </div>
      
    </div>
  )
}

export default Contact
