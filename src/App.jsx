import 'bootstrap/dist/css/bootstrap.min.css';
import  Menu from './components/Menu/Menu';
import Hero from './sections/Hero/Hero';
import Services from './sections/services/Services';
import CTA from './sections/CTA/CTA';


function App() {

  return (
    <div className='container'>
      <Menu/>
      <Hero/>
      <Services/>
      <CTA/>
    </div>
  )
}

export default App
