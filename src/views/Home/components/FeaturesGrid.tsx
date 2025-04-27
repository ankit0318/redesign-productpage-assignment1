import React, { useState } from 'react'
import {
    BiCreditCard,
    BiGlobeAlt,
    BiMessageSquare,
    BiSearch,
    BiTrendingUp,
} from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import { FaUserSecret } from 'react-icons/fa'
import { FiFileText } from 'react-icons/fi'
import { LuLanguages } from 'react-icons/lu'

interface Solution {
    icon: React.ReactNode
    title: string
    description: string
    color: string
    gradient: string
    category: 'engagement' | 'operations' | 'analysis'
}

const solutions: Solution[] = [
    {
        icon: <BiGlobeAlt size={24} />,
        title: 'Custom AI-Powered Website',
        description:
            'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.',
        color: 'bg-blue-500',
        gradient: 'from-blue-400 to-blue-600',
        category: 'engagement',
    },
    {
        icon: <FaUserSecret size={24} />,
        title: 'Enhanced Patient Conversion',
        description:
            'Smart conversion optimization tools to turn visitors into patients with personalized experiences.',
        color: 'bg-purple-500',
        gradient: 'from-purple-400 to-purple-600',
        category: 'engagement',
    },
    {
        icon: <BiMessageSquare size={24} />,
        title: 'Real-Time Query Handling',
        description:
            'Instant response system for patient inquiries with AI-powered chat support.',
        color: 'bg-green-500',
        gradient: 'from-green-400 to-green-600',
        category: 'operations',
    },
    {
        icon: <FiFileText size={24} />,
        title: 'Medical Report Analysis',
        description:
            'Advanced AI analysis of medical reports for quick and accurate patient assessments.',
        color: 'bg-orange-500',
        gradient: 'from-orange-400 to-orange-600',
        category: 'analysis',
    },
    {
        icon: <BiTrendingUp size={24} />,
        title: 'Improved Lead Generation',
        description:
            'Data-driven lead generation strategies to attract and engage potential patients.',
        color: 'bg-pink-500',
        gradient: 'from-pink-400 to-pink-600',
        category: 'engagement',
    },
    {
        icon: <BsDatabase size={24} />,
        title: 'Comprehensive Healthcare Database',
        description:
            'Extensive medical information database for accurate patient guidance and support.',
        color: 'bg-indigo-500',
        gradient: 'from-indigo-400 to-indigo-600',
        category: 'analysis',
    },
    {
        icon: <LuLanguages size={24} />,
        title: 'Multilingual Support',
        description:
            'Breaking language barriers with comprehensive multilingual communication tools.',
        color: 'bg-red-500',
        gradient: 'from-red-400 to-red-600',
        category: 'operations',
    },
    {
        icon: <BiCreditCard size={24} />,
        title: 'Seamless Payment Handling',
        description:
            'Secure and efficient payment processing for medical services globally.',
        color: 'bg-teal-500',
        gradient: 'from-teal-400 to-teal-600',
        category: 'operations',
    },
    {
        icon: <BiSearch size={24} />,
        title: 'Marketing And SEO Support',
        description:
            'Optimized digital presence with advanced SEO and marketing strategies.',
        color: 'bg-cyan-500',
        gradient: 'from-cyan-400 to-cyan-600',
        category: 'engagement',
    },
]

const FeaturesGrid: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all')

    const filteredSolutions =
        activeFilter === 'all'
            ? solutions
            : solutions.filter((solution) => solution.category === activeFilter)

    const categories = [
        { id: 'all', label: 'All Features' },
        { id: 'engagement', label: 'Patient Engagement' },
        { id: 'operations', label: 'Operations' },
        { id: 'analysis', label: 'Analysis & Insights' },
    ]

    return (
        <div className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
                        Our Platform
                    </h2>
                    <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Comprehensive Healthcare Solutions
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Streamline your healthcare operations with our
                        AI-powered tools designed specifically for medical
                        professionals.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                                activeFilter === category.id
                                    ? 'bg-blue-100 text-blue-800 shadow-sm'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredSolutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            <div className="p-8">
                                <div
                                    className={`inline-flex p-3 rounded-xl text-white mb-6 bg-gradient-to-br ${solution.gradient}`}
                                >
                                    {solution.icon}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {solution.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {solution.description}
                                </p>
                            </div>

                            <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                                <span className="text-sm font-medium text-gray-500 capitalize">
                                    {solution.category}
                                </span>
                            </div>

                            <div
                                className={`h-1 w-full bg-gradient-to-r ${solution.gradient}`}
                            ></div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-8">
                        Trusted by leading healthcare institutions
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                        <div className="h-8 bg-gray-200 w-24 rounded opacity-50 hover:opacity-100 transition-opacity"></div>
                        <div className="h-8 bg-gray-200 w-32 rounded opacity-50 hover:opacity-100 transition-opacity"></div>
                        <div className="h-8 bg-gray-200 w-28 rounded opacity-50 hover:opacity-100 transition-opacity"></div>
                        <div className="h-8 bg-gray-200 w-24 rounded opacity-50 hover:opacity-100 transition-opacity"></div>
                        <div className="h-8 bg-gray-200 w-32 rounded opacity-50 hover:opacity-100 transition-opacity"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesGrid
