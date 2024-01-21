import 'bootstrap/dist/css/bootstrap.min.css';
import  Menu from './components/Menu/Menu';
import Hero from './sections/Hero/Hero';
import Services from './sections/services/Services';


function App() {

  return (
    <div className='container'>
      <Menu/>
      <Hero/>
      <Services/>
    </div>
  )
}

export default App
