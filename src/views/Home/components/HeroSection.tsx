import React, { useState, useEffect } from 'react'
import smallBG from '../../../assets/images/main-bg-small.png'
import { Button } from '@/components/ui'
import { FiArrowRight, FiPlay } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup'

// YouTube video ID for the demo
const YOUTUBE_VIDEO_ID = 'xQl8i2sO_Ls'

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void
    featuresRef: React.RefObject<HTMLElement>
    contactRef: React.RefObject<HTMLElement>
    aboutRef: React.RefObject<HTMLElement>
    faqRef: React.RefObject<HTMLElement>
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
    faqRef,
}) => {
    const [showVideoModal, setShowVideoModal] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [playVideo, setPlayVideo] = useState(false)

    // Ensure the component stays visible
    useEffect(() => {
        setIsVisible(true)
        document.body.classList.add('has-hero-section')

        return () => {
            document.body.classList.remove('has-hero-section')
        }
    }, [])

    // Reset video play state when modal is closed
    useEffect(() => {
        if (!showVideoModal) {
            setPlayVideo(false)
        }
    }, [showVideoModal])

    if (!isVisible) {
        return (
            <div className="min-h-[400px] w-full bg-gradient-to-b from-[#01052f] to-[#0f1c4d]"></div>
        )
    }

    const handleInteraction = (e: React.MouseEvent) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const navigate = useNavigate()

    return (
        <div className="bg-gradient-to-b from-[#01052f] to-[#0f1c4d] w-full relative overflow-hidden min-h-screen">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
                <div className="absolute top-40 right-[20%] w-96 h-96 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
            </div>

            {/* Navigation */}
            <nav className="relative z-10 pt-6 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex items-center justify-between">
                    <div className="text-white text-2xl font-bold">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            HealthTech
                        </span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8 text-gray-300">
                        <button
                            onClick={() => scrollToSection(featuresRef)}
                            className="hover:text-white transition-colors"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection(aboutRef)}
                            className="hover:text-white transition-colors"
                        >
                            About
                        </button>
                        <button
                            onClick={() => scrollToSection(faqRef)}
                            className="hover:text-white transition-colors"
                        >
                            FAQ
                        </button>
                        <button
                            onClick={() => scrollToSection(contactRef)}
                            className="hover:text-white transition-colors"
                        >
                            Contact
                        </button>
                        <button
                            onClick={() => navigate('/hcf/sign-in')}
                            className="hover:text-white transition-colors"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-24 flex flex-col min-h-[calc(100vh-80px)] justify-center">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 space-y-8">
                        <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 font-medium text-sm">
                            AI-Powered Healthcare Solutions
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                AI front office
                            </span>{' '}
                            for healthcare agents
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed">
                            Transform patient engagement and operational
                            efficiency with our AI-powered platform. Create
                            custom healthcare websites, manage patient data, and
                            grow your practice—all in one place.
                        </p>

                        <div className="flex flex-wrap items-center gap-5 pt-4">
                            <Button
                                block={false}
                                variant="solid"
                                onClick={handleInteraction}
                                className="rounded-full text-base py-2.5 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center"
                            >
                                <span className="mr-2">Get Started</span>
                                <FiArrowRight />
                            </Button>

                            <div
                                onClick={(e) => {
                                    handleInteraction(e)
                                    setShowVideoModal(true)
                                }}
                                className="inline-flex items-center bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full py-[14px] px-7 text-white hover:from-blue-400/20 hover:to-purple-400/20 transition-all cursor-pointer"
                            >
                                <FiPlay className="text-blue-400 mr-2" />
                                <span className="bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent font-medium">
                                    Watch Demo
                                </span>
                            </div>
                        </div>

                        {/* Statistics */}
                        <div className="pt-8 border-t border-white/10 mt-8">
                            <p className="text-gray-400 text-sm mb-4">
                                Trusted by healthcare professionals worldwide
                            </p>
                            <div className="flex flex-wrap gap-8 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold text-white">
                                        2,100
                                        <span className="text-blue-400 ml-1">
                                            +
                                        </span>
                                    </h3>
                                    <p className="text-gray-300">
                                        qualified doctors
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white">
                                        1,000
                                        <span className="text-blue-400 ml-1">
                                            +
                                        </span>
                                    </h3>
                                    <p className="text-gray-300">hospitals</p>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-white">
                                        800
                                        <span className="text-blue-400 ml-1">
                                            +
                                        </span>
                                    </h3>
                                    <p className="text-gray-300">
                                        treatment plans
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 mt-16 lg:mt-0">
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-lg rotate-12 bg-blue-600/20 backdrop-blur-xl border border-blue-500/20 z-0"></div>
                            <div className="absolute -left-4 -top-4 w-16 h-16 rounded-lg -rotate-12 bg-purple-600/20 backdrop-blur-xl border border-purple-500/20 z-0"></div>

                            {/* Main image container */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-white/10 z-10">
                                <div className="aspect-[4/3] bg-gradient-to-br from-blue-900/90 to-purple-900/90 p-1">
                                    <div className="h-full w-full rounded-lg overflow-hidden bg-[#01052f]/90 flex items-center justify-center relative">
                                        {/* Video thumbnail with play button overlay */}
                                        <div className="absolute inset-0 z-10">
                                            <img
                                                src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                                                alt="AI Healthcare Dashboard Demo"
                                                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                                            />
                                            {/* Play button overlay */}
                                            <div
                                                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-gradient-to-br from-blue-900/30 to-purple-900/30 transition-all duration-300 hover:from-blue-900/10 hover:to-purple-900/10"
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    e.stopPropagation()
                                                    setShowVideoModal(true)
                                                }}
                                            >
                                                <div className="w-16 h-16 rounded-full bg-blue-500/50 backdrop-blur-sm flex items-center justify-center border border-white/30 transition-transform duration-300 hover:scale-110">
                                                    <FiPlay className="text-white text-2xl ml-1" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Original image as fallback (hidden when thumbnail loads) */}
                                        <img
                                            src={smallBG}
                                            alt="AI Healthcare Dashboard"
                                            className="w-full h-full object-cover opacity-0"
                                        />
                                    </div>
                                </div>

                                {/* Status indicators */}
                                <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-green-400 animate-pulse z-20"></div>
                                <div className="absolute bottom-6 left-6 w-3 h-3 rounded-full bg-blue-400 animate-pulse z-20"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
                    <button
                        onClick={() => scrollToSection(featuresRef)}
                        className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
                    >
                        <span className="text-xs mb-2">Explore More</span>
                        <div className="w-5 h-9 rounded-full border-2 border-gray-400 flex justify-center pt-1">
                            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Video Modal */}
            {showVideoModal && (
                <div
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
                    onClick={() => setShowVideoModal(false)}
                >
                    <div
                        className="relative bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowVideoModal(false)}
                            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 z-10"
                        >
                            ✕
                        </button>
                        <div className="aspect-video relative">
                            {!playVideo && (
                                <div
                                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                                    onClick={() => setPlayVideo(true)}
                                >
                                    <img
                                        src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`}
                                        alt="YouTube Thumbnail"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
                                        <FiPlay className="text-white text-6xl" />
                                    </div>
                                </div>
                            )}
                            {playVideo && (
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1`}
                                    title="Product Demo"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HeroSection
