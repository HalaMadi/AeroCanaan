import DiscoverCard from "@/components/discover/discoverCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { destinations } from "@/data/data";
import { TabsContent } from "@radix-ui/react-tabs";
import Image from "next/image";

const Discover = () => {
    return (
        <main className="min-h-screen">
            <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
                <Image
                    src={"/DeadSea.jpg"}
                    fill
                    priority
                    alt={"DeadSea"}
                    className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="max-w-4xl px-4 text-center">
                        <h1 className="mb-4 text-3xl font-bold text-white md:text-5xl">
                            Discover Palestine
                        </h1>
                        <p className="mx-auto max-w-3xl text-sm text-white/90 md:text-lg">
                            Explore the rich history, breathtaking landscapes,
                            and vibrant culture of Palestine through our curated
                            destinations.
                        </p>
                    </div>
                </div>
            </section>
            <div className="container mx-auto px-4 py-12">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
                        Explore Our Destinations
                    </h2>
                    <p className="text-[12px] text-gray-600">
                        From ancient historical sites to breathtaking natural
                        landscapes, Palestine offers a diverse range of
                        experiences for every traveler. Browse our destinations
                        by category and discover the perfect places for your
                        journey.
                    </p>
                </div>
            </div>
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

                {/* All Destinations Tab */}
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

                {/* Category-specific Tabs */}
                {["historical", "religious", "natural", "cultural"].map(
                    (category) => (
                        <TabsContent
                            key={category}
                            value={category}
                            className="space-y-8"
                        >
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {destinations
                                    .filter(
                                        (dest) => dest.category === category
                                    )
                                    .map((destination) => (
                                        <DiscoverCard
                                            key={destination.id}
                                            destination={destination}
                                        />
                                    ))}
                            </div>
                        </TabsContent>
                    )
                )}
            </Tabs>

            {/* Call to Action */}
            <div className="mx-auto mt-16 max-w-4xl rounded-xl bg-amber-50 p-8 text-center">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                    Ready to Experience Palestine?
                </h3>
                <p className="mx-auto mb-6 max-w-2xl text-gray-600">
                    Join one of our guided tours to explore these amazing
                    destinations with knowledgeable local guides who will bring
                    the history and culture to life.
                </p>
                <Button className="bg-[#FA7436] text-white hover:bg-[#e56a30]">
                    View Our Tours
                </Button>
            </div>
        </main>
    );
};

export default Discover;
