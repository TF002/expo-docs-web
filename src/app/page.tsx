"use client";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconBrandX, IconBrandTelegram } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";
export default function Home() {
    const { scrollYProgress } = useScroll();
    const { t } = useTranslation();

    // Scroll to top on page refresh
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Scroll animation for device display area - adjust progress range to accommodate page content increase
    const x1 = useTransform(scrollYProgress, [0.01, 0.09], [100, 0]);
    const x2 = useTransform(scrollYProgress, [0.01, 0.09], [60, 0]);
    const x3 = useTransform(scrollYProgress, [0.01, 0.09], [0, 0]);
    const x4 = useTransform(scrollYProgress, [0.01, 0.09], [60, 0]);
    const x5 = useTransform(scrollYProgress, [0.01, 0.09], [100, 0]);

    // Scroll animation for image area
    const imgY1 = useTransform(scrollYProgress, [0.16, 0.3], [70, 0]);
    const imgY2 = useTransform(scrollYProgress, [0.16, 0.3], [130, 0]);
    const imgY3 = useTransform(scrollYProgress, [0.16, 0.3], [170, 0]);

    // Scroll animation for feature cards - entrance and exit
    // First large card (AI-Powered Scheduling)
    const card1Opacity = useTransform(scrollYProgress, [0.34, 0.4], [0, 1]);
    const card1Y = useTransform(scrollYProgress, [0.34, 0.4], [120, 0]);
    
    // Second card (Smart Time Blocking)
    const card2Opacity = useTransform(scrollYProgress, [0.42, 0.46], [0, 1]);
    const card2Y = useTransform(scrollYProgress, [0.42, 0.46], [100, 0]);
    
    // Third card (Intelligent Reminders)
    const card3Opacity = useTransform(scrollYProgress, [0.44, 0.5], [0, 1]);
    const card3Y = useTransform(scrollYProgress, [0.44, 0.5], [80, 0]);
    
    // Fourth card (Team Collaboration)
    const card4Opacity = useTransform(scrollYProgress, [0.54, 0.61], [0, 1]);
    const card4Y = useTransform(scrollYProgress, [0.54, 0.61], [120, 0]);

    const links = [
        {
            title: "Telegram",
            icon: <IconBrandTelegram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://t.me/Daniel_tsf002",
        },

        {
            title: "Twitter",
            icon: <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#",
        },
        {
            title: "GitHub",
            icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "https://github.com/TF002",
        },
    ];

    return (
        <div className="relative  w-full">
            <BackgroundBeamsWithCollision>
                <div>
                    <section id="hero">
                        <div className="sm:pt-20 pt-12  w-full ">
                            <div className="h-6 md:h-20"></div>
                            <main className="mx-auto  text-center relative px-4">
                                <div className="relative mb-12">
                                    <motion.div
                                        className="relative z-20"
                                        initial={{
                                            scale: 5,
                                        }}
                                        animate={{
                                            scale: 1,
                                        }}
                                        transition={{
                                            duration: 1.2,
                                            ease: "easeOut",
                                            delay: 0.1,
                                        }}
                                        style={{
                                            transformOrigin: "center top",
                                            height: "10vh",
                                        }}
                                    >
                                        <div
                                            style={{
                                                background: "linear-gradient(16deg, #6EE7B7, #3B82F6, #9333EA)",
                                            }}
                                            className=" text-white text-xl font-bold p-4 h-20 w-20 flex items-center justify-center rounded-3xl mx-auto shadow-md"
                                        >
                                            <svg className="icon" viewBox="0 0 1026 1024" xmlns="http://www.w3.org/2000/svg" width="40" height="40">
                                                <path
                                                    d="M448.512 0q26.624 0 45.568 18.944t18.944 45.568l0 319.488q0 26.624-18.944 45.568t-45.568 18.944l-319.488 0q-26.624 0-45.568-18.944t-18.944-45.568l0-319.488q0-26.624 18.944-45.568t45.568-18.944l319.488 0zM961.536 0q26.624 0 45.056 18.944t18.432 45.568l0 319.488q0 26.624-18.432 45.568t-45.056 18.944l-320.512 0q-26.624 0-45.568-18.944t-18.944-45.568l0-319.488q0-26.624 18.944-45.568t45.568-18.944l320.512 0zM448.512 512q26.624 0 45.568 18.944t18.944 45.568l0 320.512q0 26.624-18.944 45.056t-45.568 18.432l-319.488 0q-26.624 0-45.568-18.432t-18.944-45.056l0-320.512q0-26.624 18.944-45.568t45.568-18.944l319.488 0zM961.536 512q26.624 0 45.056 18.944t18.432 45.568l0 320.512q0 26.624-18.432 45.056t-45.056 18.432l-320.512 0q-26.624 0-45.568-18.432t-18.944-45.056l0-320.512q0-26.624 18.944-45.568t45.568-18.944l320.512 0z"
                                                    fill="#ffffff"
                                                ></path>
                                            </svg>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        initial={{ y: -50 }}
                                        animate={{ y: 0 }}
                                        transition={{
                                            duration: 1.2,
                                            ease: "easeOut",
                                            delay: 0.7, // Start animation after 0.7 seconds
                                        }}
                                    >
                                        <div
                                            className="mt-2"
                                            style={{
                                                opacity: 1,
                                                willChange: "auto",
                                                transform: "none",
                                            }}
                                        >
                                            Expo Docs
                                        </div>
                                    </motion.div>
                                </div>
                                <motion.div
                                    initial={{ y: 800 }}
                                    animate={{ y: 0 }}
                                    transition={{
                                        duration: 1.2,
                                        ease: "easeOut",
                                        delay: 0.2, // Start animation after 0.2 seconds
                                    }}
                                >
                                    <div className="max-w-5xl mx-auto">
                                        <h1
                                            className="text-xl md:text-5xl font-bold mb-4 tracking-tighter"
                                            style={{
                                                opacity: 1,
                                                willChange: "auto",
                                            }}
                                        >
                                            {t("home.hero.title")}
                                        </h1>

                                        <p
                                            className="mx-auto text-sm md:text-xl font-medium text-balance"
                                            style={{
                                                opacity: 1,
                                                willChange: "auto",
                                            }}
                                        >
                                            {t("home.hero.des1")}
                                        </p>
                                        <p
                                            className="mx-auto text-sm md:text-xl font-medium text-balance"
                                            style={{
                                                opacity: 1,
                                                willChange: "auto",
                                            }}
                                        >
                                            {t("home.hero.des2")}
                                        </p>

                                        <div className="flex justify-center space-x-4 md:space-x-10 ">
                                            <div className="flex items-center">
                                                <a href="https://apps.apple.com/us/app/expo-docs/id6739776586" target="_blank" rel="noopener noreferrer" className="cursor-pointer flex">
                                                    <Image
                                                src="/svg/download-black.svg"
                                                alt="Download"
                                                        width={160}
                                                        height={54}
                                                        className="w-40 flex-shrink-0 dark:hidden block hover:opacity-80 transition-opacity"
                                                style={{
                                                    opacity: 1,
                                                    willChange: "auto",
                                                }}
                                            />
                                                </a>
                                            </div>
                                            <div>
                                                <a href="https://github.com/TF002/expo-docs-web/releases/download/v1.1.0/expodocs_1.1.0.apk" download>
                                                    <div className="md:block hidden">
                                                        <svg className="icon" viewBox="0 0 3276 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="164" height="164">
                                                            <path
                                                                d="M3174.4 0H102.4a102.4 102.4 0 0 0-102.4 102.4v819.2a102.4 102.4 0 0 0 102.4 102.4h3072a102.4 102.4 0 0 0 102.4-102.4V102.4a102.4 102.4 0 0 0-102.4-102.4z"
                                                                fill="#000000"
                                                                p-id="18358"
                                                            ></path>
                                                            <path
                                                                d="M1664.6144 552.67328c-56.44288 0-102.58432 42.47552-102.58432 101.08928 0 58.12224 46.14144 101.04832 102.6048 101.04832 56.58624 0 102.72768-42.92608 102.72768-101.04832 0-58.61376-46.14144-101.08928-102.72768-101.08928z m0 162.32448c-30.96576 0-57.63072-25.27232-57.63072-61.2352 0-36.4544 26.66496-61.27616 57.6512-61.27616s57.7536 24.82176 57.7536 61.27616c0 35.96288-26.76736 61.2352-57.7536 61.2352z m-223.8464-162.32448c-56.58624 0-102.6048 42.47552-102.6048 101.08928 0 58.12224 46.01856 101.04832 102.6048 101.04832 56.56576 0 102.6048-42.92608 102.6048-101.04832 0-58.61376-46.03904-101.08928-102.6048-101.08928z m0 162.32448c-31.00672 0-57.7536-25.27232-57.7536-61.2352 0-36.4544 26.74688-61.27616 57.7536-61.27616 30.98624 0 57.6512 24.82176 57.6512 61.27616 0 35.96288-26.66496 61.2352-57.6512 61.2352z m-266.38336-131.33824v42.94656h103.77216c-3.03104 24.00256-11.1616 41.63584-23.59296 53.94432-15.1552 14.848-38.74816 31.3344-80.1792 31.3344-63.87712 0-113.8688-50.93376-113.8688-114.0736 0-63.09888 49.99168-114.0736 113.8688-114.0736 34.52928 0 59.65824 13.35296 78.19264 30.65856l30.6176-30.26944c-25.92768-24.4736-60.416-43.29472-108.81024-43.29472-87.57248 0-161.1776 70.43072-161.1776 156.99968 0 86.54848 73.60512 156.9792 161.1776 156.9792 47.3088 0 82.88256-15.36 110.83776-44.09344 28.63104-28.30336 37.56032-68.096 37.56032-100.2496 0-9.97376-0.83968-19.1488-2.3552-26.8288h-146.04288z m1089.29024 33.30048c-8.43776-22.60992-34.48832-64.3072-87.57248-64.3072-52.59264 0-96.37888 40.96-96.37888 101.10976 0 56.60672 43.33568 101.04832 101.43744 101.04832 46.96064 0 74.07616-28.30336 85.21728-44.78976l-34.85696-22.95808c-11.63264 16.7936-27.46368 27.93472-50.36032 27.93472-22.75328 0-39.07584-10.30144-49.54112-30.6176l136.78592-55.93088-4.73088-11.48928z m-139.44832 33.64864c-1.16736-38.97344 30.63808-58.94144 53.41184-58.94144 17.85856 0 32.99328 8.8064 38.05184 21.46304l-91.46368 37.4784z m-111.16544 98.05824h44.97408V451.62496h-44.97408v297.04192zM1939.456 575.1808h-1.49504c-10.09664-11.81696-29.36832-22.528-53.78048-22.528-51.2 0-98.01728 44.4416-98.01728 101.43744 0 56.6272 46.81728 100.72064 98.03776 100.72064 24.39168 0 43.66336-10.79296 53.76-22.95808h1.49504v14.47936c0 38.64576-20.8896 59.392-54.5792 59.392-27.46368 0-44.50304-19.57888-51.52768-36.06528l-39.1168 16.13824c11.264 26.78784 41.12384 59.76064 90.64448 59.76064 52.71552 0 97.19808-30.65856 97.19808-105.2672v-181.47328H1939.456v16.36352z m-51.4048 139.81696c-31.00672 0-56.9344-25.62048-56.9344-60.90752 0-35.6352 25.92768-61.60384 56.9344-61.60384 30.5152 0 54.59968 25.98912 54.59968 61.60384 0 35.28704-24.08448 60.90752-54.62016 60.90752z m586.1376-263.3728h-107.52v297.04192h44.83072V636.1088h62.68928c49.80736 0 98.63168-35.6352 98.63168-92.2624 0-56.60672-48.9472-92.22144-98.63168-92.22144z m1.16736 143.1552h-63.85664V492.9536h63.85664a51.83488 51.83488 0 0 1 52.59264 50.91328c0 22.99904-19.10784 50.95424-52.59264 50.95424zM2752.512 552.1408c-32.37888 0-66.06848 14.1312-79.93344 45.4656l39.79264 16.4864c8.56064-16.4864 24.30976-21.83168 40.96-21.83168 23.26528 0 46.85824 13.80352 47.2064 38.1952v3.11296c-8.11008-4.62848-25.47712-11.48928-46.83776-11.48928-42.86464 0-86.528 23.32672-86.528 66.82624 0 39.81312 35.10272 65.45408 74.56768 65.45408 30.16704 0 46.81728-13.45536 57.28256-29.12256h1.51552v22.9376h43.3152V634.2656c0-52.67456-39.79264-82.1248-91.3408-82.1248z m-5.40672 162.75456c-14.66368 0-35.10272-7.168-35.10272-25.14944 0-22.99904 25.4976-31.80544 47.55456-31.80544 19.74272 0 28.99968 4.3008 40.98048 9.97376-3.50208 27.50464-27.46368 46.98112-53.43232 46.98112z m254.52544-156.2624l-51.54816 128.75776h-1.51552l-53.28896-128.75776h-48.35328l80.05632 179.93728-45.69088 100.1472h46.85824L3051.52 558.61248h-49.88928z m-404.1728 190.0544h44.9536V451.62496h-44.9536v297.04192z"
                                                                fill="#FFFFFF"
                                                                p-id="18359"
                                                            ></path>
                                                            <path
                                                                d="M277.38112 214.91712c-7.04512 7.31136-11.14112 18.69824-11.14112 33.42336v525.5168c0 14.72512 4.096 26.09152 11.14112 33.3824l1.7408 1.6384 297.96352-294.35904v-6.9632L279.12192 213.1968l-1.7408 1.72032z"
                                                                fill="#00D2FF"
                                                                p-id="18360"
                                                            ></path>
                                                            <path
                                                                d="M676.29056 612.67968l-99.2256-98.16064v-6.9632l99.328-98.16064 2.23232 1.26976 117.61664 66.1504c33.5872 18.78016 33.5872 49.664 0 68.56704l-117.61664 66.02752-2.33472 1.26976z"
                                                                fill="#FFC401"
                                                                p-id="18361"
                                                            ></path>
                                                            <path
                                                                d="M678.62528 611.40992l-101.53984-100.37248-299.70432 296.22272c11.1616 11.59168 29.34784 12.98432 50.01216 1.41312l351.232-197.26336z"
                                                                fill="#FF3A44"
                                                                p-id="18362"
                                                            ></path>
                                                            <path
                                                                d="M678.62528 410.66496l-351.232-197.26336c-20.6848-11.4688-38.85056-10.05568-50.01216 1.51552l299.70432 296.12032 101.53984-100.37248z"
                                                                fill="#01F076"
                                                                p-id="18363"
                                                            ></path>
                                                            <path
                                                                d="M1043.84512 278.1184v-17.69472c0-19.06688 5.09952-34.0992 15.29856-45.09696 10.26048-11.07968 24.22784-16.60928 41.90208-16.60928 8.25344 0 15.72864 1.26976 22.38464 3.80928 6.7584 2.51904 12.24704 5.9392 16.50688 10.30144 4.28032 4.25984 7.5776 9.09312 9.91232 14.49984 2.39616 5.38624 3.72736 11.12064 3.9936 17.18272h-23.61344c-0.98304-8.04864-4.17792-14.25408-9.58464-18.59584-5.40672-4.4032-12.04224-6.59456-19.90656-6.59456-9.728 0-17.6128 3.44064-23.59296 10.30144-6.00064 6.8608-9.0112 17.16224-9.0112 30.90432v17.59232c0 13.06624 2.70336 23.32672 8.11008 30.80192 5.46816 7.3728 13.63968 11.10016 24.49408 11.10016 9.0112 0 16.30208-2.4576 21.9136-7.39328 5.59104-4.99712 8.3968-11.264 8.3968-18.80064v-9.91232h-30.208v-18.80064h53.28896v27.50464c0 4.25984-0.55296 8.54016-1.67936 12.8a48.66048 48.66048 0 0 1-5.71392 12.9024c-2.6624 4.25984-6.00064 8.02816-9.99424 11.30496a48.0256 48.0256 0 0 1-15.40096 7.9872 67.29728 67.29728 0 0 1-20.80768 3.01056c-18.71872 0-32.8704-5.632-42.3936-16.896-9.5232-11.264-14.29504-26.48064-14.29504-45.60896z m151.38816 59.8016V201.4208h86.20032v20.19328h-62.11584v37.4784h58.40896v19.12832h-58.40896v39.50592h62.09536v20.19328H1195.2128z m114.8928-115.99872V201.4208h103.28064v20.48h-39.69024V337.92h-24.00256v-115.99872H1310.1056z m193.45408 115.99872V201.4208h24.18688V337.92h-24.18688z m57.48736-115.99872V201.4208h103.30112v20.48h-39.71072V337.92h-24.00256v-115.99872h-39.58784z m188.06784 57.40544v-18.2272c0-19.31264 5.12-34.54976 15.40096-45.6704 10.26048-11.14112 24.24832-16.71168 41.984-16.71168 17.73568 0 31.70304 5.57056 41.90208 16.71168 10.19904 11.12064 15.29856 26.35776 15.29856 45.6704v18.2272c0 19.18976-5.12 34.2016-15.40096 45.09696-10.19904 10.79296-24.22784 16.1792-42.0864 16.1792-17.8176 0-31.76448-5.38624-41.90208-16.1792-10.1376-10.81344-15.19616-25.84576-15.19616-45.09696z m24.39168 0.1024c0 13.312 3.01056 23.4496 9.0112 30.39232 6.00064 6.8608 13.94688 10.30144 23.87968 10.30144 9.87136 0 17.8176-3.44064 23.81824-10.30144 6.00064-6.9632 9.0112-17.05984 9.0112-30.39232v-18.51392c0-13.39392-3.05152-23.69536-9.1136-30.9248-6.00064-7.168-13.90592-10.77248-23.69536-10.77248-9.87136 0-17.83808 3.60448-23.92064 10.79296-6.00064 7.20896-8.99072 17.5104-8.99072 30.90432v18.51392z m131.19488 58.49088V201.4208h20.8896l62.70976 95.49824h0.79872V201.4208h22.99904V337.92h-20.70528l-62.89408-95.80544h-0.69632V337.92h-23.10144z"
                                                                fill="#FFFFFF"
                                                                p-id="18364"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div className="md:hidden block">
                                                        <svg className="icon" viewBox="0 0 3276 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="150" height="150">
                                                    <path
                                                        d="M3174.4 0H102.4a102.4 102.4 0 0 0-102.4 102.4v819.2a102.4 102.4 0 0 0 102.4 102.4h3072a102.4 102.4 0 0 0 102.4-102.4V102.4a102.4 102.4 0 0 0-102.4-102.4z"
                                                        fill="#000000"
                                                        p-id="18358"
                                                    ></path>
                                                    <path
                                                        d="M1664.6144 552.67328c-56.44288 0-102.58432 42.47552-102.58432 101.08928 0 58.12224 46.14144 101.04832 102.6048 101.04832 56.58624 0 102.72768-42.92608 102.72768-101.04832 0-58.61376-46.14144-101.08928-102.72768-101.08928z m0 162.32448c-30.96576 0-57.63072-25.27232-57.63072-61.2352 0-36.4544 26.66496-61.27616 57.6512-61.27616s57.7536 24.82176 57.7536 61.27616c0 35.96288-26.76736 61.2352-57.7536 61.2352z m-223.8464-162.32448c-56.58624 0-102.6048 42.47552-102.6048 101.08928 0 58.12224 46.01856 101.04832 102.6048 101.04832 56.56576 0 102.6048-42.92608 102.6048-101.04832 0-58.61376-46.03904-101.08928-102.6048-101.08928z m0 162.32448c-31.00672 0-57.7536-25.27232-57.7536-61.2352 0-36.4544 26.74688-61.27616 57.7536-61.27616 30.98624 0 57.6512 24.82176 57.6512 61.27616 0 35.96288-26.66496 61.2352-57.6512 61.2352z m-266.38336-131.33824v42.94656h103.77216c-3.03104 24.00256-11.1616 41.63584-23.59296 53.94432-15.1552 14.848-38.74816 31.3344-80.1792 31.3344-63.87712 0-113.8688-50.93376-113.8688-114.0736 0-63.09888 49.99168-114.0736 113.8688-114.0736 34.52928 0 59.65824 13.35296 78.19264 30.65856l30.6176-30.26944c-25.92768-24.4736-60.416-43.29472-108.81024-43.29472-87.57248 0-161.1776 70.43072-161.1776 156.99968 0 86.54848 73.60512 156.9792 161.1776 156.9792 47.3088 0 82.88256-15.36 110.83776-44.09344 28.63104-28.30336 37.56032-68.096 37.56032-100.2496 0-9.97376-0.83968-19.1488-2.3552-26.8288h-146.04288z m1089.29024 33.30048c-8.43776-22.60992-34.48832-64.3072-87.57248-64.3072-52.59264 0-96.37888 40.96-96.37888 101.10976 0 56.60672 43.33568 101.04832 101.43744 101.04832 46.96064 0 74.07616-28.30336 85.21728-44.78976l-34.85696-22.95808c-11.63264 16.7936-27.46368 27.93472-50.36032 27.93472-22.75328 0-39.07584-10.30144-49.54112-30.6176l136.78592-55.93088-4.73088-11.48928z m-139.44832 33.64864c-1.16736-38.97344 30.63808-58.94144 53.41184-58.94144 17.85856 0 32.99328 8.8064 38.05184 21.46304l-91.46368 37.4784z m-111.16544 98.05824h44.97408V451.62496h-44.97408v297.04192zM1939.456 575.1808h-1.49504c-10.09664-11.81696-29.36832-22.528-53.78048-22.528-51.2 0-98.01728 44.4416-98.01728 101.43744 0 56.6272 46.81728 100.72064 98.03776 100.72064 24.39168 0 43.66336-10.79296 53.76-22.95808h1.49504v14.47936c0 38.64576-20.8896 59.392-54.5792 59.392-27.46368 0-44.50304-19.57888-51.52768-36.06528l-39.1168 16.13824c11.264 26.78784 41.12384 59.76064 90.64448 59.76064 52.71552 0 97.19808-30.65856 97.19808-105.2672v-181.47328H1939.456v16.36352z m-51.4048 139.81696c-31.00672 0-56.9344-25.62048-56.9344-60.90752 0-35.6352 25.92768-61.60384 56.9344-61.60384 30.5152 0 54.59968 25.98912 54.59968 61.60384 0 35.28704-24.08448 60.90752-54.62016 60.90752z m586.1376-263.3728h-107.52v297.04192h44.83072V636.1088h62.68928c49.80736 0 98.63168-35.6352 98.63168-92.2624 0-56.60672-48.9472-92.22144-98.63168-92.22144z m1.16736 143.1552h-63.85664V492.9536h63.85664a51.83488 51.83488 0 0 1 52.59264 50.91328c0 22.99904-19.10784 50.95424-52.59264 50.95424zM2752.512 552.1408c-32.37888 0-66.06848 14.1312-79.93344 45.4656l39.79264 16.4864c8.56064-16.4864 24.30976-21.83168 40.96-21.83168 23.26528 0 46.85824 13.80352 47.2064 38.1952v3.11296c-8.11008-4.62848-25.47712-11.48928-46.83776-11.48928-42.86464 0-86.528 23.32672-86.528 66.82624 0 39.81312 35.10272 65.45408 74.56768 65.45408 30.16704 0 46.81728-13.45536 57.28256-29.12256h1.51552v22.9376h43.3152V634.2656c0-52.67456-39.79264-82.1248-91.3408-82.1248z m-5.40672 162.75456c-14.66368 0-35.10272-7.168-35.10272-25.14944 0-22.99904 25.4976-31.80544 47.55456-31.80544 19.74272 0 28.99968 4.3008 40.98048 9.97376-3.50208 27.50464-27.46368 46.98112-53.43232 46.98112z m254.52544-156.2624l-51.54816 128.75776h-1.51552l-53.28896-128.75776h-48.35328l80.05632 179.93728-45.69088 100.1472h46.85824L3051.52 558.61248h-49.88928z m-404.1728 190.0544h44.9536V451.62496h-44.9536v297.04192z"
                                                        fill="#FFFFFF"
                                                        p-id="18359"
                                                    ></path>
                                                    <path
                                                        d="M277.38112 214.91712c-7.04512 7.31136-11.14112 18.69824-11.14112 33.42336v525.5168c0 14.72512 4.096 26.09152 11.14112 33.3824l1.7408 1.6384 297.96352-294.35904v-6.9632L279.12192 213.1968l-1.7408 1.72032z"
                                                        fill="#00D2FF"
                                                        p-id="18360"
                                                    ></path>
                                                    <path
                                                        d="M676.29056 612.67968l-99.2256-98.16064v-6.9632l99.328-98.16064 2.23232 1.26976 117.61664 66.1504c33.5872 18.78016 33.5872 49.664 0 68.56704l-117.61664 66.02752-2.33472 1.26976z"
                                                        fill="#FFC401"
                                                        p-id="18361"
                                                    ></path>
                                                    <path
                                                        d="M678.62528 611.40992l-101.53984-100.37248-299.70432 296.22272c11.1616 11.59168 29.34784 12.98432 50.01216 1.41312l351.232-197.26336z"
                                                        fill="#FF3A44"
                                                        p-id="18362"
                                                    ></path>
                                                    <path
                                                        d="M678.62528 410.66496l-351.232-197.26336c-20.6848-11.4688-38.85056-10.05568-50.01216 1.51552l299.70432 296.12032 101.53984-100.37248z"
                                                        fill="#01F076"
                                                        p-id="18363"
                                                    ></path>
                                                    <path
                                                        d="M1043.84512 278.1184v-17.69472c0-19.06688 5.09952-34.0992 15.29856-45.09696 10.26048-11.07968 24.22784-16.60928 41.90208-16.60928 8.25344 0 15.72864 1.26976 22.38464 3.80928 6.7584 2.51904 12.24704 5.9392 16.50688 10.30144 4.28032 4.25984 7.5776 9.09312 9.91232 14.49984 2.39616 5.38624 3.72736 11.12064 3.9936 17.18272h-23.61344c-0.98304-8.04864-4.17792-14.25408-9.58464-18.59584-5.40672-4.4032-12.04224-6.59456-19.90656-6.59456-9.728 0-17.6128 3.44064-23.59296 10.30144-6.00064 6.8608-9.0112 17.16224-9.0112 30.90432v17.59232c0 13.06624 2.70336 23.32672 8.11008 30.80192 5.46816 7.3728 13.63968 11.10016 24.49408 11.10016 9.0112 0 16.30208-2.4576 21.9136-7.39328 5.59104-4.99712 8.3968-11.264 8.3968-18.80064v-9.91232h-30.208v-18.80064h53.28896v27.50464c0 4.25984-0.55296 8.54016-1.67936 12.8a48.66048 48.66048 0 0 1-5.71392 12.9024c-2.6624 4.25984-6.00064 8.02816-9.99424 11.30496a48.0256 48.0256 0 0 1-15.40096 7.9872 67.29728 67.29728 0 0 1-20.80768 3.01056c-18.71872 0-32.8704-5.632-42.3936-16.896-9.5232-11.264-14.29504-26.48064-14.29504-45.60896z m151.38816 59.8016V201.4208h86.20032v20.19328h-62.11584v37.4784h58.40896v19.12832h-58.40896v39.50592h62.09536v20.19328H1195.2128z m114.8928-115.99872V201.4208h103.28064v20.48h-39.69024V337.92h-24.00256v-115.99872H1310.1056z m193.45408 115.99872V201.4208h24.18688V337.92h-24.18688z m57.48736-115.99872V201.4208h103.30112v20.48h-39.71072V337.92h-24.00256v-115.99872h-39.58784z m188.06784 57.40544v-18.2272c0-19.31264 5.12-34.54976 15.40096-45.6704 10.26048-11.14112 24.24832-16.71168 41.984-16.71168 17.73568 0 31.70304 5.57056 41.90208 16.71168 10.19904 11.12064 15.29856 26.35776 15.29856 45.6704v18.2272c0 19.18976-5.12 34.2016-15.40096 45.09696-10.19904 10.79296-24.22784 16.1792-42.0864 16.1792-17.8176 0-31.76448-5.38624-41.90208-16.1792-10.1376-10.81344-15.19616-25.84576-15.19616-45.09696z m24.39168 0.1024c0 13.312 3.01056 23.4496 9.0112 30.39232 6.00064 6.8608 13.94688 10.30144 23.87968 10.30144 9.87136 0 17.8176-3.44064 23.81824-10.30144 6.00064-6.9632 9.0112-17.05984 9.0112-30.39232v-18.51392c0-13.39392-3.05152-23.69536-9.1136-30.9248-6.00064-7.168-13.90592-10.77248-23.69536-10.77248-9.87136 0-17.83808 3.60448-23.92064 10.79296-6.00064 7.20896-8.99072 17.5104-8.99072 30.90432v18.51392z m131.19488 58.49088V201.4208h20.8896l62.70976 95.49824h0.79872V201.4208h22.99904V337.92h-20.70528l-62.89408-95.80544h-0.69632V337.92h-23.10144z"
                                                        fill="#FFFFFF"
                                                        p-id="18364"
                                                    ></path>
                                                </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </main>
                        </div>
                    </section>

                    <section className="app">
                        <motion.div
                            className="flex justify-center pb-32 pt-10 items-center gap-6 overflow-hidden"
                            initial={{ y: 400 }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 1.2,
                                ease: "easeOut",
                                delay: 0.4,
                            }}
                        >
                            <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} style={{ y: x1 }}>
                                <Image src="/imgs/Device-3.png" className="w-60" alt="Device 1" width={240} height={300} />
                            </motion.div>
                            <motion.div initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} style={{ y: x2 }}>
                                <Image src="/imgs/Device-2.png" className="w-60" alt="Device 2" width={240} height={300} />
                            </motion.div>
                            <motion.div style={{ y: x3 }}>
                                <Image src="/imgs/Device-1.png" className="w-60" alt="Device 3" width={240} height={300} />
                            </motion.div>
                            <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }} style={{ y: x4 }}>
                                <Image src="/imgs/Device-4.png" className="w-60" alt="Device 4" width={240} height={300} />
                            </motion.div>
                            <motion.div initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }} style={{ y: x5 }}>
                                <Image src="/imgs/Device-5.png" className="w-60" alt="Device 5" width={240} height={300} />
                            </motion.div>
                        </motion.div>
                    </section>

                    <section id="experience">
                        <div className="sm:py-20 py-12 container px-4 sm:px-10 mx-auto max-w-[var(--max-container-width)]">
                            <div className="text-center space-y-4 pb-10 mx-auto">
                                <h2 className="text-sm text-mainColor text-balance font-mono font-semibold tracking-wider uppercase" style={{ opacity: 1, transform: "none" }}>
                                    {t("home.experience.title")}
                                </h2>
                                <h3
                                    className="mx-0 mt-4 max-w-lg text-2xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase"
                                    style={{ opacity: 1, transform: "none" }}
                                >
                                    {t("home.experience.des1")}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mx-auto ">
                                <motion.div className="h-auto w-60 mx-auto" style={{ y: imgY1 }}>
                                    <Image src="/imgs/Device-6.png" alt="iPhone 1" width={240} height={300} />
                                </motion.div>

                                <motion.div className="h-auto w-60 mx-auto" style={{ y: imgY2 }}>
                                    <Image src="/imgs/Device-7.png" alt="iPhone 2" width={240} height={300} />
                                </motion.div>
                                <motion.div className="h-auto w-60 mx-auto" style={{ y: imgY3 }}>
                                    <Image src="/imgs/Device-8.png" alt="iPhone 3" width={240} height={300} />
                                </motion.div>
                            </div>
                        </div>
                    </section>

                    <section id="bento">
                        <div className="sm:py-20 py-12 mx-auto max-w-screen-md px-10">
                            <div className="text-center space-y-4 pb-10 mx-auto">
                                <h2 className="text-sm text-mainColor text-balance font-mono font-semibold tracking-wider uppercase" style={{ opacity: 1, transform: "none" }}>
                                    {t("home.bento.title")}
                                </h2>
                                <h3
                                    className="mx-0 mt-4 max-w-lg text-2xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase"
                                    style={{ opacity: 1, transform: "none" }}
                                >
                                    {t("home.bento.des1")}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <motion.div
                                    className="bg-[#f5f5f5] p-4 sm:p-6 !pb-0 rounded-3xl grid grid-rows-1 md:col-span-2"
                                    style={{
                                        opacity: card1Opacity,
                                        y: card1Y,
                                    }}
                                >
                                    <div className="flex flex-col">
                                        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">{t("home.bento.card1.title")}</h2>
                                        <p className="text-sm sm:text-base text-foreground mb-4">{t("home.bento.card1.des1")}</p>
                                    </div>
                                    <div className="flex justify-center sm:space-x-4">
                                        <Image src="/imgs/Device-9.png" alt="UI Component Gallery" width={600} height={400} className="w-full h-64 sm:h-96 rounded-xl object-cover object-top" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="bg-[#f5f5f5] p-4 sm:p-6 !pb-0 rounded-3xl grid grid-rows-1"
                                    style={{
                                        opacity: card2Opacity,
                                        y: card2Y,
                                    }}
                                >
                                    <div className="flex flex-col">
                                        <h2 className="text-xl  sm:text-2xl font-bold mb-2 text-foreground">{t("home.bento.card2.title")}</h2>
                                        <p className="text-sm sm:text-base text-foreground mb-4">{t("home.bento.card2.des1")}</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <Image src="/imgs/Device-11.png" alt="UI Component Gallery" width={600} height={400} className="w-full h-64 sm:h-96 rounded-xl object-cover object-top" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="bg-[#f5f5f5] p-4 sm:p-6 !pb-0 rounded-3xl grid grid-rows-1"
                                    style={{
                                        opacity: card3Opacity,
                                        y: card3Y,
                                    }}
                                >
                                    <div className="flex flex-col">
                                        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">{t("home.bento.card3.title")}</h2>
                                        <p className="text-sm sm:text-base text-foreground mb-4">{t("home.bento.card3.des1")}</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <Image src="/imgs/Device-15.png" alt="UI Component Gallery" width={600} height={400} className="w-full h-64 sm:h-96 rounded-xl object-cover object-top" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="bg-[#f5f5f5] p-4 sm:p-6 !pb-0 rounded-3xl grid grid-rows-1 md:col-span-2"
                                    style={{
                                        opacity: card4Opacity,
                                        y: card4Y,
                                    }}
                                >
                                    <div className="flex flex-col">
                                        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-foreground">{t("home.bento.card4.title")}</h2>
                                        <p className="text-sm sm:text-base text-foreground mb-4">{t("home.bento.card4.des1")}</p>
                                    </div>
                                    <div className="flex justify-center sm:space-x-4">
                                        <Image src="/imgs/Device-10.png" alt="UI Component Gallery" width={600} height={400} className="w-full h-64 sm:h-96 rounded-xl object-cover object-top" />
                                    </div>
                                </motion.div>
                            </div>
					</div>
</section>

                     <div>
                         <div className="flex items-center justify-center h-[20rem] w-full">
                            <FloatingDock mobileClassName="translate-y-20" items={links} />
                         </div>
                     </div>
                </div>
            </BackgroundBeamsWithCollision>
        </div>
    );
}
