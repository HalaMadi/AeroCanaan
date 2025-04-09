// prisma/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const places = [
        {
            name: "Wadi Qelt",
            slug: "wadi-qelt",
            category: "Natural Trail",
            shortDesc:
                "A scenic valley trail between Jericho and Jerusalem with ancient monasteries.",
            fullDesc:
                "Wadi Qelt is a beautiful valley stretching from Jerusalem to Jericho, offering hiking routes, monasteries, and desert landscapes.",
            location: "Between Jericho & Jerusalem",
            bestTimeToVisit: "Spring and Autumn",
            accessibilityInfo: "Hiking trail, partially accessible by car",
            localTips: "Bring water and wear proper shoes.",
            images: {
                create: [
                    {
                        url: "https://res.cloudinary.com/dbiux1feu/image/upload/v1743791743/Nahal_prat2_nsxend.jpg"
                    },
                    {
                        url: "https://res.cloudinary.com/dbiux1feu/image/upload/v1744187470/wadi_qelt2_orlwxi.jpg"
                    },
                    {
                        url: "https://res.cloudinary.com/dbiux1feu/image/upload/v1744187473/wadi_qelt_ksxjko.jpg"
                    }
                ]
            }
        },
        {
            name: "Church of the Nativity",
            slug: "church-of-the-nativity",
            category: "Religious Site",
            shortDesc:
                "A historic religious site believed to be the birthplace of Prophet Isa (peace be upon him).",
            fullDesc:
                "Located in Bethlehem, this ancient church is considered one of the oldest in the world and attracts visitors from various faiths.",
            location: "Bethlehem",
            bestTimeToVisit: "Winter holidays or Spring",
            accessibilityInfo: "Fully accessible",
            localTips: "Visit early in the morning to avoid crowds.",
            historicalSignificance:
                "Believed to be built over the cave where Prophet Isa (peace be upon him) was born.",
            images: {
                create: [
                    {
                        url: "https://res.cloudinary.com/dbiux1feu/image/upload/v1744187738/Church-of-the-Nativity_ltvifa.jpg"
                    },
                    {
                        url: "https://res.cloudinary.com/dbiux1feu/image/upload/v1744187774/church-of-the-nativity_1_crykfb.jpg"
                    }
                ]
            }
        },

        {
            name: "Battir Village",
            slug: "battir-village",
            category: "Cultural Landscape",
            shortDesc:
                "UNESCO-listed agricultural terraces and ancient irrigation systems.",
            fullDesc:
                "Battir is famous for its Roman-era irrigation channels and traditional farming terraces.",
            location: "West of Bethlehem",
            bestTimeToVisit: "Spring",
            accessibilityInfo: "Narrow roads, but walkable",
            localTips: "Try local food and speak to farmers.",
            culturalImportance: "Showcases sustainable traditional farming.",
            images: {
                create: [
                    {
                        url: "https://res.cloudinary.com/dbiux1feu/image/upload/v1744187913/battir_xw8ggm.jpg"
                    },
                    {
                        url: "https://res.cloudinary.com/dbiux1feu/image/upload/v1744187913/battir2_p8jlrj.jpg"
                    },
                    {
                        url: "https://res.cloudinary.com/dbiux1feu/image/upload/v1744187913/battier3_o4abxy.jpg"
                    }
                ]
            }
        }
    ];

    for (const place of places) {
        await prisma.place.create({
            data: place
        });
    }

    // بعد await prisma.place.create...
    const placesInDb = await prisma.place.findMany();

    const trips = [
        {
            title: "Hike Through Wadi Qelt",
            slug: "wadi-qelt-hike",
            location: "Wadi Qelt",
            duration: 1,
            start_date: new Date("2025-05-01"),
            end_date: new Date("2025-05-01"),
            price: 35.0,
            originalPrice: 50.0,
            discountPrice: 35.0,
            seats: 20,
            image: "https://res.cloudinary.com/dbiux1feu/image/upload/v1744187473/wadi_qelt_ksxjko.jpg",
            rating: 5,
            featured: true,
            description: "A guided hike through the Wadi Qelt valley.",
            isFeatured: true,
            isSpecialOffer: true,
            hasDiscount: true,
            placeId: placesInDb.find((p) => p.slug === "wadi-qelt")?.id
        },
        {
            title: "Christmas Pilgrimage to Bethlehem",
            slug: "bethlehem-christmas-tour",
            location: "Bethlehem",
            duration: 2,
            start_date: new Date("2025-12-24"),
            end_date: new Date("2025-12-26"),
            price: 120.0,
            originalPrice: 150.0,
            discountPrice: 120.0,
            seats: 50,
            image: "https://res.cloudinary.com/dbiux1feu/image/upload/v1744187738/Church-of-the-Nativity_ltvifa.jpg",
            rating: 4,
            featured: false,
            description:
                "Visit the Church of the Nativity and join local festivities.",
            isFeatured: false,
            isSpecialOffer: true,
            hasDiscount: true,
            placeId: placesInDb.find((p) => p.slug === "church-of-the-nativity")
                ?.id
        },
        {
            title: "Cultural Day in Battir",
            slug: "battir-cultural-tour",
            location: "Battir",
            duration: 1,
            start_date: new Date("2025-04-20"),
            end_date: new Date("2025-04-20"),
            price: 25.0,
            originalPrice: 30.0,
            discountPrice: 25.0,
            seats: 15,
            image: "https://res.cloudinary.com/dbiux1feu/image/upload/v1744187913/battir_xw8ggm.jpg",
            rating: 5,
            featured: true,
            description:
                "Explore traditional agriculture, meet locals, and enjoy homemade food.",
            isFeatured: true,
            isSpecialOffer: true,
            hasDiscount: true,
            placeId: placesInDb.find((p) => p.slug === "battir-village")?.id
        }
    ];

    for (const trip of trips) {
        await prisma.trip.create({ data: trip });
    }

    const user = await prisma.user.create({
        data: {
            firstName: "Hala",
            lastName: "Madi",
            email: "hala@example.com",
            mobile: "0590000000",
            password: "123456",
            role: "USER"
        }
    });

    const firstTrip = await prisma.trip.findFirst();

    if (firstTrip) {
        await prisma.booking.create({
            data: {
                userId: user.id,
                tripId: firstTrip.id,
                status: "CONFIRMED"
            }
        });
    }
}
main()
    .then(() => {
        console.log("Seeding completed.");
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
