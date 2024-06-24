import { animated } from 'react-spring'
import { useMediaQuery } from 'react-responsive'

import useScrollFadeIn from '../hooks/useScrollFadeIn.jsx'

import birthday_cake from '../assets/images/birthday_cake.jpg'
import buffet from '../assets/images/buffet.jpeg'
import buffet2 from '../assets/images/buffet.png'
import catering from '../assets/images/catering.jpg'
import escape_room from '../assets/images/escape_room.jpg'
import event_consultation from '../assets/images/event_consultation.jpg'
import foam_party from '../assets/images/foam_party.jpg'
import kiddish from '../assets/images/kiddish.jpg'
import ice_cream from '../assets/images/ice_cream_2.jpg'
import laser_tag from '../assets/images/laser_tag.jpg'
import photo_booth from '../assets/images/photo_booth.jpg'
import serving from '../assets/images/serving.jpg'
import shabbat from '../assets/images/shabbat.jpg'
import setting_table from '../assets/images/setting_table.jpg'
import silent_dj from '../assets/images/silent_dj.jpg'
import graduation from '../assets/images/graduation.jpg'
import chair from '../assets/images/chair.jpg'

const services = [
    {
        name: 'Catering',
        image: catering
    },
    {
        name: 'Serving / Clean up',
        image: serving
    },
    {
        name: 'Event Consultation',
        image: event_consultation
    },
    {
        name: 'Kiddish Luncheons',
        image: kiddish
    },
    {
        name: 'Shabbat Dinners',
        image: shabbat
    },
    {
        name: 'Kosher Buffets',
        image: buffet
    },
    {
        name: 'Silent DJ',
        image: silent_dj
    },
    {
        name: 'Foam Parties',
        image: foam_party
    },
    {
        name: 'Laser Tag',
        image: laser_tag
    },
    {
        name: 'Birthday Parties',
        image: birthday_cake
    },
    {
        name: 'Ice Cream Truck',
        image: ice_cream
    },
    {
        name: 'Graduation Parties',
        image: graduation
    },
    {
        name: 'Photo Booth',
        image: photo_booth
    },
    {
        name: 'Escape Room',
        image: escape_room
    },
    {
        name: 'Chair Rental',
        image: chair
    },
]

const servicesSmall = [
    {
        name: 'Catering',
        image: catering
    },
    {
        name: 'Silent DJ',
        image: silent_dj
    },
    {
        name: 'Foam Parties',
        image: foam_party
    },
    {
        name: 'Laser Tag',
        image: laser_tag
    },
    {
        name: 'Ice Cream Truck',
        image: ice_cream
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
    const isSmallScreen = useMediaQuery({ maxWidth: 640 })

    return (
        <section id="services" className="services main-padding my-20">
            <h1 className="font-bold sm:text-[42px] text-[36px]">Services</h1>
            <h2 className="font-semibold sm:text-[20px] text-[16px] pl-3 mb-5">From Elegant Catering to Exciting Parties, We Do It All</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {(isSmallScreen ? servicesSmall : services).map((service, index) => (
                    <div key={index} className={columnClasses[index]}>
                        <ServiceCard service={service} className={columnClasses[index]} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services
