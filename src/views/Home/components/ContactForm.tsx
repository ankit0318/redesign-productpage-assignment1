import { Button, Notification, toast } from '@/components/ui'
import { useState } from 'react'
import { BiPhone, BiSend, BiUser } from 'react-icons/bi'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg'
import { FiCheck, FiMapPin } from 'react-icons/fi'
import { Link } from 'react-router-dom'

interface ContactFormState {
    fullname: string
    email: string
    subject: string
    message: string
}

const ContactForm = () => {
    const [formState, setFormState] = useState<ContactFormState>({
        fullname: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focused, setFocused] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setIsSubmitting(true)
            await new Promise((resolve) => setTimeout(resolve, 1000))
            setIsSubmitting(false)
            setIsSubmitted(true)
            toast.push(
                <Notification title={'Success'} type={'success'}>
                    Successfully submitted
                </Notification>,
            )
            setFormState({
                fullname: '',
                email: '',
                subject: '',
                message: '',
            })
        } catch (err) {
            setIsSubmitting(false)
            toast.push(
                <Notification
                    title={
                        err?.response?.data?.message || 'Error submitting form'
                    }
                    type={'danger'}
                >
                    {err?.response?.data?.message || 'Please try again later.'}
                </Notification>,
            )
        }
    }

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">
                        Get In Touch
                    </h2>
                    <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Ready to Transform Your Healthcare Practice?
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Have questions or need assistance? Our team is here to
                        help you get started with our AI-powered healthcare
                        solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-12 text-white">
                            <h3 className="text-2xl font-bold mb-6">
                                Contact Information
                            </h3>
                            <p className="mb-8 opacity-90">
                                Reach out to our team for quick and friendly
                                support with any questions about our AI
                                healthcare platform.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-white/20 p-3">
                                        <FiMapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="opacity-80 text-sm">
                                            Office Location
                                        </p>
                                        <p className="font-medium">
                                            New Delhi, India
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-white/20 p-3">
                                        <BiPhone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="opacity-80 text-sm">
                                            Phone
                                        </p>
                                        <a
                                            href="tel:+919811396858"
                                            className="font-medium hover:text-white/80 transition-colors"
                                        >
                                            +91 9811396858
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full bg-white/20 p-3">
                                        <CgMail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="opacity-80 text-sm">
                                            Email
                                        </p>
                                        <a
                                            href="mailto:hello@gogetwell.ai"
                                            className="font-medium hover:text-white/80 transition-colors"
                                        >
                                            hello@gogetwell.ai
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 pt-8 border-t border-white/20">
                                <p className="mb-4 font-medium">
                                    Connect With Us
                                </p>
                                <div className="flex space-x-4">
                                    <Link
                                        to="https://x.com/gogetwellai"
                                        target="_blank"
                                        className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                                        aria-label="Twitter"
                                    >
                                        <BsTwitter className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        to="https://www.linkedin.com/company/gogetwellai/"
                                        target="_blank"
                                        className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <BsLinkedin className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="px-8 py-6">
                            <h4 className="font-medium text-gray-900 mb-2">
                                Office Hours
                            </h4>
                            <div className="text-gray-600 space-y-1">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                                <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        {isSubmitted ? (
                            <div className="bg-white rounded-2xl shadow-xl p-8 text-center h-full flex flex-col items-center justify-center">
                                <div className="bg-green-100 p-4 rounded-full inline-flex mb-6">
                                    <FiCheck className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Thanks for reaching out!
                                </h3>
                                <p className="text-gray-600 max-w-md mx-auto mb-8">
                                    We've received your message and will get
                                    back to you as soon as possible, typically
                                    within 24 hours.
                                </p>
                                <Button
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700"
                                >
                                    Send Another Message
                                </Button>
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Send us a message
                                </h3>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="relative">
                                        <label
                                            htmlFor="fullname"
                                            className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                                        >
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <div
                                                className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                                                    focused === 'fullname' ||
                                                    formState.fullname
                                                        ? 'text-blue-600'
                                                        : 'text-gray-400'
                                                }`}
                                            >
                                                <BiUser className="w-5 h-5" />
                                            </div>
                                            <input
                                                id="fullname"
                                                type="text"
                                                name="fullname"
                                                placeholder="John Doe"
                                                value={formState.fullname}
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setFocused('fullname')
                                                }
                                                onBlur={() => setFocused('')}
                                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                required
                                                aria-required="true"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                                        >
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <div
                                                className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                                                    focused === 'email' ||
                                                    formState.email
                                                        ? 'text-blue-600'
                                                        : 'text-gray-400'
                                                }`}
                                            >
                                                <CgMail className="w-5 h-5" />
                                            </div>
                                            <input
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="your@email.com"
                                                value={formState.email}
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setFocused('email')
                                                }
                                                onBlur={() => setFocused('')}
                                                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                                required
                                                aria-required="true"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-1 ml-1"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="How can we help you?"
                                            value={formState.message}
                                            onChange={handleChange}
                                            onFocus={() =>
                                                setFocused('message')
                                            }
                                            onBlur={() => setFocused('')}
                                            rows={4}
                                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                            required
                                            aria-required="true"
                                        />
                                    </div>
                                    <Button
                                        loading={isSubmitting}
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/30"
                                    >
                                        <span>Send Message</span>
                                        <BiSend className="w-5 h-5" />
                                    </Button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-20 bg-white rounded-xl overflow-hidden shadow-lg aspect-[16/5] border border-gray-200">
                    <div className="relative w-full h-full bg-gray-100 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent"></div>
                        <div className="absolute left-8 top-1/2 -translate-y-1/2 max-w-md p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg z-10">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Our Head Office
                            </h3>
                            <p className="text-gray-600">New Delhi, India</p>
                        </div>
                        <img
                            src="https://placehold.co/1200x300/f1f5f9/e2e8f0?text=Location+Map"
                            alt="Office Location"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
