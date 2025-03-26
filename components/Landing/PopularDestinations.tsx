import { destinations } from "@/data/data";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const PopularDestinations = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="mb-3 inline-block rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-[#FA7436]">
                        Explore Palestine
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-[#222222] md:text-4xl lg:text-5xl">
                        Popular{" "}
                        <span className="text-[#FA7436]">Destinations</span>
                    </h2>
                    <p className="text-[#666666]">
                        Discover the most beloved places in the Holy Land, from
                        ancient historical sites to natural wonders
                    </p>
                </div>
                {/* Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {destinations.map((des) => (
                        <Card
                            key={des.id}
                            className="group overflow-hidden rounded-lg border border-gray-200 p-0 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                        >
                            <CardContent className="p-0">
                                <div className="relative h-64 w-full overflow-hidden rounded-t-lg">
                                    <Image
                                        src={des.image}
                                        fill
                                        alt={des.name}
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                                    <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 shadow-md backdrop-blur-sm">
                                        <Star
                                            fill="orange"
                                            size={18}
                                            className="text-orange-400"
                                        />
                                        <span className="text-sm font-medium text-gray-900">
                                            {des.rating}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
                                            {des.name}
                                        </h3>
                                        <MapPin
                                            className="h-5 w-5 text-[#FA7436]"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {des.activities
                                            .slice(0, 3)
                                            .map((activity, index) => (
                                                <span
                                                    key={index}
                                                    className="max-w-[120px] truncate rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-[#FA7436]"
                                                >
                                                    {activity}
                                                </span>
                                            ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <Link href={'/destination'}>
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
