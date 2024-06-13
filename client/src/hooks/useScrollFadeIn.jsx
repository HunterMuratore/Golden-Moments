import { useRef, useState, useEffect } from 'react'
import { useSpring } from 'react-spring'

function useScrollFadeIn() {
    const [isVisible, setVisible] = useState(false)
    const ref = useRef(null)

    const props = useSpring({
        opacity: isVisible ? 1 : 0,
        reset: isVisible,
        config: { duration: 1000 }
    })

    useEffect(() => {
        const currentElement = ref.current
        if (currentElement) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            setVisible(true)
                        } else {
                            setVisible(false)
                        }
                    })
                },
                {
                    root: null,
                    threshold: 0.20,
                }
            )

            observer.observe(currentElement)

            return () => {
                if (currentElement) {
                    observer.disconnect()
                }
            }
        }
    }, []) 

    return [ref, props]
}

export default useScrollFadeIn
