import React, { useState } from 'react'
import './Campus.css'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const schoolAreas = [
    {
      name: "School Hall",
      image: "https://sh-prod-storage.s3.amazonaws.com/uploads/image/image/25078/big_HOW_Main_Hall_59_.jpg",
      description: "Our spacious hall hosts assemblies, performances, and special events"
    },
    {
      name: "Library",
      image: "https://www.mbbarch.com/wp-content/uploads/2020/11/20201003_MBBTrinity_0825_RetouchedFlat2-1920x1280.jpg",
      description: "A quiet space for reading, research, and discovery"
    },
    {
      name: "Science Lab",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
      description: "Hands-on experiments and scientific exploration"
    },
    {
      name: "Sports Ground",
      image: "https://tse1.mm.bing.net/th/id/OIP.YNP1W0OKEdvXqYFFhMVbWQHaD4?r=0&cb=thvnext&rs=1&pid=ImgDetMain&o=7&rm=3",
      description: "Where students develop teamwork and physical fitness"
    },
    {
      name: "Canteen",
      image: "https://www.sustainweb.org/resources/images/schools_children/school-canteen-c-Monkey-Business-Images-shutterstock.jpg",
      description: "Healthy meals and social time with friends"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === schoolAreas.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? schoolAreas.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className='campus'>
      <div className="school-tour">
        <div className="carousel-container">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            <img src={white_arrow} alt="Previous" style={{ transform: 'rotate(180deg)' }} />
          </button>

          <div className="carousel-slide">
            <img
              src={schoolAreas[currentIndex].image}
              alt={schoolAreas[currentIndex].name}
              className="carousel-image"
            />
            <div className="carousel-overlay">
              <h3>{schoolAreas[currentIndex].name}</h3>
              <p>{schoolAreas[currentIndex].description}</p>
            </div>
          </div>

          <button className="carousel-btn next-btn" onClick={nextSlide}>
            <img src={white_arrow} alt="Next" />
          </button>
        </div>

        <div className="carousel-indicators">
          {schoolAreas.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      <button className='btn dark-btn'>Take a Virtual Tour <img src={white_arrow} alt="" /> </button>
    </div>
  )
}

export default Campus