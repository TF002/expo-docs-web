"use client";
import { Navbar, NavBody, NavItems, MobileNav, NavbarLogo, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/resizable-navbar";
import { useState, useEffect, useRef } from "react";
import { Toaster, toast } from "sonner";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
export default function NavbarDemo() {
    const { i18n, t } = useTranslation();
    const navItems = [
        {
            name: "History",
            link: "/history",
        },
        {
            name: "Pricing",
            link: "/pricing",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const langMenuRef = useRef<HTMLDivElement>(null);

    // Language options with flags
    const languages = [
        { code: "en-US", name: "English", flag: "🇺🇸" },
        { code: "ja", name: "日本語", flag: "🇯🇵" },
        { code: "ko", name: "한국어", flag: "🇰🇷" },
        { code: "es", name: "Español", flag: "🇪🇸" },
        { code: "fr", name: "Français", flag: "🇫🇷" },
        { code: "de", name: "Deutsch", flag: "🇩🇪" },
        { code: "pt", name: "Português", flag: "🇵🇹" },
        { code: "ru", name: "Русский", flag: "🇷🇺" },
        { code: "ar", name: "العربية", flag: "🇸🇦" },
        { code: "zh-TW", name: "繁體中文", flag: "🇹🇼" },
        { code: "zh-CN", name: "简体中文", flag: "🇨🇳" },
    ];

    const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

    // Close language menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
                setIsLangMenuOpen(false);
            }
        };

        if (isLangMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isLangMenuOpen]);

    const handleLanguageChange = (langCode: string) => {
        i18n.changeLanguage(langCode);
        setIsLangMenuOpen(false);
        toast.success(t("home.header.des1"));
    };

    useEffect(() => {
        // Show animation after page load with a 1.5 second delay
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    // Listen to scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY || window.pageYOffset;
            setIsScrolled(scrollPosition > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <Navbar className={`navbar-animate ${isLoaded ? "fade-slide-enter-active" : "fade-slide-enter"}`}>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} />
                <div className="flex items-center gap-4">
                    {/* Language Switcher */}
                    <div className="relative" ref={langMenuRef}>
                        <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            <span className="text-2xl">{currentLanguage.flag}</span>
                            <span className="text-sm font-medium hidden md:block">{currentLanguage.name}</span>
                            <motion.svg animate={{ rotate: isLangMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                        </button>

                        {/* Language Dropdown Menu */}
                        <AnimatePresence>
                            {isLangMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden z-50"
                                >
                                    <div className="max-h-80 overflow-y-auto">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => handleLanguageChange(lang.code)}
                                                className={`w-full flex items-center gap-3 px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                                                    i18n.language === lang.code ? "bg-blue-50 dark:bg-blue-900/20" : ""
                                                }`}
                                            >
                                                <span className="text-xl">{lang.flag}</span>
                                                <span className="flex-1 text-left text-sm font-medium">{lang.name}</span>
                                                {i18n.language === lang.code && (
                                                    <motion.svg initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </motion.svg>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <NavbarButton
                        variant="primary"
                        onClick={() => {
                            window.open("https://github.com/TF002/expo-docs-web", "_blank");
                        }}
                        style={{
                            background: "linear-gradient(16deg, #6EE7B7, #3B82F6, #9333EA)",
                        }}
                        className="text-white flex items-center"
                    >
                        <div>
                            <svg t="1760426515242" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3389" width="20" height="20">
                                <path
                                    d="M313.991837 914.285714c-20.37551 0-40.228571-6.269388-56.946939-18.808163-30.302041-21.942857-44.930612-58.514286-38.661225-95.085714l24.032654-141.061225c3.134694-18.285714-3.134694-36.571429-16.195919-49.110204L123.297959 509.910204c-26.644898-26.122449-36.04898-64.261224-24.555102-99.787755 11.493878-35.526531 41.795918-61.126531 78.889796-66.35102l141.583674-20.375511c18.285714-2.612245 33.959184-14.106122 41.795918-30.30204l63.216326-128.522449C440.946939 130.612245 474.383673 109.714286 512 109.714286s71.053061 20.897959 87.24898 54.334694L662.987755 292.571429c8.359184 16.195918 24.032653 27.689796 41.795918 30.30204l141.583674 20.375511c37.093878 5.22449 67.395918 30.82449 78.889796 66.35102 11.493878 35.526531 2.089796 73.665306-24.555102 99.787755l-102.4 99.787755c-13.061224 12.538776-19.330612 31.346939-16.195919 49.110204l24.032654 141.061225c6.269388 37.093878-8.359184 73.142857-38.661225 95.085714-30.302041 21.942857-69.485714 24.555102-102.4 7.314286L538.122449 836.440816c-16.195918-8.359184-35.526531-8.359184-51.722449 0l-126.955102 66.87347c-14.628571 7.314286-30.302041 10.971429-45.453061 10.971428z m162.481632-96.653061z"
                                    fill="#f4ea2a"
                                    p-id="3390"
                                ></path>
                            </svg>
                        </div>
                        <div className="pl-2 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isScrolled ? "star" : "star-on-github"}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                >
                                    {isScrolled ? "Star" : "Star On GitHub"}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                </MobileNavHeader>

                <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                    {navItems.map((item, idx) => (
                        <a key={`mobile-link-${idx}`} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className="relative text-neutral-600 dark:text-neutral-300">
                            <span className="block">{item.name}</span>
                        </a>
                    ))}
                    {/* Mobile Language Switcher */}
                    <div className="mt-4 mb-4 w-full">
                        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t("home.header.des2")}</div>

                        <div
                            className="flex flex-row flex-wrap content-start"
                            style={{
                                flexFlow: "row wrap",
                                alignContent: "flex-start",
                            }}
                        >
                            {languages.map((lang) => (
                                <div className="" style={{ flex: "0 0 25%" }} key={lang.code}>
                                    <div className="p-2">
                                        <button
                                            onClick={() => {
                                                handleLanguageChange(lang.code);
                                                setIsMobileMenuOpen(false);
                                            }}
                                            className={`flex flex-col items-center py-2 w-full gap-1  rounded-lg border transition-all ${
                                                i18n.language === lang.code
                                                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                                    : "border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                                            }`}
                                        >
                                            <span className="text-2xl">{lang.flag}</span>
                                            <span className="text-xs font-medium">{lang.name}</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex w-full flex-col  ">
                        <NavbarButton
                            variant="primary"
                            onClick={() => {
                                window.open("https://github.com/TF002/expo-docs-web", "_blank");
                                //   toast(
                                //     <div className="flex items-center ">
                                //       <div className="w-12 pr-4">
                                //         <img
                                //           src="/imgs/icon_01.png"
                                //           style={{ width: "40px", height: "40px" }}
                                //           alt="Device 1"
                                //         />
                                //       </div>
                                //       <div className="flex-1 ">
                                //         <div className="font-bold text-sm">
                                //           Product code not yet public.
                                //         </div>
                                //         <div className="text-xs">
                                //           Stay tuned for future updates.
                                //         </div>
                                //       </div>
                                //     </div>
                                //   );
                            }}
                            style={{
                                background: "linear-gradient(16deg, #6EE7B7, #3B82F6, #9333EA)",
                                height: "40px",
                            }}
                            className="text-white flex items-center justify-center py-2"
                        >
                            <div>
                                <svg t="1760426515242" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3389" width="20" height="20">
                                    <path
                                        d="M313.991837 914.285714c-20.37551 0-40.228571-6.269388-56.946939-18.808163-30.302041-21.942857-44.930612-58.514286-38.661225-95.085714l24.032654-141.061225c3.134694-18.285714-3.134694-36.571429-16.195919-49.110204L123.297959 509.910204c-26.644898-26.122449-36.04898-64.261224-24.555102-99.787755 11.493878-35.526531 41.795918-61.126531 78.889796-66.35102l141.583674-20.375511c18.285714-2.612245 33.959184-14.106122 41.795918-30.30204l63.216326-128.522449C440.946939 130.612245 474.383673 109.714286 512 109.714286s71.053061 20.897959 87.24898 54.334694L662.987755 292.571429c8.359184 16.195918 24.032653 27.689796 41.795918 30.30204l141.583674 20.375511c37.093878 5.22449 67.395918 30.82449 78.889796 66.35102 11.493878 35.526531 2.089796 73.665306-24.555102 99.787755l-102.4 99.787755c-13.061224 12.538776-19.330612 31.346939-16.195919 49.110204l24.032654 141.061225c6.269388 37.093878-8.359184 73.142857-38.661225 95.085714-30.302041 21.942857-69.485714 24.555102-102.4 7.314286L538.122449 836.440816c-16.195918-8.359184-35.526531-8.359184-51.722449 0l-126.955102 66.87347c-14.628571 7.314286-30.302041 10.971429-45.453061 10.971428z m162.481632-96.653061z"
                                        fill="#f4ea2a"
                                        p-id="3390"
                                    ></path>
                                </svg>
                            </div>
                            <div className="overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={isScrolled ? "star" : "star-on-github"}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                    >
                                        {isScrolled ? "Star" : "Star On GitHub"}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
            <Toaster closeButton position="top-center" />
        </Navbar>
    );
}

export const ssr = false;
