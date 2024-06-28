import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const testimonials = [
    { name: "Elyse", quote: "Thank you!! And thanks so much for your help today! The temple should be recommending you to mitzvah families because I was so not stressed knowing you were handling everything!" },
]

function Reviews() {
    const isDesktop = useMediaQuery({ minWidth: 1001 })
    const isTablet = useMediaQuery({ minWidth: 651, maxWidth: 1000 })
    const [currentIndex, setCurrentIndex] = useState(0)

    // let visibleCount = isDesktop ? 3 : isTablet ? 2 : 1

    // function next() {
    //     setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length)
    // }

    // function prev() {
    //     setCurrentIndex(prevIndex => (prevIndex - 1 + testimonials.length) % testimonials.length)
    // }

    // function getVisibleTestimonials() {
    //     const items = []
    //     for (let i = 0; i < visibleCount; i++) {
    //         const index = (currentIndex + i) % testimonials.length
    //         items.push(testimonials[index])
    //     }
    //     return items
    // }

    return (
        <section id="reviews" className="reviews main-padding my-20">
            <h1 className="font-bold sm:text-[52px] text-[36px]">Reviews</h1>
            <h2 className="font-semibold sm:text-[24px] text-[16px] pl-3">Hear What Our Happy Clients Have to Say</h2>
            <div className="testimonies flex flex-col items-center justify-center my-10">
                <div className='testies-zone flex overflow-hidden'>
                    {testimonials.map((testi, index) => (
                        <div key={index} className='testi xl:w-[350px] w-[300px] rounded'>
                            <blockquote className='text-center'>
                                "{testi.quote}"
                            </blockquote>
                            <p>- {testi.name}</p>
                        </div>
                    ))}
                </div>
                {/* <div className='flex mt-2 gap-10'>
                    <button onClick={prev} className="arrow-button"><FontAwesomeIcon icon={faArrowLeft}/></button>
                    <button onClick={next} className="arrow-button"><FontAwesomeIcon icon={faArrowRight}/></button>
                </div> */}
            </div>
        </section>
    )
}

export default Reviews
