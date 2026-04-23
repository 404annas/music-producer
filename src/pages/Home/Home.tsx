import About from '@/components/Home/About'
import BestSongs from '@/components/Home/BestSongs'
import Contact from '@/components/Home/Contact'
import Events from '@/components/Home/Events'
import Hero from '@/components/Home/Hero'
import Projects from '@/components/Home/Projects'
import Scroller from '@/components/Home/Scroller'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Projects />
        <Scroller />
        <BestSongs />
        <Events />
        <Contact />
    </div>
  )
}

export default Home