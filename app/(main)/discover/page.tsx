"use client";
import DiscoverCard from "@/components/discover/DiscoverCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Place } from "@/types/Interface";
import { TabsContent } from "@radix-ui/react-tabs";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const categories = ["historical", "religious", "natural", "cultural"];
const Discover = () => {
    const [destinations, setDestinations] = useState<Place[]>([]);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await axios.get("/api/places");
                setDestinations(response.data);
            } catch (error) {
                console.error("Error fetching destinations:", error);
            }
        };
        fetchDestinations();
    }, []);
    return (
        <main className="min-h-screen">
            <section className="relative mb-12 h-[40vh] min-h-[300px] w-full overflow-hidden">
                <Image
                    src={"/aka.jpg"}
                    fill
                    priority
                    alt={"Aka Landscape"}
                    className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <div className="max-w-4xl px-4 text-center">
                        <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">
                            Discover Palestine
                        </h1>
                        <p className="mx-auto max-w-xl text-sm text-white/90">
                            Explore the rich history, breathtaking landscapes,
                            and vibrant culture of Palestine through our curated
                            destinations.
                        </p>
                    </div>
                </div>
            </section>
            <Tabs defaultValue="all" className="mx-auto mb-12 max-w-6xl">
                <div className="mb-8 flex justify-center">
                    <TabsList className="bg-amber-50/80">
                        <TabsTrigger value="all" className="text-sm">
                            All Destinations
                        </TabsTrigger>
                        <TabsTrigger value="historical" className="text-sm">
                            Historical
                        </TabsTrigger>
                        <TabsTrigger value="religious" className="text-sm">
                            Religious
                        </TabsTrigger>
                        <TabsTrigger value="natural" className="text-sm">
                            Natural
                        </TabsTrigger>
                        <TabsTrigger value="cultural" className="text-sm">
                            Cultural
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="all" className="space-y-8">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {destinations.map((destination) => (
                            <DiscoverCard
                                key={destination.id}
                                destination={destination}
                            />
                        ))}
                    </div>
                </TabsContent>
                {categories.map((category) => (
                    <TabsContent
                        key={category}
                        value={category}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {destinations
                                .filter((dest) => dest.category === category)
                                .map((destination) => (
                                    <DiscoverCard
                                        key={destination.id}
                                        destination={destination}
                                    />
                                ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
            <div className="mx-auto mt-16 rounded-xl bg-amber-50 p-8 text-center">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    Ready to Experience Palestine?
                </h3>
                <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                    Join one of our guided tours to explore these amazing
                    destinations with knowledgeable local guides who will bring
                    the history and culture to life.
                </p>
                <Link
                    href={"/explore"}
                    className="inline-block rounded bg-[#FA7436] px-4 py-2 text-white hover:bg-[#e56a30]"
                >
                    View Our Tours
                </Link>
            </div>
        </main>
    );
};

export default Discover;
