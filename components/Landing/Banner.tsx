"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { carouselImg } from "@/data/data";
const Banner = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white py-12 md:py-7">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Lift side  */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="h-1 w-10 bg-[#FA7436]"></div>
                            <p className="text-xs font-medium tracking-wider text-[#FA7436] uppercase">
                                Explore Palestine
                            </p>
                        </div>
                        <h1 className="text-xl leading-tight font-bold text-[#222222] md:text-4xl lg:text-6xl">
                            Discover The{" "}
                            <span className="text-[#FA7436]">Holy Land</span>{" "}
                            With Us
                        </h1>
                        <p className="max-w-md text-sm text-[#666666]">
                            Experience the rich history, breathtaking
                            landscapes, and vibrant culture from the river to
                            the sea.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                className="group bg-[#FA7436] px-6 text-white hover:bg-amber-600"
                                asChild
                            >
                                <Link href="/destinations">
                                    Start Exploring
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                className="border-[#FA7436] px-6 text-[#222222] hover:bg-amber-50"
                                asChild
                            >
                                <Link href="/about">Learn More</Link>
                            </Button>
                        </div>
                        <div className="mt-2 flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((avatar) => (
                                    <Avatar
                                        key={avatar}
                                        className="h-12 w-12 overflow-hidden rounded-full border-2 border-white"
                                    >
                                        <AvatarImage src="https://www.gravatar.com/avatar/?d=mp&f=y" />
                                    </Avatar>
                                ))}
                            </div>
                            <div className="space-y-1">
                                <p className="font-medium text-sm text-[#222222]">
                                    2,500+ happy travelers
                                </p>
                                <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            className="h-4 w-3 fill-amber-400"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                    <span className="ml-1 text-xs text-[#666666]">
                                        (4.9)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right side - Carousel  */}
                    <div className="relative">
                        <Carousel
                            plugins={[plugin.current]}
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                            opts={{
                                align: "start",
                                loop: true
                            }}
                            className="w-full"
                        >
                            <CarouselContent>
                                {carouselImg.map((img) => (
                                    <CarouselItem key={img.key}>
                                        <div className="relative p-1">
                                            <Card className="overflow-hidden border-none py-0 shadow-lg">
                                                <CardContent className="relative flex aspect-[4/3] items-center justify-center p-0">
                                                    <Image
                                                        src={
                                                            img.src ||
                                                            "/placeholder.svg"
                                                        }
                                                        alt={img.alt}
                                                        fill
                                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                                        quality={90}
                                                        priority={img.key === 1}
                                                        loading={
                                                            img.key === 1
                                                                ? "eager"
                                                                : "lazy"
                                                        }
                                                    />
                                                    <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                                                        <div className="flex items-center gap-2">
                                                            <MapPin className="h-5 w-5 text-[#FA7436]" />
                                                            <span className="font-medium">
                                                                {img.location}
                                                            </span>
                                                        </div>
                                                        <h3 className="mt-1 text-xl font-bold">
                                                            {img.alt}
                                                        </h3>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
                            <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
