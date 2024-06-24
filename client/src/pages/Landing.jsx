import Home from './Home'
import About from './About'
import Services from './Services'
import Reviews from './Reviews'
import Contact from './Contact'

function Landing() {
    return (
        <div className='landing'>
            <Home />
            <About />
            <Services />
            <Reviews />
            <Contact />
        </div>
    )
}

export default Landing