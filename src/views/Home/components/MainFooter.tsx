import { FaTwitter, FaLinkedinIn, FaArrowRight } from 'react-icons/fa'
import { BiEnvelope } from 'react-icons/bi'
import { Link } from 'react-router-dom'

// Added Code: More structured interface for link items
interface LinkItem {
    text: string
    path: string
}

// Added Code: Interface for footer column structure
interface FooterColumn {
    title: string
    links: LinkItem[]
}

// Updated Code: Expanded footer with more structured content
const MainFooter: React.FC = () => {
    const policyLinks: LinkItem[] = [
        { text: 'Privacy Policy', path: '/privacy-policy' },
        { text: 'Terms of Service', path: '/terms-of-service' },
        { text: 'Pricing Policy', path: '/pricing-policy' },
        { text: 'Editor Policy', path: '/editor-policy' },
    ]

    // Added Code: Additional footer columns with links
    const footerColumns: FooterColumn[] = [
        {
            title: 'Product',
            links: [
                { text: 'Features', path: '/#features' },
                { text: 'Pricing', path: '/pricing' },
                { text: 'Integrations', path: '/integrations' },
                { text: 'Product Updates', path: '/updates' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { text: 'Documentation', path: '/docs' },
                { text: 'Guides', path: '/guides' },
                { text: 'API Reference', path: '/api' },
                { text: 'Support', path: '/support' },
            ],
        },
        {
            title: 'Company',
            links: [
                { text: 'About Us', path: '/#about' },
                { text: 'Careers', path: '/careers' },
                { text: 'Contact', path: '/#contact' },
                { text: 'Blog', path: '/blog' },
            ],
        },
    ]

    return (
        <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                gogetwell.ai
                            </h2>
                            <p className="mt-4 text-gray-600 max-w-xs">
                                Transforming healthcare facilitation with
                                AI-powered solutions for medical tourism and
                                healthcare providers.
                            </p>
                        </div>

                        {/* Newsletter signup */}
                        <div className="pt-4">
                            <h3 className="text-sm font-semibold text-gray-900 mb-3">
                                Subscribe to our newsletter
                            </h3>
                            <div className="flex gap-2">
                                <div className="relative flex-grow">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <BiEnvelope className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-2.5 rounded-lg flex-shrink-0">
                                    <FaArrowRight size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <Link
                                to="https://x.com/gogetwellai"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter Profile"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                <FaTwitter size={18} />
                            </Link>
                            <Link
                                to="https://www.linkedin.com/company/gogetwellai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-50 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                <FaLinkedinIn size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Footer Columns */}
                    {footerColumns.map((column, idx) => (
                        <div key={idx}>
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                                {column.title}
                            </h3>
                            <ul className="space-y-3">
                                {column.links.map((link, linkIdx) => (
                                    <li key={linkIdx}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-600 hover:text-blue-600 transition-colors"
                                        >
                                            {link.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} gogetwell.ai. All
                        rights reserved.
                    </p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                        {policyLinks.map((item, i) => (
                            <li
                                key={i}
                                className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
                            >
                                <Link to={`${item.path}`}>{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter
