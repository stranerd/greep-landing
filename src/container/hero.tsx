import Button from '../components/Button'
import './hero.scss'
import greepvid from "../assets/greepvd.mp4"

const Hero = () => {
  return (
    <div className="wrapper">
        <div className='image-cards'>
        <video loop autoPlay muted>
        <source src={greepvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
        <div className="content">
            <h1><span className="animate">Craft charming, face-to-face payment experiences</span></h1>
            <p>Greep Mobile POS: DePIN payments Network for Merchants: Empowers businesses to craft personalized, seamless, and in-store payment experiences that foster customer loyalty and drive repeat business</p>
            <div className='cta'>
                <Button text="Get Started" />
                <button className='btn'>Learn more</button>
            </div>
            <div>
            
            </div>
        </div>
    </div>
  )
}

export default Hero