import React, { useEffect, useRef, lazy, Suspense, useState } from 'react'
import HeroSection from './components/HeroSection'
// Added Code: Implementing lazy loading for performance optimization to reduce initial load time
const FeaturesGrid = lazy(() => import('./components/FeaturesGrid'))
const InfoSection = lazy(() => import('./components/InfoSection'))
const HomeFAQs = lazy(() => import('./components/HomeFAQ'))
const ContactForm = lazy(() => import('./components/ContactForm'))
const MainFooter = lazy(() => import('./components/MainFooter'))

// Added Code: Created a loading component for suspense fallback
const SectionLoader = () => (
    <div className="w-full py-16 flex justify-center items-center">
        <div className="animate-pulse flex space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-3 h-3 bg-primary rounded-full"></div>
        </div>
    </div>
)

const Home: React.FC = () => {
    // Added state to ensure stable rendering
    const [isReady, setIsReady] = useState(false)
    const contactRef = useRef(null)
    const aboutRef = useRef(null)
    const featuresRef = useRef(null)
    const faqRef = useRef(null)

    // Updated Code: Changed from FqRef to more semantic featuresRef and faqRef
    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        // Set component as ready after initial render
        setIsReady(true)

        let lastScrollTop = 0
        const handleScroll = () => {
            const hcf = document.querySelector('.hcf-profile')
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop

            if (scrollTop > lastScrollTop) {
                if (hcf) {
                    hcf.classList.add('hcf-profile-fixed')
                }
            } else if (scrollTop < lastScrollTop) {
                if (hcf) {
                    hcf.classList.remove('hcf-profile-fixed')
                }
            }

            lastScrollTop = scrollTop
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll)

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Return early with loading state until component is ready
    if (!isReady) {
        return <SectionLoader />
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section - Wrapped in a div to ensure stable rendering */}
            <div className="hero-section-wrapper">
                <HeroSection
                    scrollToSection={scrollToSection}
                    featuresRef={featuresRef}
                    contactRef={contactRef}
                    aboutRef={aboutRef}
                    faqRef={faqRef}
                />
            </div>

            {/* Lazy loaded sections below the fold */}
            <Suspense fallback={<SectionLoader />}>
                {/* Added Code: Improved section transitions with reveal animations */}
                <section
                    id="features"
                    className="bg-gradient-to-b from-[#eff6ff] to-[#f9fafb] relative"
                    ref={featuresRef}
                >
                    <FeaturesGrid />
                </section>

                <section
                    id="about"
                    className="bg-white relative"
                    ref={aboutRef}
                >
                    <InfoSection />
                </section>

                <section
                    id="faq"
                    className="bg-gradient-to-b from-[#f9fafb] to-white relative"
                    ref={faqRef}
                >
                    <HomeFAQs />
                </section>

                <section
                    id="contact"
                    className="bg-white relative"
                    ref={contactRef}
                >
                    <ContactForm />
                </section>

                <footer className="mt-auto bg-gray-50 border-t border-gray-200">
                    <MainFooter />
                </footer>
            </Suspense>
        </div>
    )
}

export default Home
