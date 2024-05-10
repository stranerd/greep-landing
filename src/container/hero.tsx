import Button from '../components/Button'
import './hero.scss'

const Hero = () => {
  return (
    <div className="wrapper">
        <div className='image-cards'>
        </div>
        <div className="content">
            <h1>Craft charming, face-to-face payment experiences</h1>
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