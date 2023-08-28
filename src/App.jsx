import "./styleguide.css";
import './App.css'
import Header from './components/Header'
import Reasons from './components/Reasons'
import Steps from './components/Steps'
import Features from './components/Features'
import Download from './components/Download'
import Support from './components/Support'
import Partners from './components/Partners'
import Footer from './components/Footer'


function App() {
  return (
    <div className="landing-page">
     <div className="div">
     <Header/> 
     <Reasons/>
     <Steps/>
     <Features/>
     <Download/>
     <Support/>
     <Partners/>
     <Footer/>
     </div>
    </div>
  )
}

export default App
