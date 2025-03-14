import './App.css'
import Home from './pages/home';
import Gallery from './pages/gallery';
import AboutMe from './pages/aboutme';
import NavBar from './NavBar';
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <AboutMe/>
      <Gallery/>
    </div>
  )
}

export default App
