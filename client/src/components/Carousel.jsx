import { useState, useEffect } from 'react'

import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'

const images = [
    { src: img1, alt: 'img1' },
    { src: img2, alt: 'img2' },
    { src: img4, alt: 'img3' },
    { src: img3, alt: 'img4' },
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
