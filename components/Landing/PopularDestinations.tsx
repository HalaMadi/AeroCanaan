"use client";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { Trip } from "@/types/Interface";

interface Place {
    id: string;
    name: string;
    location: string;
    shortDesc: string;
    images: {
        url: string;
    }[];
    trips: Trip[];
    availableTrips?: number;
}

const PopularDestinations = () => {
    const [destinations, setDestinations] = useState<Place[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await fetch("/api/places");
                if (!response.ok) {
                    throw new Error("Failed to fetch destinations");
                }
                const data = await response.json();
                // Get first 3 destinations
                setDestinations(data.slice(0, 3));
            } catch (err) {
                setError(
                    err instanceof Error ? err.message : "An error occurred"
                );
            } finally {
                setLoading(false);
            }
        };

        fetchDestinations();
    }, []);

    if (loading) {
        return (
            <section className="py-10">
                <div className="container mx-auto px-4 text-center">
                    <p>Loading destinations...</p>
                </div>
            </section>
        );
    }
    if (error) {
        return (
            <section className="py-10">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-red-500">{error}</p>
                </div>
            </section>
        );
    }

    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-12 max-w-2xl text-center">
                    <span className="mb-3 inline-block rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-[#FA7436] dark:bg-amber-900/20">
                        Explore Palestine
                    </span>
                    <h2 className="text-foreground mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
                        Popular{" "}
                        <span className="text-[#FA7436]">Destinations</span>
                    </h2>
                    <p className="text-muted-foreground text-xs">
                        Discover the most beloved places in the Holy Land, from
                        ancient historical sites to natural wonders
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {destinations.map((place) => (
                        <Card
                            key={place.id}
                            className="group bg-card relative w-92 overflow-hidden rounded-xl p-0 shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                            <CardContent className="p-0">
                                <div className="relative h-40 w-full overflow-hidden">
                                    <Image
                                        src={
                                            place.images[0]?.url ||
                                            "/placeholder.svg"
                                        }
                                        fill
                                        alt={place.name}
                                        className="object-cover transition-all duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                                </div>
                                <div className="p-4">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-foreground text-lg font-bold">
                                                {place.name}
                                            </h3>
                                            <p className="text-muted-foreground text-sm">
                                                {place.location}
                                            </p>
                                        </div>
                                        <div className="mt-1 flex items-center">
                                            <span className="text-muted-foreground text-xs font-medium">
                                                {place.availableTrips || 0}{" "}
                                                trips available
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
                                        {place.shortDesc}
                                    </p>
                                    <Link
                                        href={`/explore`}
                                        className="mt-6 block"
                                    >
                                        <Button className="w-full rounded-lg bg-[#FA7436] py-2 font-medium text-white transition-colors hover:bg-[#e05b2a]">
                                            Explore Now
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mt-10 text-center">
                    <Link href="/explore">
                        <Button
                            variant="outline"
                            className="group text-foreground border-[#FA7436] px-8 py-6 hover:bg-amber-50 dark:hover:bg-amber-900/20"
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
