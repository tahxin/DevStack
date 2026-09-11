import './App.css'
import Navbar from './components/navbar.tsx'
import Banner from './components/banner.tsx'
import Footer from './components/footer.tsx'
import Technologies from './components/techstack/technologies.tsx'
import Explore from './components/explore.tsx'
import Mystack from './components/mystack.tsx'
import { useStack } from './hooks/useStack.ts'

function App() {
  const { stack, addToStack, removeFromStack, clearStack } = useStack()

  return (
    <>
      <Navbar />
      <Banner />
      <Explore />
      <div className="flex flex-col md:flex-row">
        <Technologies onAdd={addToStack} />
        <Mystack
          stack={stack}
          onRemove={removeFromStack}
          onRemoveAll={clearStack}
        />
      </div>
      <Footer />
    </>
  )
}

export default App
