import About from '@/components/Home/About'
import Contact from '@/components/Home/Contact'
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
        <Contact />
    </div>
  )
}

export default Home