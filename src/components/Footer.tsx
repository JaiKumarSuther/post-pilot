import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Mail,
    Phone,
    MapPin,
    Twitter,
    Linkedin,
    Facebook,
    Instagram,
    ArrowRight,
    Heart
} from "lucide-react";
import postpilotLogo from "@/assets/postpilot-logo.png";

const Footer = () => {
    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-br from-ai-dark via-gray-900 to-ai-dark overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,69,255,0.1)_0%,transparent_50%)]" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <motion.div
                    className="pt-20 pb-12"
                    variants={footerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                        {/* Company Info */}
                        <motion.div variants={itemVariants} className="lg:col-span-1">
                            <div className="mb-6">
                                <img
                                    src={postpilotLogo}
                                    alt="POSTPILOT AI"
                                    className="h-12 w-auto mb-4"
                                />
                                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                    Transform your content strategy with AI-powered blog automation.
                                    Create, publish, and grow your audience with zero human effort.
                                </p>
                            </div>

                            {/* Newsletter Signup */}
                            <div className="space-y-3">
                                <h4 className="text-white font-semibold text-sm">Stay Updated</h4>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                   
                                </div>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-white font-semibold text-lg mb-6">Product</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                                        How It Works
                                    </a>
                                </li>
                                <li>
                                    <a href="#faq" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Company */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#careers" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#blog" className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-blue-400" />
                                    <span className="text-gray-300 text-sm">+92 311 2968819</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-blue-400" />
                                    <span className="text-gray-300 text-sm">sameeralii7860@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-blue-400" />
                                    <span className="text-gray-300 text-sm">Pakistan</span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-6">
                                <h5 className="text-white font-semibold text-sm mb-3">Follow Us</h5>
                                <div className="flex space-x-3">
                                    <motion.a
                                        href="#"
                                        className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    className="border-t border-white/10 py-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="text-gray-400 text-sm">
                            © {currentYear} POSTPILOT AI. All rights reserved.
                        </div>

                        <div className="flex items-center gap-6 text-sm">
                            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Terms of Service
                            </a>
                            <a href="#cookies" className="text-gray-400 hover:text-white transition-colors duration-200">
                                Cookie Policy
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <span>All rights reserved</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
