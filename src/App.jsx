//Styles
import './App.css'

// React imports
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './scrollToTop'

//Components
import Header from './components/header'
import Footer from './components/footer'

//Pages
import Home from './pages/Home/home'
import About from './pages/About/about'
import Contact from './pages/Contact/contact'
import FormSubmission from './pages/FormSubmission/formsubmission'

// Portfolio Pages
import PatrickLemmerDev from './pages/Work/PatrickLemmerDev/patricklemmerdev'
import HealthCoach from './pages/Work/HealthCoach/healthcoach'
import Confido from './pages/Work/Confido/confido'
import AllForWolves from './pages/Work/AllForWolves/allforwolves'

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="form-submission" element={<FormSubmission />} />
          <Route path="work/patricklemmerdev" element={<PatrickLemmerDev />} />
          <Route path="work/confido-app" element={<Confido />} />
          <Route path="work/all-for-wolves" element={<AllForWolves />} />
          <Route path="work/health-coach" element={<HealthCoach />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
