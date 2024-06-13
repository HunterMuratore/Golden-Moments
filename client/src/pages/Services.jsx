import { animated } from 'react-spring'

import useScrollFadeIn from '../hooks/useScrollFadeIn.jsx'

import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.jpg'

const services = [
    {
        name: 'Service 1',
        image: img1
    },
    {
        name: 'Service 2',
        image: img2
    },
    {
        name: 'Service 3',
        image: img3
    },
    {
        name: 'Service 4',
        image: img4
    },
    {
        name: 'Service 5',
        image: img1
    },
    {
        name: 'Service 6',
        image: img2
    },
    {
        name: 'Service 7',
        image: img3
    },
    {
        name: 'Service 8',
        image: img4
    },
    {
        name: 'Service 9',
        image: img1
    },
    {
        name: 'Service 10',
        image: img2
    },
    {
        name: 'Service 11',
        image: img3
    },
    {
        name: 'Service 12',
        image: img4
    },
    {
        name: 'Service 13',
        image: img2
    },
    {
        name: 'Service 14',
        image: img3
    },
    {
        name: 'Service 15',
        image: img4
    },
]

const columnClasses = [
    'col-span-1 md:col-span-2 lg:col-span-2', // Service 1
    'col-span-1 md:col-span-1 lg:col-span-1', // Service 2
    'col-span-1 md:col-span-1 lg:col-span-1', // Service 3
    'col-span-1 md:col-span-1 lg:col-span-1', // Service 4
    'col-span-1 md:col-span-1 lg:col-span-1', // Service 5
    'col-span-1 md:col-span-2 lg:col-span-1', // Service 6
    'col-span-1 md:col-span-1 lg:col-span-2', // Service 7
    'col-span-1 md:col-span-1 lg:col-span-1', // Service 8
    'col-span-1 md:col-span-1 lg:col-span-1', // Service 9
    'col-span-1 md:col-span-1 lg:col-span-1', // Service 10
    'col-span-1 md:col-span-2 lg:col-span-2', // Service 11
    'col-span-1 md:col-span-1 lg:col-span-1', // Service 12
    'col-span-1 md:col-span-1 lg:col-span-1', // Service 13
    'col-span-1 md:col-span-1 lg:col-span-1', // Service 14
    'col-span-1 md:col-span-1 lg:col-span-1', // Service 15
]

function ServiceCard({ service }) {
    const [testimoniesRef, testimoniesProps] = useScrollFadeIn()

    return (
        <animated.div
            ref={testimoniesRef}
            style={{
                ...testimoniesProps,
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="relative h-64 w-full bg-cover bg-center"
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h3 className="text-white font-bold text-xl">{service.name}</h3>
            </div>
        </animated.div>
    )
}

function Services() {
    return (
        <section id="services" className="services main-padding my-20">
            <h1 className="font-bold sm:text-[42px] text-[36px]">Services</h1>
            <h2 className="font-semibold sm:text-[20px] text-[16px] pl-3 mb-5">Subtitle if needed</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {services.map((service, index) => (
                    <div key={index} className={columnClasses[index]}>
                        <ServiceCard service={service} className={columnClasses[index]} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services
