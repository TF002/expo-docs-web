"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function UpgradePage() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Get maintenance end time from localStorage, set new end time if not exists
    const getMaintenanceEndTime = () => {
        const stored = localStorage.getItem("maintenanceEndTime");
        if (stored) {
            return parseInt(stored);
        } else {
            // Set maintenance end time (example: 24 hours later)
            const endTime = new Date().getTime() + 24 * 60 * 60 * 1000;
            localStorage.setItem("maintenanceEndTime", endTime.toString());
            return endTime;
        }
    };

    const maintenanceEndTime = getMaintenanceEndTime();

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = maintenanceEndTime - now;

            if (distance > 0) {
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ hours, minutes, seconds });
            } else {
                setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
                // Maintenance ended, clear localStorage
                localStorage.removeItem("maintenanceEndTime");
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [maintenanceEndTime]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 md:p-12"
            >
                {/* Maintenance icon */}
                <div className="text-center mb-8">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="inline-block text-6xl mb-4">
                        🔧
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">System Maintenance & Upgrade</h1>
                    <p className="text-xl text-blue-200">We&apos;re working hard to improve your experience</p>
                </div>

                {/* Countdown */}
                <div className="bg-white/20 rounded-xl p-6 mb-8">
                    <h2 className="text-2xl font-semibold text-white text-center mb-6">Estimated Recovery Time</h2>
                    <div className="flex justify-center space-x-4 md:space-x-8">
                        <div className="text-center">
                            <div className="bg-white/30 rounded-lg p-4 min-w-[80px]">
                                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.hours.toString().padStart(2, "0")}</div>
                                <div className="text-sm text-blue-200 mt-1">Hours</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white/30 rounded-lg p-4 min-w-[80px]">
                                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.minutes.toString().padStart(2, "0")}</div>
                                <div className="text-sm text-blue-200 mt-1">Minutes</div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white/30 rounded-lg p-4 min-w-[80px]">
                                <div className="text-3xl md:text-4xl font-bold text-white">{timeLeft.seconds.toString().padStart(2, "0")}</div>
                                <div className="text-sm text-blue-200 mt-1">Seconds</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4 text-blue-200 text-sm">
                        <p>Maintenance Started: {new Date(maintenanceEndTime - 24 * 60 * 60 * 1000).toLocaleString("en-US")}</p>
                        <p>Estimated End Time: {new Date(maintenanceEndTime).toLocaleString("en-US")}</p>
                    </div>
                </div>

                {/* Maintenance information */}
                <div className="space-y-6">
                    <div className="bg-white/10 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                            <span className="mr-2">📋</span>
                            Maintenance Tasks
                        </h3>
                        <ul className="space-y-2 text-blue-100">
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">✓</span>
                                System Performance Optimization
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">✓</span>
                                Security Vulnerability Fixes
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">✓</span>
                                New Feature Deployment
                            </li>
                            <li className="flex items-start">
                                <span className="text-green-400 mr-2">✓</span>
                                Database Upgrade
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                            <span className="mr-2">ℹ️</span>
                            Important Notice
                        </h3>
                        <div className="text-blue-100 space-y-2">
                            <p>• System will be temporarily unavailable during maintenance</p>
                            <p>• All user data has been safely backed up</p>
                            <p>• Service will automatically resume after maintenance completion</p>
                            <p>• For urgent issues, please contact technical support</p>
                        </div>
                    </div>

                    <div className="bg-white/10 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                            <span className="mr-2">📞</span>
                            Contact Us
                        </h3>
                        <div className="text-blue-100 space-y-2">
                            <p>Email: tsf19982021@gmail.com</p>
                            <p>WeChat: Technical Support Group</p>
                            <p>Business Hours: Monday - Friday 9:00-18:00</p>
                        </div>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="text-center mt-8 space-x-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.reload()}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        🔄 Refresh Page
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            localStorage.removeItem("maintenanceEndTime");
                            window.location.reload();
                        }}
                        className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        🔄 Reset Timer
                    </motion.button>
                </div>

                {/* Bottom decoration */}
                <div className="mt-8 text-center">
                    <div className="inline-flex space-x-2">
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} className="w-3 h-3 bg-blue-400 rounded-full" />
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="w-3 h-3 bg-purple-400 rounded-full" />
                        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="w-3 h-3 bg-pink-400 rounded-full" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
