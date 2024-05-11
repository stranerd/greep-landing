import Button from "../components/Button";
import "./hero.scss";
import greepvid from "../assets/greepvd.mp4";

const Hero = () => {
  return (
    <div className="wrapper">
      <div className="image-cards">
        <video loop autoPlay muted>
          <source src={greepvid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <span className="powered">Powered by Stellar Network</span>
        <h1>
          <span className="animate">Decentralized Payments Infrastructure</span>
        </h1>
        <p>
        Process payments real time leveraging the Stellar Network on Greep in a versatile retail setting 
 <br /> Earn royalty Reward in real Time
        </p>
        <div className="cta">
          <Button text="Pre-order" />
          <button className="btn">Learn more</button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
