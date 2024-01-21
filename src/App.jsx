import 'bootstrap/dist/css/bootstrap.min.css';
import  Menu from './components/Menu/Menu';
import Hero from './sections/Hero/Hero';
import Services from './sections/services/Services';
import CTA from './sections/CTA/CTA';
import CaseStudies from './sections/CaseStudies/CaseStudies';
import Process from './sections/Process/Process';
import Team from './sections/Team/Team';


function App() {

  return (
    <div className='container'>
      <Menu/>
      <Hero/>
      <Services/>
      <CTA/>
      <CaseStudies />
      <Process />
      <Team />
    </div>
  )
}

export default App
