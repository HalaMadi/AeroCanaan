import { destinations } from "@/data/data";
import { ArrowRight, Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const PopularDestinations = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <span className="mb-3 inline-block rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-[#FA7436]">
                        Explore Palestine
                    </span>
                    <h2 className="mb-4 text-2xl font-bold text-[#222222] md:text-3xl lg:text-4xl">
                        Popular{" "}
                        <span className="text-[#FA7436]">Destinations</span>
                    </h2>
                    <p className="text-xs text-[#666666]">
                        Discover the most beloved places in the Holy Land, from
                        ancient historical sites to natural wonders
                    </p>
                </div>
                {/* Cards */}
                <div className="flex flex-wrap justify-center gap-8">
                    {destinations.map((des) => (
                        <Card
                            key={des.id}
                            className="group relative w-92 overflow-hidden rounded-xl bg-white p-0 shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                            <CardContent className="p-0">
                                <div className="relative h-40 w-full overflow-hidden">
                                    <Image
                                        src={des.image}
                                        fill
                                        alt={des.name}
                                        className="object-cover transition-all duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                                </div>
                                <div className="p-4">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-800">
                                                {des.name}
                                            </h3>
                                        </div>
                                        <div className="mt-1 flex items-center">
                                            <Star
                                                fill="orange"
                                                size={16}
                                                className="text-orange-400"
                                            />
                                            <span className="ml-1 text-xs font-medium text-gray-600">
                                                {des.rating}
                                            </span>
                                        </div>
                                    </div>{" "}
                                    <div className="mt-4 flex flex-wrap gap-1">
                                        {des.activities
                                            .slice(0, 4)
                                            .map((activity, index) => (
                                                <span
                                                    key={index}
                                                    className="rounded-full bg-amber-50 px-3 py-2 text-[10px] font-medium text-amber-600"
                                                >
                                                    {activity}
                                                </span>
                                            ))}
                                    </div>
                                    <button className="mt-6 w-full rounded-lg bg-[#FA7436] py-2 font-medium text-white transition-colors hover:bg-[#e05b2a]">
                                        Explore Now
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <Link href={"/explore"}>
                        <Button
                            variant="outline"
                            className="group border-[#FA7436] px-8 py-6 text-[#222222] hover:bg-amber-50"
                        >
                            View All Destinations
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;
