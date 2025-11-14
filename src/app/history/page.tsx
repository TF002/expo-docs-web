"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { Timeline } from "@/components/ui/timeline";
import { Cover } from "@/components/ui/cover";

export default function TimelineDemo() {
    const { t } = useTranslation();
    const data = [
        {
            title: "v1.0.77",
            date: t("app.history.date.title1"),
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des1")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des2")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des3")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des4")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des5")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des6")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des7")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des8")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des9")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des10")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des11")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des12")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des13")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des14")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des15")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des16")}</div>
                    </div>
                </div>
            ),
        },
        {
            title: "v1.1.12",
            date: t("app.history.date.title2"),
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des17")}</strong>
                    </p>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("app.history.content.des18")}</p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des19")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des20")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des21")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des22")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des23")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des24")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des25")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des26")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des27")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des28")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des29")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des30")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des31")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des32")}</div>
                    </div>
                </div>
            ),
        },
        {
            title: "v1.0.40",
            date: t("app.history.date.title3"),
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des33")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des34")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des35")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des36")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des37")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("app.history.content.des38")}</p>
                </div>
            ),
        },
        {
            title: "v1.0.35",
            date: t("app.history.date.title4"),
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des39")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des40")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des41")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des42")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des43")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des44")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("app.history.content.des45")}</p>
                </div>
            ),
        },
        {
            title: "v1.0.30",
            date: t("app.history.date.title5"),
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des46")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des47")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des48")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des49")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des50")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("app.history.content.des51")}</p>
                </div>
            ),
        },
        {
            title: "v1.0.25",
            date: t("app.history.date.title6"),
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des52")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des53")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des54")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des55")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("app.history.content.des56")}</p>
                </div>
            ),
        },
        {
            title: "v1.0.20",
            date: t("app.history.date.title7"),
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des64")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des65")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des66")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des67")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des68")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("app.history.content.des69")}</p>
                </div>
            ),
        },
        {
            title: "v1.0.15",
            date: t("app.history.date.title8"),
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des58")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des59")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des60")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des61")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des62")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("app.history.content.des63")}</p>
                </div>
            ),
        },
        {
            title: "v1.0.10",
            date: t("app.history.date.title9"),
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des64")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des65")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des66")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des67")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des68")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("app.history.content.des69")}</p>
                </div>
            ),
        },
        {
            title: "v1.0.8",
            date: t("app.history.date.title10"),
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des70")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des71")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des72")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des73")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des74")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("app.history.content.des75")}</p>
                </div>
            ),
        },
        {
            title: "v1.0.5",
            date: t("app.history.date.title11"),
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des76")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des77")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des78")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des79")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("app.history.content.des80")}</p>
                </div>
            ),
        },
        {
            title: "v1.0.3",
            date: t("app.history.date.title12"),
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des81")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des82")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des83")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des84")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des85")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("app.history.content.des86")}</p>
                </div>
            ),
        },
        {
            title: "v1.0.1",
            date: t("app.history.date.title13"),
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des87")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des88")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des89")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des90")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des91")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("app.history.content.des92")}</p>
                </div>
            ),
        },
        {
            title: "v1.0.0",
            date: t("app.history.date.title14"),
            content: (
                <div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        <strong>{t("app.history.content.des93")}</strong>
                    </p>
                    <div className="mb-4 grid grid-cols-1 gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        <div className="flex items-center gap-2">{t("app.history.content.des94")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des95")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des96")}</div>
                        <div className="flex items-center gap-2">{t("app.history.content.des97")}</div>
                    </div>
                    <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">{t("app.history.content.des98")}</p>
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <div className="max-w-7xl mx-auto pt-20 PB-6 px-4 md:px-8 lg:px-10">
                <h4 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
                    React Native grew fast, but quality UI components were lacking. <Cover>Expo Docs</Cover> was born to help developers build efficiently.
                </h4>
            </div>
            <Timeline data={data} />
        </div>
    );
}
