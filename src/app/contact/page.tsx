"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { IconMail, IconBrandTelegram, IconBrandGithub, IconBrandX, IconClock } from "@tabler/icons-react";

export default function ContactPage() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        type: "general",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Format the message for Telegram (i18n)
        const telegramMessage = `
👋 ${t("app.contact.content.des34")}

📝 ${t("app.contact.content.des35")} ${formData.name}
📧 ${t("app.contact.content.des36")} ${formData.email}
🏷️ ${t("app.contact.content.des37")} ${formData.type}
📋 ${t("app.contact.content.des38")} ${formData.subject}

💬 ${t("app.contact.content.des39")}
${formData.message}

---
📅 ${t("app.contact.content.des40")} ${new Date().toLocaleString()}
        `.trim();

        // Create Telegram URL
        const telegramUsername = "Daniel_tsf002"; // Your Telegram username
        const encodedMessage = encodeURIComponent(telegramMessage);
        const telegramUrl = `https://t.me/${telegramUsername}?text=${encodedMessage}`;

        // Simulate brief loading
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Open Telegram
        window.open(telegramUrl, "_blank");

        // Show success message
        alert(t("app.contact.content.des11"));

        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            type: "general",
        });
        setIsSubmitting(false);
    };

    const contactMethods = [
        {
            icon: <IconMail className="h-6 w-6" />,
            title: t("app.contact.content.des13"),
            description: t("app.contact.content.des14"),
            contact: "tsf19982021@gmail.com",
            href: "mailto:tsf19982021@gmail.com",
            response: t("app.contact.content.des15"),
        },
        {
            icon: <IconBrandTelegram className="h-6 w-6" />,
            title: t("app.contact.content.des16"),
            description: t("app.contact.content.des17"),
            contact: "@Daniel_tsf002",
            href: "https://t.me/Daniel_tsf002",
            response: t("app.contact.content.des18"),
        },
        {
            icon: <IconBrandGithub className="h-6 w-6" />,
            title: t("app.contact.content.des19"),
            description: t("app.contact.content.des20"),
            contact: "TF002",
            href: "https://github.com/TF002",
            response: t("app.contact.content.des21"),
        },
        {
            icon: <IconBrandX className="h-6 w-6" />,
            title: t("app.contact.content.des22"),
            description: t("app.contact.content.des23"),
            contact: "@TF002_Official",
            href: "#",
            response: t("app.contact.content.des24"),
        },
    ];

    const faqs = [
        {
            question: t("app.contact.faq.q1"),
            answer: t("app.contact.content.des28"),
        },
        {
            question: t("app.contact.faq.q2"),
            answer: t("app.contact.content.des29"),
        },
        {
            question: t("app.contact.faq.q3"),
            answer: t("app.contact.content.des30"),
        },
        {
            question: t("app.contact.faq.q4"),
            answer: t("app.contact.content.des31"),
        },
        {
            question: t("app.contact.faq.q5"),
            answer: t("app.contact.content.des32"),
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Section */}
                <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">{t("app.contact.title.title1")}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("app.contact.title.title2")}</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Contact Form */}
                    <motion.div className="bg-white rounded-3xl shadow-xl p-8" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("app.contact.title.title3")}</h2>
                        <p className="text-sm text-gray-600 mb-6 flex items-center gap-2">
                            <IconBrandTelegram className="h-4 w-4 text-blue-500" />
                            {t("app.contact.title.title4")}
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t("app.contact.title.title5")}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder={t("app.contact.content.des1")}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t("app.contact.title.title6")}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder={t("app.contact.content.des2")}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t("app.contact.title.title7")}
                                </label>
                                <select
                                    id="type"
                                    name="type"
                                    value={formData.type}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                >
                                    <option value="general">{t("app.contact.content.des5")}</option>
                                    <option value="technical">{t("app.contact.content.des6")}</option>
                                    <option value="billing">{t("app.contact.content.des7")}</option>
                                    <option value="feature">{t("app.contact.content.des8")}</option>
                                    <option value="bug">{t("app.contact.content.des9")}</option>
                                    <option value="business">{t("app.contact.content.des10")}</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t("app.contact.title.title8")}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    placeholder={t("app.contact.content.des3")}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    {t("app.contact.title.title9")}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                                    placeholder={t("app.contact.content.des4")}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full  bg-custom-gradient hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        {t("app.contact.content.des11")}
                                    </>
                                ) : (
                                    <>
                                        <IconBrandTelegram className="h-5 w-5" />
                                        {t("app.contact.content.des12")}
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Methods */}
                    <motion.div className="space-y-8" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("app.contact.title.title10")}</h2>
                            <div className="grid gap-6">
                                {contactMethods.map((method, index) => (
                                    <motion.a
                                        key={index}
                                        href={method.href}
                                        target={method.href.startsWith("http") ? "_blank" : undefined}
                                        rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.1 * index }}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-custom-gradient text-white rounded-xl group-hover:scale-110 transition-transform duration-300">{method.icon}</div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                                                <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                                                <p className="font-medium text-blue-600 mb-1">{method.contact}</p>
                                                <div className="flex items-center gap-2 text-xs text-gray-500">
                                                    <IconClock className="h-3 w-3" />
                                                    {method.response}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Business Hours */}
                        <motion.div
                            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <IconClock className="h-5 w-5" />
                                {t("app.contact.title.title11")}
                            </h3>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">{t("app.contact.content.des25")}</span>
                                    <span className="font-medium">{t("app.contact.content.des15")}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">{t("app.contact.content.des26")}</span>
                                    <span className="font-medium">{t("app.contact.content.des18")}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">{t("app.contact.content.des27")}</span>
                                    <span className="font-medium">24-48 hours</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* FAQ Section */}
                <motion.div className="bg-white rounded-3xl shadow-xl p-8" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t("app.contact.title.title12")}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-gray-50 rounded-xl p-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                            >
                                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div className="text-center mt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("app.contact.title.title13")}</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">{t("app.contact.content.des33")}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="/pricing"
                            className="bg-custom-gradient hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t("app.contact.title.title14")}
                        </motion.a>
                        <motion.a
                            href="https://github.com/TF002"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold py-3 px-8 rounded-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t("app.contact.title.title15")}
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
