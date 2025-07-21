import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero '>
        <div className="hero-text">
            <h1>We Ensure better education for a better world</h1>
            <p> Our cutting-edge curriculam  is degined  to empower student
                with the knowledge  skills and experinced need ed to excel in
                the dynamic  fields of education</p>
                <button className='bolt1'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero