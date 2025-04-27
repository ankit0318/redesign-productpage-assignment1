import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

// Added Code: Improved typing with TypeScript interface
interface FAQItemProps {
    question: string
    answer: string
    isOpen: boolean
    onClick: () => void
    index: number
}

// Updated Code: Enhanced FAQItem with improved accessibility and animations
const FAQItem: React.FC<FAQItemProps> = ({
    question,
    answer,
    isOpen,
    onClick,
    index,
}) => (
    <div
        className="border-b border-indigo-100 last:border-none"
        data-aos="fade-up"
        data-aos-delay={index * 50}
    >
        <button
            onClick={onClick}
            className={`w-full py-5 px-2 md:px-6 flex items-center justify-between text-left transition-colors rounded-lg ${
                isOpen ? 'bg-indigo-50/80' : 'hover:bg-indigo-50/30'
            }`}
            aria-expanded={isOpen}
            aria-controls={`faq-answer-${index}`}
        >
            <h3 className="text-lg leading-relaxed font-medium text-gray-900 pr-8">
                {question}
            </h3>
            <div
                className={`flex-shrink-0 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            >
                <BiChevronDown
                    className={`w-6 h-6 ${isOpen ? 'text-blue-600' : 'text-indigo-400'}`}
                />
            </div>
        </button>

        <div
            id={`faq-answer-${index}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
            aria-hidden={!isOpen}
        >
            <div className="p-2 md:p-6 pt-2 pb-5 text-gray-600 leading-relaxed">
                {answer}
            </div>
        </div>
    </div>
)

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState(0)

    const faqData = [
        {
            que: 'What is gogetwell.ai?',
            ans: 'gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline their operations, from building customized websites to managing patient leads and enhancing communication.',
        },
        {
            que: 'What is the AI Front Office for Healthcare Agents?',
            ans: 'The AI Front Office is a powerful platform that helps me manage my healthcare services more efficiently. It handles patient leads, books appointments, and even builds a professional website—all using AI, so I can focus on delivering care.',
        },
        {
            que: 'How does the AI Agent assist me in my healthcare business?',
            ans: 'The AI Agent works like a virtual assistant, answering patient questions, scheduling consultations, and managing appointments in real time. It helps me automate everyday tasks, saving me time and boosting my productivity.',
        },
        {
            que: 'Can I customize the website for my healthcare services?',
            ans: 'Yes, I can fully customize the website to showcase my services. I get to choose the design, features, and content that best represent my brand, making it easy to attract and engage with patients.',
        },
        {
            que: 'How does this platform support independent healthcare facilitators like me?',
            ans: 'The platform is designed specifically for independent facilitators or small teams. It integrates AI to automate my front-office tasks, manage patient leads, and even process payments, making it ideal for gig economy professionals.',
        },
        {
            que: 'How does the platform help me manage patient leads?',
            ans: 'The AI system captures, organizes, and prioritizes patient leads for me. It follows up with patients, schedules consultations, and makes sure I never miss an opportunity to provide care.',
        },
        {
            que: 'Is it easy to integrate the platform with the hospitals I work with?',
            ans: 'Yes, the platform easily connects with the hospital systems I collaborate with. It helps me manage billing, communication, and partnerships without any hassle.',
        },
        {
            que: 'Is the platform secure and compliant with healthcare regulations?',
            ans: "Absolutely. The platform is designed with top-level security measures and complies with healthcare regulations, so I know that my patients' data is always protected.",
        },
        {
            que: 'How quickly can I get started with the platform?',
            ans: 'Setting up the platform is fast and easy. I can create my AI-powered front office and website in no time, and the support team guides me through the entire process.',
        },
        {
            que: 'What kind of customer support is available if I need help?',
            ans: 'I have access to 24/7 customer support, along with tutorials and live demos, to make sure I get the most out of the platform and can resolve any issues quickly.',
        },
        {
            que: 'How does the platform help me attract more patients?',
            ans: 'The platform allows me to create a custom, SEO-optimized website, manage patient communication, and build a strong online reputation, all of which help me attract and retain more patients.',
        },
    ]

    return (
        <div className="py-24 px-4 sm:px-6 lg:px-8 relative">
            {/* Added Code: Abstract background shapes for visual interest */}
            <div className="absolute inset-0 overflow-hidden opacity-50">
                <div className="absolute -right-10 top-20 w-80 h-80 rounded-full bg-blue-50"></div>
                <div className="absolute -left-10 bottom-20 w-60 h-60 rounded-full bg-purple-50"></div>
            </div>

            {/* Main content */}
            <div className="relative max-w-4xl mx-auto">
                {/* Header with improved visual design */}
                <div className="text-center mb-12">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
                        Got Questions?
                    </h2>
                    <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Find answers to common questions about our AI healthcare
                        platform.
                    </p>
                </div>

                {/* FAQ Items with improved styling */}
                <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8 relative">
                    {/* Added Code: Search input for enhanced usability */}
                    <div className="mb-8 relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                            placeholder="Search frequently asked questions..."
                            aria-label="Search FAQs"
                        />
                    </div>

                    <div className="space-y-2">
                        {faqData.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.que}
                                answer={faq.ans}
                                isOpen={index === openIndex}
                                onClick={() =>
                                    setOpenIndex(
                                        index === openIndex ? -1 : index,
                                    )
                                }
                                index={index}
                            />
                        ))}
                    </div>

                    {/* Added Code: Contact CTA for questions not answered in FAQ */}
                    <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                        <p className="text-gray-600">
                            Can't find what you're looking for?
                        </p>
                        <div className="mt-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                            >
                                Contact Our Support Team
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
