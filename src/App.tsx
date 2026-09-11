import './App.css'
import Navbar from './components/navbar.tsx'
import Banner from './components/banner.tsx'
import Footer from './components/footer.tsx'
import Technologies from './components/techstack/technologies.tsx'
import Explore from './components/explore.tsx'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      
      <Explore />
      <Technologies />
      <Footer />
      
    </>
  )
}

export default App
