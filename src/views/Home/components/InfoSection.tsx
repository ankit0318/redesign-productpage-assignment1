import React from 'react'
import aboutUs from '@/assets/images/about_us.gif'
import mission from '@/assets/images/our_mission.gif'
import challenges from '@/assets/images/challenges_solve.gif'
import { motion } from 'framer-motion' // Assuming framer-motion is installed, if not, we can fall back to CSS animations

// Added Code: Improved interface with better typing
interface IconSectionProps {
    icon: React.ReactNode
    title: string
    description: string
    bgColor?: string
}

const IconSection: React.FC<IconSectionProps> = ({
    icon,
    title,
    description,
    bgColor = 'bg-blue-100',
}) => (
    <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
            <div className={`p-4 ${bgColor} rounded-2xl shadow-sm`}>{icon}</div>
        </div>
        <div>
            <h4 className="font-semibold text-gray-900 mb-1 text-lg">
                {title}
            </h4>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
)

// Added Code: Created a reusable content section component
interface ContentSectionProps {
    title: string
    content: React.ReactNode
    image: string
    imagePosition: 'left' | 'right'
    icon1: React.ReactNode
    icon2: React.ReactNode
    iconTitle1: string
    iconDesc1: string
    iconTitle2: string
    iconDesc2: string
}

const ContentSection: React.FC<ContentSectionProps> = ({
    title,
    content,
    image,
    imagePosition,
    icon1,
    icon2,
    iconTitle1,
    iconDesc1,
    iconTitle2,
    iconDesc2,
}) => (
    <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Image Section */}
        <div
            className={`w-full lg:w-2/5 ${
                imagePosition === 'right' ? 'lg:order-last' : ''
            }`}
        >
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
                <div className="bg-white p-2 rounded-2xl shadow-lg relative transform rotate-0 group-hover:rotate-0 transition-transform duration-300">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover rounded-xl"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-3/5">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    {title}
                </h2>
                <div className="h-1.5 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            <div className="space-y-6">{content}</div>

            {/* Feature Points with improved design */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <IconSection
                    icon={icon1}
                    title={iconTitle1}
                    description={iconDesc1}
                    bgColor="bg-blue-50"
                />
                <IconSection
                    icon={icon2}
                    title={iconTitle2}
                    description={iconDesc2}
                    bgColor="bg-purple-50"
                />
            </div>
        </div>
    </div>
)

const InfoSection: React.FC = () => {
    return (
        <div className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
                        Our Mission & Values
                    </h2>
                    <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Transforming Healthcare Facilitation
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        We're dedicated to revolutionizing medical tourism
                        through AI-powered solutions.
                    </p>
                </div>

                {/* About Us Section */}
                <div className="space-y-32">
                    {/* About Us */}
                    <ContentSection
                        title="About Us"
                        content={
                            <>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    We are a pioneering AI-driven platform
                                    focused on revolutionizing the medical
                                    tourism industry. By addressing
                                    inefficiencies and disorganization, we
                                    empower healthcare facilitators to modernize
                                    their operations, attract more patients, and
                                    deliver seamless, personalized care across
                                    borders.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Our cutting-edge solutions are designed to
                                    streamline processes and enhance the overall
                                    patient experience.
                                </p>
                            </>
                        }
                        image={aboutUs}
                        imagePosition="left"
                        icon1={
                            <svg
                                className="w-6 h-6 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        }
                        icon2={
                            <svg
                                className="w-6 h-6 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                        }
                        iconTitle1="Modern Solutions"
                        iconDesc1="Leveraging cutting-edge AI technology to transform healthcare delivery across borders."
                        iconTitle2="Patient-Centric"
                        iconDesc2="Creating personalized healthcare experiences that prioritize individual patient needs."
                    />

                    {/* Our Mission */}
                    <ContentSection
                        title="Our Mission"
                        content={
                            <>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Our mission is to simplify the complex
                                    medical tourism process by leveraging
                                    advanced AI tools that optimize healthcare
                                    facilitators operations, maximize revenue
                                    opportunities, and provide patients with
                                    personalized and stress-free treatment
                                    journeys.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    We strive to become the leading platform for
                                    healthcare tourism management and digital
                                    transformation.
                                </p>
                            </>
                        }
                        image={mission}
                        imagePosition="right"
                        icon1={
                            <svg
                                className="w-6 h-6 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        }
                        icon2={
                            <svg
                                className="w-6 h-6 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                />
                            </svg>
                        }
                        iconTitle1="AI-Powered Solutions"
                        iconDesc1="Optimizing healthcare operations with sophisticated artificial intelligence."
                        iconTitle2="Growth Focus"
                        iconDesc2="Strategically maximizing revenue opportunities and driving business expansion."
                    />

                    {/* Challenges We Solve */}
                    <ContentSection
                        title="The Challenges We Solve"
                        content={
                            <>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Medical tourism, especially in India, is
                                    plagued by disorganization and inefficiency.
                                    Facilitators often rely on outdated methods,
                                    leading to delayed bookings, inadequate
                                    patient support, and missed growth
                                    opportunities.
                                </p>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Our platform addresses these pain points by
                                    streamlining lead management and improving
                                    operational efficiency for facilitators and
                                    hospitals alike.
                                </p>
                            </>
                        }
                        image={challenges}
                        imagePosition="left"
                        icon1={
                            <svg
                                className="w-6 h-6 text-blue-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        }
                        icon2={
                            <svg
                                className="w-6 h-6 text-purple-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                                />
                            </svg>
                        }
                        iconTitle1="Efficient Operations"
                        iconDesc1="Creating streamlined booking and management systems for healthcare facilitators."
                        iconTitle2="Enhanced Patient Support"
                        iconDesc2="Implementing improved communication systems for better patient experiences."
                    />
                </div>

                {/* Added Code: Stats section for enhanced credibility */}
                <div className="mt-32 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl shadow-lg p-8 md:p-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-blue-600">
                                94%
                            </div>
                            <p className="mt-2 text-gray-600">
                                Customer Satisfaction
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-blue-600">
                                45%
                            </div>
                            <p className="mt-2 text-gray-600">
                                Operational Efficiency Increase
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-blue-600">
                                3.5x
                            </div>
                            <p className="mt-2 text-gray-600">
                                Patient Conversion Rate
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-blue-600">
                                28%
                            </div>
                            <p className="mt-2 text-gray-600">Cost Reduction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
