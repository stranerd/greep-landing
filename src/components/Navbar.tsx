import Button from './Button';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='nav'>
        <div><img src={logo} alt="greep logo" /></div>
        <Button text="Get Started" />
    </div>
  )
}

export default Navbar;