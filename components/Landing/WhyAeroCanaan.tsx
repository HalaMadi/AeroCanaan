import { reasons } from "@/data/data";
import React from "react";
import { Card, CardContent } from "../ui/card";

const WhyAeroCanaan = () => {
    return (
        <section className="relative overflow-hidden bg-white py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="mb-3 inline-block rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-[#FA7436]">
                        Travel with Confidence
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-[#222222] md:text-4xl lg:text-5xl">
                        Why Choose{" "}
                        <span className="text-[#FA7436]">AeroCanaan</span>
                    </h2>
                    <p className="text-[#666666]">
                        Experience the difference with our passionate team
                        dedicated to creating unforgettable journeys through the
                        Holy Land
                    </p>
                </div>
                {/* cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((item, index) => (
                        <Card
                            className="group overflow-hidden border-none bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                            key={index}
                        >
                            <CardContent className="p-0">
                                <div className="relative overflow-hidden">
                                    <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-amber-50 opacity-70 transition-transform duration-300 group-hover:scale-125"></div>
                                    <div className="p-8">
                                        <div className="mb-5">{item.icon}</div>
                                        <h3 className="mb-3 text-xl font-bold text-[#222222]">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#666666]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyAeroCanaan;
