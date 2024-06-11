import Home from './Home'
import Services from './Services'
import Reviews from './Reviews'
import Contact from './Contact'

function Landing() {
    return (
        <div className='landing main-padding'>
            <Home />
            <Services />
            <Reviews />
            <Contact />
        </div>
    )
}

export default Landing