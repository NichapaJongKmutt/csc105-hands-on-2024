import './App.css'
import Home from './pages/home';
import Gallery from './pages/gallery';
import AboutMe from './pages/aboutme';
import NavBar from './NavBar';
function App() {
  return (
    <div>
      <NavBar/>
      <div id='home'><Home/></div>
      <div id='aboutme'><AboutMe/></div>
      <div id='gallery'><Gallery/></div>
    </div>
  )
}

export default App
