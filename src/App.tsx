import './App.css'
import Navbar from './components/Navbar';
import Hero from './container/hero'


function App() {

  return (
    <>
      <div>
      <svg className='svg' xmlns='http://www.w3.org/2000/svg' width='100%' height='100%' ><rect fill='#555555' width='24' height='24'/><defs><linearGradient id='a' x1='0' x2='0' y1='0' y2='1' gradientTransform='rotate(0,0.5,0.5)'><stop offset='0'  stop-color='#000000'/><stop offset='1'  stop-color='#000000'/></linearGradient></defs><pattern id='b'  width='13' height='13' patternUnits='userSpaceOnUse'><circle  fill='#555555' cx='6.5' cy='6.5' r='6.5'/></pattern><rect width='100%' height='100%' fill='url(#a)'/><rect width='100%' height='100%' fill='url(#b)' fill-opacity='0.12'/></svg>
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App;
