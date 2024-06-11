import Carousel from '../components/Carousel'

function Home() {
    return (
        <section id="home" className="home text-center py-20">
            <h1 className="mb-2">Golden Moments</h1>
            <h2>Short Golden Moments Description</h2>

            <button className="my-btn my-10">Contact</button>

            <div className='carousel mx-auto'>
                <Carousel />
            </div>
        </section>
    )
}

export default Home
