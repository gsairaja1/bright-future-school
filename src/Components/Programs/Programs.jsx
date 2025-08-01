import React from 'react'
import './Programs.css'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop" alt="Science Lab" />
        <div className="caption">
          <img src="https://img.icons8.com/color/48/000000/microscope.png" alt="Science Icon" />
          <p>Science & Discovery</p>
        </div>
      </div>

      <div className="program">
        <img src="https://wallpapercave.com/wp/8iAP1eI.jpg" alt="Mathematics" />
        <div className="caption">
          <img src="https://img.icons8.com/color/48/000000/math.png" alt="Math Icon" />
          <p>Mathematics & Logic</p>
        </div>
      </div>
      <div className="program">
        <img src="https://5minuteenglish.com/wp-content/uploads/2024/03/Art-and-Creativity.webp" alt="Arts & Creativity" />
        <div className="caption">
          <img src="https://img.icons8.com/color/48/000000/art.png" alt="Art Icon" />
          <p>Arts & Creativity</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
