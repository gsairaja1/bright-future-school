import React from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';

const Testimonials = () => {

  const slideForward = () => {
    const slider = document.querySelector('.slider ul');
    slider.style.transform = 'translateX(-50%)';
  };
  const slideBackward = () => {
    const slider = document.querySelector('.slider ul');
    slider.style.transform = 'translateX(0)';
  }
  const testimonials = [
    {
      img: "https://tse4.mm.bing.net/th/id/OIP.kcPUcBVWTxB6HJDCrj1S0wHaJQ?r=0&cb=thvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
      name: 'Alex Johnson',
      location: 'Grade 10 Student',
      text: "I love coming to school every day! The teachers make learning fun and I've made so many great friends."
    },
    {
      img: "https://tse1.mm.bing.net/th/id/OIP.UIL19E7-XgkPw8o8I5fF6AHaJ1?r=0&cb=thvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
      name: 'Marcus Rodriguez',
      location: 'Grade 8 Student',
      text: "The science lab and sports facilities are incredible. I've discovered my passion for robotics here!"
    },
    {
      img: "https://www.oii.ox.ac.uk/wp-content/uploads/2022/10/Sarah-Chen-Headshot-scaled-1.jpg",
      name: 'Sarah Chen',
      location: 'Parent of Grade 5 Student',
      text: "The school has been amazing for my daughter. She's grown so much in confidence and academic skills."
    },
    {
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=facearea&facepad=2",
      name: 'Emma Thompson',
      location: 'Parent of Grade 3 Student',
      text: "The teachers truly care about each child's development. My son has improved so much since joining."
    }
  ];

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="next" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="back" className='back-btn' onClick={slideBackward} />

      <div className="slider">
        <ul>
          {testimonials.map((user, index) => (
            <li key={index} className="slide">
              <div className="user-info">
                <img src={user.img} alt={`user-${index + 1}`} />
                <div>
                  <h3>{user.name}</h3>
                  <span>{user.location}</span>
                </div>
              </div>
              <p>{user.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
