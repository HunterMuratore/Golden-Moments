import Home from './Home'
import About from './About'
import Services from './Services'
import Reviews from './Reviews'

function Landing() {
    return (
        <div className='landing'>
            <Home />
            <About />
            <Services />
            <Reviews />
        </div>
    )
}

export default Landing