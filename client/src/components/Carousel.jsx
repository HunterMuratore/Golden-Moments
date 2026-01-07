import { useState, useEffect } from 'react'

import catering from '../assets/images/catering.jpg'
import graduation from '../assets/images/graduation.jpg'
import laser_tag from '../assets/images/laser_tag.jpg'
import silent_dj from '../assets/images/silent_dj.jpg'

const images = [
    { src: catering, alt: 'Catering' },
    { src: laser_tag, alt: 'Laser Tag' },
    { src: graduation, alt: 'Graduation Parties' },
    { src: silent_dj, alt: 'Silent DJ Party' },
]

function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
    }

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    const goToSlide = (index) => {
        setCurrentImageIndex(index)
    }

    useEffect(() => {
        const timer = setTimeout(goToNextImage, 5000)
        return () => clearTimeout(timer)
    }, [currentImageIndex])

    return (
        <div className="carousel-container lg:w-full">
            {/* Render only the current image */}
            <div className="relative w-full lg:h-[600px] md:h-[500px] sm:h-[450px] h-[400px] overflow-hidden">
                <img
                    src={images[currentImageIndex].src}
                    alt={images[currentImageIndex].alt}
                    className="carousel-img"
                />
            </div>
            {/* Navigation dots */}
            <div className="carousel-dots mt-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel
