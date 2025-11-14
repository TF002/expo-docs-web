"use client";
import { useTranslation } from "react-i18next";

export default function PricingPage() {
    const { t } = useTranslation();
    return (
        <>
            <section id="pricing" className="pt-20">
                <div className="sm:py-20 py-12 container px-10 mx-auto max-w-[var(--max-container-width)]">
                    {/* Title Section */}
                    <div className="text-center space-y-4 pb-10 mx-auto">
                        <h2 className="text-sm text-mainColor text-balance font-mono font-semibold tracking-wider uppercase">{t("app.pricing.title.title1")}</h2>
                        <h3 className="mx-0 mt-4 max-w-lg text-5xl text-balance font-bold sm:max-w-none sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tighter text-foreground lowercase">
                            {t("app.pricing.title.title2")}
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("app.pricing.title.title3")}</p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto py-10">
                        {/* Free Plan */}
                        <div className="bg-gray-100/70 p-6 rounded-3xl grid grid-rows-[auto_auto_1fr_auto] border border-gray-200">
                            <div className="text-center mb-4">
                                <div className="text-3xl mb-2">🎁</div>
                                <h2 className="text-2xl font-semibold mb-2">{t("app.pricing.title.title4")}</h2>
                                <div className="text-4xl font-bold text-mainColor mb-2">
                                    {t("app.pricing.content.des46")}
                                    <span className="text-sm font-normal text-muted-foreground">{t("app.pricing.title.title5")}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{t("app.pricing.content.des1")}</p>
                            </div>

                            <div className="space-y-3 mb-6">
                                <h4 className="font-semibold text-green-600 mb-3">{t("app.pricing.title.title6")}</h4>
                                {[
                                    t("app.pricing.content.des2"),
                                    t("app.pricing.content.des3"),
                                    t("app.pricing.content.des4"),
                                    t("app.pricing.content.des5"),
                                    t("app.pricing.content.des6"),
                                    t("app.pricing.content.des7"),
                                    t("app.pricing.content.des8"),
                                    t("app.pricing.content.des9"),
                                    t("app.pricing.content.des10"),
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start text-sm">
                                        <span className="text-green-500 mr-2 mt-0.5">✓</span>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 mb-6">
                                <h4 className="font-semibold text-red-600 mb-3">{t("app.pricing.title.title7")}</h4>
                                {[t("app.pricing.content.des11"), t("app.pricing.content.des12"), t("app.pricing.content.des13")].map((limitation, i) => (
                                    <div key={i} className="flex items-start text-sm">
                                        <span className="text-red-500 mr-2 mt-0.5">✗</span>
                                        <span>{limitation}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-mainColor hover:bg-mainColor/90 h-11 px-4 rounded-full text-white">
                                {t("app.pricing.title.title8")}
                            </button>
                        </div>

                        {/* Single Component Plan */}
                        <div className="bg-gray-100/70 p-6 rounded-3xl grid grid-rows-[auto_auto_1fr_auto] border-2 border-mainColor/20 relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-mainColor text-white px-4 py-1 rounded-full text-sm font-medium">{t("app.pricing.title.title9")}</span>
                            </div>

                            <div className="text-center mb-4">
                                <div className="text-3xl mb-2">⭐</div>
                                <h2 className="text-2xl font-semibold mb-2">{t("app.pricing.title.title10")}</h2>
                                <div className="text-4xl font-bold text-mainColor mb-2">
                                    {t("app.pricing.content.des47")}
                                    <span className="text-sm font-normal text-muted-foreground">{t("app.pricing.title.title11")}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{t("app.pricing.content.des14")}</p>
                            </div>

                            <div className="space-y-3 mb-6">
                                <h4 className="font-semibold text-green-600 mb-3">{t("app.pricing.title.title12")}</h4>
                                {[
                                    t("app.pricing.content.des15"),
                                    t("app.pricing.content.des16"),
                                    t("app.pricing.content.des17"),
                                    t("app.pricing.content.des18"),
                                    t("app.pricing.content.des19"),
                                    t("app.pricing.content.des20"),
                                    t("app.pricing.content.des21"),
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start text-sm">
                                        <span className="text-green-500 mr-2 mt-0.5">✓</span>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 mb-6">
                                <h4 className="font-semibold text-purple-600 mb-3">{t("app.pricing.title.title13")}</h4>
                                <div className="text-sm space-y-1 grid grid-cols-2 gap-1">
                                    <div>{t("app.pricing.content.des22")}</div>
                                    <div>{t("app.pricing.content.des23")}</div>
                                    <div>{t("app.pricing.content.des24")}</div>
                                    <div>{t("app.pricing.content.des25")}</div>
                                    <div>{t("app.pricing.content.des26")}</div>
                                    <div>{t("app.pricing.content.des27")}</div>
                                    <div>{t("app.pricing.content.des28")}</div>
                                    <div>{t("app.pricing.content.des29")}</div>
                                </div>
                            </div>

                            <button className="w-full inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-mainColor hover:bg-mainColor/90 h-11 px-4 rounded-full text-white">
                                {t("app.pricing.title.title14")}
                            </button>
                        </div>

                        {/* Full Source Code Plan */}
                        <div className="bg-gradient-to-br from-gray-100/70 to-gray-200/70 p-6 rounded-3xl grid grid-rows-[auto_auto_1fr_auto] border-2 border-yellow-400/30 relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">{t("app.pricing.title.title15")}</span>
                            </div>

                            <div className="text-center mb-4">
                                <div className="text-3xl mb-2">🚀</div>
                                <h2 className="text-2xl font-semibold mb-2">{t("app.pricing.title.title16")}</h2>
                                <div className="text-4xl font-bold text-mainColor mb-2">
                                    {t("app.pricing.content.des48")}
                                    <span className="text-sm font-normal text-muted-foreground">{t("app.pricing.title.title17")}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{t("app.pricing.content.des30")}</p>
                            </div>

                            <div className="space-y-3 mb-6">
                                <h4 className="font-semibold text-green-600 mb-3">{t("app.pricing.title.title18")}</h4>
                                {[
                                    t("app.pricing.content.des31"),
                                    t("app.pricing.content.des32"),
                                    t("app.pricing.content.des33"),
                                    t("app.pricing.content.des34"),
                                    t("app.pricing.content.des35"),
                                    t("app.pricing.content.des36"),
                                    t("app.pricing.content.des37"),
                                    t("app.pricing.content.des38"),
                                    t("app.pricing.content.des39"),
                                    t("app.pricing.content.des40"),
                                    t("app.pricing.content.des41"),
                                    t("app.pricing.content.des42"),
                                    t("app.pricing.content.des43"),
                                    t("app.pricing.content.des44"),
                                    t("app.pricing.content.des45"),
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start text-sm">
                                        <span className="text-green-500 mr-2 mt-0.5">✓</span>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 h-11 px-4 rounded-full text-black font-semibold">
                                {t("app.pricing.title.title19")}
                            </button>
                        </div>
                    </div>

                    {/* Pricing Comparison Table */}
                    <section id="pricing-comparison" className="py-20 bg-gray-50">
                        <div className="container mx-auto px-4 sm:px-10 max-w-7xl">
                            <div className="text-center space-y-4 pb-12">
                                <h2 className="text-sm text-mainColor text-balance font-mono font-semibold tracking-wider uppercase">{t("app.pricing.title.title20")}</h2>
                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{t("app.pricing.title.title21")}</h3>
                            </div>

                            {/* Comparison Table */}
                            <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-mainColor text-white">
                                            <tr>
                                                <th className="px-6 py-4 text-left font-semibold">{t("app.pricing.title.title22")}</th>
                                                <th className="px-6 py-4 text-center font-semibold">{t("app.pricing.title.title23")}</th>
                                                <th className="px-6 py-4 text-center font-semibold">{t("app.pricing.title.title24")}</th>
                                                <th className="px-6 py-4 text-center font-semibold">{t("app.pricing.title.title25")}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[
                                                {
                                                    feature: t("app.pricing.title.title26"),
                                                    free: t("app.pricing.content.des46"),
                                                    single: t("app.pricing.content.des47"),
                                                    full: t("app.pricing.content.des48"),
                                                },
                                                { feature: t("app.pricing.title.title27"), free: "✅", single: "✅", full: "✅" },
                                                { feature: t("app.pricing.title.title28"), free: "✅", single: "✅", full: "✅" },
                                                { feature: t("app.pricing.title.title29"), free: "❌", single: t("app.pricing.content.des49"), full: t("app.pricing.content.des50") },
                                                { feature: t("app.pricing.title.title30"), free: "❌", single: t("app.pricing.content.des51"), full: t("app.pricing.content.des50") },
                                                { feature: t("app.pricing.title.title31"), free: "❌", single: "✅", full: "✅" },
                                                { feature: t("app.pricing.title.title32"), free: "❌", single: "❌", full: "✅" },
                                                { feature: t("app.pricing.title.title33"), free: "❌", single: "❌", full: "✅" },
                                                { feature: t("app.pricing.title.title34"), free: "❌", single: t("app.pricing.content.des52"), full: "✅" },
                                                { feature: t("app.pricing.title.title35"), free: "❌", single: "❌", full: "✅" },
                                                { feature: t("app.pricing.title.title36"), free: "✅", single: "✅", full: "✅" },
                                            ].map((row, index) => (
                                                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                                                    <td className="px-6 py-4 text-center text-gray-700">{row.free}</td>
                                                    <td className="px-6 py-4 text-center text-gray-700">{row.single}</td>
                                                    <td className="px-6 py-4 text-center text-gray-700 font-semibold">{row.full}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Recommendations */}
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">{t("app.pricing.title.title37")}</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <span className="text-blue-500 font-bold">💡</span>
                                            <div>
                                                <p className="font-semibold text-gray-900">{t("app.pricing.content.des53")}</p>
                                                <p className="text-gray-600">{t("app.pricing.content.des58")}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-green-500 font-bold">💡</span>
                                            <div>
                                                <p className="font-semibold text-gray-900">{t("app.pricing.content.des54")}</p>
                                                <p className="text-gray-600">{t("app.pricing.content.des59")}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-purple-500 font-bold">💡</span>
                                            <div>
                                                <p className="font-semibold text-gray-900">{t("app.pricing.content.des55")}</p>
                                                <p className="text-gray-600">{t("app.pricing.content.des60")}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-orange-500 font-bold">💡</span>
                                            <div>
                                                <p className="font-semibold text-gray-900">{t("app.pricing.content.des56")}</p>
                                                <p className="text-gray-600">{t("app.pricing.content.des61")}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <span className="text-red-500 font-bold">💡</span>
                                            <div>
                                                <p className="font-semibold text-gray-900">{t("app.pricing.content.des57")}</p>
                                                <p className="text-gray-600">{t("app.pricing.content.des62")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-3xl">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">{t("app.pricing.title.title38")}</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="font-semibold text-gray-900 mb-2">{t("app.pricing.content.des63")}</p>
                                            <p className="text-gray-600 text-sm">{t("app.pricing.content.des64")}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 mb-2">{t("app.pricing.content.des65")}</p>
                                            <p className="text-gray-600 text-sm">{t("app.pricing.content.des66")}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 mb-2">{t("app.pricing.content.des67")}</p>
                                            <p className="text-gray-600 text-sm">{t("app.pricing.content.des68")}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 mb-2">{t("app.pricing.content.des69")}</p>
                                            <p className="text-gray-600 text-sm">{t("app.pricing.content.des70")}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900 mb-2">{t("app.pricing.content.des71")}</p>
                                            <p className="text-gray-600 text-sm">{t("app.pricing.content.des72")}</p>
                                        </div>
                                        {/* <div>
                                             <p className="font-semibold text-gray-900 mb-2">Q: How to get an invoice?</p>
                                             <p className="text-gray-600 text-sm">A: After purchase, please contact our customer service email with your purchase receipt to issue an invoice.</p>
                                         </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}
