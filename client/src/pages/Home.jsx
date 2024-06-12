import Carousel from '../components/Carousel'

function Home() {
    return (
        <section id="home" className="home text-center mt-5 py-20">
            <h1 className="mb-2 lg:text-[96px] md:text-[80px] sm:text-[64px] text-[50px]">Golden Moments</h1>
            <h2 className="mb-2 lg:text-[36px] md:text-[30px] sm:text-[24px] text-[20px]">Short Golden Moments Description</h2>

            <button className="my-btn my-7 sm:my-10">Contact</button>

            <div className='carousel mx-auto'>
                <Carousel />
            </div>
        </section>
    )
}

export default Home
