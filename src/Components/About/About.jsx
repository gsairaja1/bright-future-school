import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({ setPlayState }) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src="https://tse1.mm.bing.net/th/id/OIP.xG2-aIzmuZl3266Y4MyUDAHaE8?r=0&cb=thvnext&rs=1&pid=ImgDetMain&o=7&rm=3" alt=" " className='about-img' />
        <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
      </div>
      <div className="about-right">
        <h3>ABOUT OUR SCHOOL </h3>
        <h2>Nurturing Young Minds for Tomorrow's Success</h2>
        <p>
          Our school is committed to providing a nurturing and stimulating environment where every child can thrive. We believe in fostering curiosity, creativity, and critical thinking skills that will serve our students throughout their lives.
        </p>

        <p>
          With dedicated teachers and modern facilities, we offer a comprehensive curriculum that balances academic excellence with character development. Our approach focuses on personalized learning, ensuring each student receives the attention and support they need to reach their full potential.
        </p>

        <p>
          Beyond the classroom, we encourage participation in sports, arts, and community service, helping students develop into well-rounded individuals who are ready to contribute positively to society.
        </p>
      </div>
    </div>

  )
}

export default About