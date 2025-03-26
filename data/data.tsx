import { MapPin, Shield, Users, Heart, Clock, Leaf } from "lucide-react";

export const carouselImg = [
    { key: 1, src: "/1.jpg", alt: "palestine", location: "Palestine" },
    { key: 2, src: "/2.jpg", alt: "palestine", location: "Palestine" },
    { key: 3, src: "/3.jpg", alt: "palestine", location: "Palestine" },
    { key: 4, src: "/4.jpg", alt: "palestine", location: "Palestine" }
];

export const reasons = [
    {
        icon: <MapPin className="h-10 w-10 text-[#FA7436]" />,
        title: "Local Expertise",
        description:
            "Our guides are born and raised in Palestine, offering authentic insights and hidden gems you won't find elsewhere."
    },
    {
        icon: <Shield className="h-10 w-10 text-[#FA7436]" />,
        title: "Safety & Support",
        description:
            "Travel with peace of mind knowing our team provides 24/7 support and prioritizes your safety throughout your journey."
    },
    {
        icon: <Users className="h-10 w-10 text-[#FA7436]" />,
        title: "Small Groups",
        description:
            "Experience more intimate and meaningful connections with locals and fellow travelers in our small group tours."
    },
    {
        icon: <Heart className="h-10 w-10 text-[#FA7436]" />,
        title: "Authentic Experiences",
        description:
            "Immerse yourself in genuine cultural experiences, from home-cooked meals to traditional craft workshops."
    },
    {
        icon: <Clock className="h-10 w-10 text-[#FA7436]" />,
        title: "Flexible Itineraries",
        description:
            "Customize your journey with flexible itineraries tailored to your interests, pace, and travel style."
    },
    {
        icon: <Leaf className="h-10 w-10 text-[#FA7436]" />,
        title: "Responsible Tourism",
        description:
            "Travel with purpose through our commitment to sustainable practices and supporting local communities."
    }
];

export const destinations = [
    {
        id: 1,
        name: "Jerusalem",
        image: "/1.jpg",
        rating: 4.9,
        category: "historical",
        activities: ["Old City Tour", "Western Wall", "Dome of the Rock"]
    },
    {
        id: 2,
        name: "Bethlehem",
        image: "/1.jpg",
        rating: 4.8,
        category: "historical",
        activities: ["Church of Nativity", "Shepherd's Field", "Local Crafts"]
    },
    {
        id: 4,
        name: "Jericho",
        image: "/",
        rating: 4.6,
        category: "historical",
        activities: ["Tel es-Sultan", "Mount of Temptation", "Hisham's Palace"]
    },
   
];
