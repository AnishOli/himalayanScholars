import React, { useRef } from 'react'
import  './Testimonials.css'
import next_icon from '../../assets/right-arrow.png'
import back_icon from '../../assets/back.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider  = useRef();
    let tx = 0;


    const slideForward = () => {
        if (tx > -50){
            tx -= 25;
        
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

    const slideBackward = () => {
        if (tx < 0){
            tx += 25;
        
        }
        slider.current.style.transform = `translateX(${tx}%)`
 
    }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt=""  className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt=""  className='back-btn' onClick={slideBackward}/>
      <div className="slider">  
      <ul ref={slider}>
        <li>
            <div className="slide">
              <div className="user-info"> 
               <img src={user_1} alt="" />
              
              <div>
                 <h3>Ava Elizabeth</h3>
                 <span>Himalayan Scholars, Nepal</span>
                 </div>
                  </div>
                  <p>Choosing this university for my undergraduate studies was one of the best decisions I've made. The supportive faculty and hands-on learning environment helped me build a strong foundation. I gained both academic knowledge and real-world skills.
                   It truly shaped my journey in software engineering.</p>
            </div>

        </li>
                <li>
            <div className="slide">
            <div className="user-info"> 
            <img src={user_2} alt="" />
            <div>
                 <h3>Ava Elizabeth</h3>
                 <span>Himalayan Scholars, Nepal</span>
                 </div>
                  </div>
                  <p>Pursuing my masters degree here deepened my expertise and encouraged critical thinking and innovation. The research opportunities and mentorship I received were outstanding. The collaborative learning culture pushed me to grow.
                   I felt prepared to take on advanced roles in the tech industry.</p>
            </div>
        </li>
                <li>
            <div className="slide">
            <div className="user-info"> 
            <img src={user_3} alt="" />
           <div>
                 <h3>Ava Elizabeth</h3>
                 <span>Himalayan Scholars, Nepal</span>
                 </div>
                  </div>
                  <p>Choosing this university for my undergraduate studies was one of the best decisions I've made. The supportive faculty and hands-on learning environment helped me build a strong foundation. I gained both academic knowledge and real-world skills.
                   It truly shaped my journey in software engineering.</p>
            </div>
        </li>
                <li>
            <div className="slide">
            <div className="user-info"> 
            <img src={user_4} alt="" />
            <div>
                 <h3>Ava Elizabeth</h3>
                 <span>Himalayan Scholars, Nepal</span>
                 </div>
                  </div>
                  <p>Pursuing my masters degree here deepened my expertise and encouraged critical thinking and innovation. The research opportunities and mentorship I received were outstanding. The collaborative learning culture pushed me to grow.
                   I felt prepared to take on advanced roles in the tech industry</p>
            </div>
        </li>
             
      </ul>
      </div>
    </div>
  )
}

export default Testimonials
