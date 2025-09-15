import { MapPin, Shield, Users, Clock } from "lucide-react";

export const carouselImg = [
    { key: 1, src: "/1.jpg", alt: "Jericho", location: "Fasayel Mountains" },
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
        icon: <Clock className="h-10 w-10 text-[#FA7436]" />,
        title: "Flexible Itineraries",
        description:
            "Customize your journey with flexible itineraries tailored to your interests, pace, and travel style."
    }
];
export const destination = [
    {
        id: 1,
        name: "Jerusalem",
        image: "/1.jpg",
        rating: 4.9,
        reviews: 1284,
        price: 120,
        location: "Israel",
        category: "historical",
        activities: ["Old City Tour", "Western Wall", "Dome of the Rock"]
    },
    {
        id: 2,
        name: "Bethlehem",
        image: "/1.jpg",
        rating: 4.8,
        reviews: 892,
        price: 95,
        location: "West Bank",
        category: "historical",
        activities: ["Church of Nativity", "Shepherd's Field", "Local Crafts"]
    },
    {
        id: 4,
        name: "Jericho",
        image: "/",
        rating: 4.6,
        reviews: 756,
        price: 85,
        location: "West Bank",
        category: "historical",
        activities: ["Tel es-Sultan", "Mount of Temptation", "Hisham's Palace"]
    }
];
export const testimonials = [
    {
        name: "Lina Ahmad",
        role: "Traveler",
        feedback:
            "AeroCanaan provided an unforgettable experience! The guides were knowledgeable, and the views were breathtaking.",
        image: "/images/user1.jpg",
        rating: 5
    },
    {
        name: "Ahmad Saleh",
        role: "Adventurer",
        feedback:
            "Exploring Palestine with AeroCanaan was a dream come true. Highly recommended for any traveler!",
        image: "/images/user2.jpg",
        rating: 4.5
    },
    {
        name: "Sara Khaled",
        role: "Backpacker",
        feedback:
            "I had the best time ever! The team was so friendly, and the itinerary was perfectly planned.",
        image: "/images/user3.jpg",
        rating: 4.8
    },
    {
        name: "Omar Nasser",
        role: "Explorer",
        feedback:
            "A must-try experience! Everything was well organized, and the trip was beyond my expectations.",
        image: "/images/user4.jpg",
        rating: 4
    }
];
export const destinations = [
    {
        id: 1,
        name: "Old City of Jerusalem",
        category: "historical",
        shortDescription:
            "Explore the ancient walled city with its rich history spanning thousands of years, home to sites sacred to Judaism, Christianity, and Islam.",
        fullDescription:
            "The Old City of Jerusalem is a 0.9 square kilometer walled area within the modern city of Jerusalem. Until 1860, when the Jewish neighborhood Mishkenot Sha'ananim was established, this area constituted the entire city of Jerusalem. The Old City is home to several sites of key religious importance: the Temple Mount and Western Wall for Jews, the Church of the Holy Sepulchre for Christians, and the Dome of the Rock and al-Aqsa Mosque for Muslims.",
        historicalSignificance:
            "Jerusalem has been destroyed at least twice, besieged 23 times, captured and recaptured 44 times, and attacked 52 times throughout its history. The Old City was added to the UNESCO World Heritage Site List in 1981.",
        culturalImportance:
            "As a holy city for Judaism, Christianity, and Islam, Jerusalem has always been of great symbolic importance. It serves as a center of life, pilgrimage, and religious study.",
        location: "Jerusalem",
        images: [
            "/images/jerusalem.jpg",
            "/images/jerusalem.jpg",
            "/images/jerusalem.jpg",
            "/images/jerusalem.jpg"
        ],
        bestTimeToVisit:
            "Spring (March to May) and autumn (September to November) offer pleasant temperatures",
        accessibilityInfo:
            "The Old City has narrow, sometimes steep streets with steps. Some areas may be challenging for those with mobility issues.",
        localTips:
            "Visit early in the morning to avoid crowds, especially at major religious sites.",
        availableTrips: 5,
        trips: [
            {
                name: "Jerusalem Heritage Tour",
                description:
                    "A comprehensive day tour exploring the four quarters of the Old City with an expert guide.",
                duration: "Full day (8 hours)",
                price: 89,
                nextAvailable: "Every day",
                maxParticipants: 12
            },
            {
                name: "Sacred Jerusalem",
                description:
                    "Focus on the religious significance of Jerusalem's holy sites across three faiths.",
                duration: "6 hours",
                price: 75,
                nextAvailable: "Tue, Thu, Sun",
                maxParticipants: 10
            }
        ]
    },
    {
        id: 2,
        name: "Church of the Nativity",
        category: "religious",
        shortDescription:
            "Visit the birthplace of Jesus Christ in Bethlehem, one of the oldest continuously operating churches in the world.",
        fullDescription:
            "The Church of the Nativity is a basilica located in Bethlehem, marking the traditional place of Christ's birth. It was originally commissioned in 327 by Constantine the Great and his mother Helena on the site that was traditionally considered to be the birthplace of Jesus. The original church was completed in 339 and destroyed by fire during the Samaritan Revolts in the 6th century, and a new basilica was built in 565 by Justinian, the Byzantine Emperor.",
        historicalSignificance:
            "The church is the oldest major church in the Holy Land and the basilica church was listed as a UNESCO World Heritage Site in 2012. The site of the Church of the Nativity has had numerous additions since this original construction, including its prominent bell towers.",
        culturalImportance:
            "The site holds religious significance to Christians worldwide as the birthplace of Jesus Christ. It remains an important pilgrimage destination, especially during Christmas celebrations.",
        location: "Bethlehem",
        images: [
            "/images/bethlehem-nativity-church.jpg",
            "/images/bethlehem-nativity-interior.jpg",
            "/images/bethlehem-nativity-grotto.jpg",
            "/images/bethlehem-manger-square.jpg"
        ],
        bestTimeToVisit:
            "Year-round, though Christmas season (December) offers special celebrations",
        accessibilityInfo:
            "The main church is accessible, but the Grotto of the Nativity requires descending narrow stairs",
        localTips:
            "Visit on weekday mornings to avoid pilgrim groups. The entrance door is intentionally small (called the Door of Humility).",
        availableTrips: 3,
        trips: [
            {
                name: "Bethlehem Holy Sites Tour",
                description:
                    "Visit the Church of the Nativity and other significant religious sites in Bethlehem.",
                duration: "Half day (5 hours)",
                price: 65,
                nextAvailable: "Mon, Wed, Fri, Sun",
                maxParticipants: 15
            }
        ]
    },
    {
        id: 3,
        name: "Dead Sea",
        category: "Nature",
        shortDescription:
            "Experience floating effortlessly in the saltiest body of water on Earth, known for its therapeutic minerals and mud.",
        fullDescription:
            "The Dead Sea is a salt lake bordered by Jordan to the east and the West Bank to the west. It lies in the Jordan Rift Valley, and its main tributary is the Jordan River. The Dead Sea is 304 m (997 ft) deep, the deepest hypersaline lake in the world. With a salinity of 342 g/kg, or 34.2% (in 2011), it is one of the world's saltiest bodies of water – 9.6 times as salty as the ocean – and has a density of 1.24 kg/liter, which makes swimming similar to floating.",
        location: "Jordan Valley",
        images: [
            "/images/DeadSea.jpg",
            "/images/DeadSea.jpg",
            "/images/DeadSea.jpg",
            "/images/DeadSea.jpg"
        ],
        bestTimeToVisit:
            "Spring and fall offer pleasant temperatures. Summer can be extremely hot.",
        accessibilityInfo:
            "Most beaches have accessible facilities. The high salt content can be irritating to open wounds or sensitive skin.",
        localTips:
            "Apply Dead Sea mud for a natural spa treatment. Don't shave right before visiting, and keep water away from your eyes.",
        availableTrips: 4,
        trips: [
            {
                name: "Dead Sea Relaxation Day",
                description:
                    "Enjoy a full day at the Dead Sea with time for floating, mud treatments, and relaxation.",
                duration: "Full day (8 hours)",
                price: 75,
                nextAvailable: "Daily",
                maxParticipants: 20
            },
            {
                name: "Dead Sea & Masada Combo",
                description:
                    "Combine a visit to the historic fortress of Masada with relaxation time at the Dead Sea.",
                duration: "Full day (10 hours)",
                price: 110,
                nextAvailable: "Tue, Thu, Sun",
                maxParticipants: 15
            }
        ]
    },
    {
        id: 4,
        name: "Dome of the Rock",
        category: "religious",
        shortDescription:
            "Admire the iconic golden dome of this Islamic shrine, one of the most recognizable landmarks in Jerusalem.",
        fullDescription:
            "The Dome of the Rock is an Islamic shrine located on the Temple Mount in the Old City of Jerusalem. It was initially completed in 691–92 CE at the order of Umayyad Caliph Abd al-Malik. The Dome of the Rock is now one of the oldest works of Islamic architecture. Its significance stems from the belief that the Prophet Muhammad ascended to heaven from the rock at the center of the structure.",
        historicalSignificance:
            "The Dome of the Rock is built on the site of the Second Jewish Temple, destroyed during the Roman Siege of Jerusalem in 70 CE. The Foundation Stone the dome enshrines is the holiest spot in Judaism.",
        culturalImportance:
            "For Muslims, the rock is the site where Muhammad ascended to heaven. The Dome is one of the most sublime pieces of early Islamic architecture with its distinctive golden dome dominating Jerusalem's skyline.",
        location: "Jerusalem, Temple Mount",
        images: [
            "/images/dome-of-rock.jpg",
            "/images/dome-of-rock-close.jpg",
            "/images/temple-mount.jpg",
            "/images/dome-interior.jpg"
        ],
        bestTimeToVisit: "Early morning on weekdays to avoid crowds",
        accessibilityInfo:
            "The Temple Mount is accessible, though there may be security checks and restricted hours for non-Muslims",
        localTips:
            "Non-Muslims cannot enter the Dome itself but can view it from the Temple Mount plaza. Dress modestly when visiting.",
        availableTrips: 2,
        trips: [
            {
                name: "Jerusalem Sacred Sites Tour",
                description:
                    "Visit the Temple Mount and view the Dome of the Rock along with other significant religious sites.",
                duration: "Full day (7 hours)",
                price: 85,
                nextAvailable: "Sun, Tue, Thu",
                maxParticipants: 12
            }
        ]
    },
    {
        id: 5,
        name: "Hebron Old City",
        category: "historical",
        shortDescription:
            "Explore one of the oldest continuously inhabited cities in the world, with its rich history and the Tomb of the Patriarchs.",
        fullDescription:
            "Hebron is a Palestinian city in the southern West Bank, 30 km south of Jerusalem. Nestled in the Judaean Mountains, it lies 930 meters above sea level. Hebron is the largest city in the West Bank and home to approximately 215,000 Palestinians, and between 500 and 850 Jewish settlers concentrated in and around the old quarter. The city is most notable for containing the traditional burial site of the biblical patriarchs Abraham, Isaac, Jacob, and their wives.",
        historicalSignificance:
            "Hebron is one of the oldest cities in the region, mentioned in the Bible as the place where Abraham purchased the Cave of the Patriarchs as a burial place for his wife Sarah. The city has been continuously inhabited for more than 5,000 years.",
        culturalImportance:
            "Hebron is significant to both Jews and Muslims due to its association with Abraham. The Ibrahimi Mosque/Cave of the Patriarchs is the second holiest site in Judaism and the fourth in Islam.",
        location: "West Bank",
        images: [
            "/images/Hebron.jpg",
            "/images/Hebron.jpg",
            "/images/Hebron.jpg",
            "/images/Hebron.jpg"
        ],
        bestTimeToVisit:
            "Spring and autumn offer pleasant temperatures for exploring the old city",
        accessibilityInfo:
            "The old city has narrow streets and steps that may be challenging for those with mobility issues",
        localTips:
            "Hebron is known for its glass and ceramic production - visit workshops to see artisans at work",
        availableTrips: 2,
        trips: [
            {
                name: "Hebron Heritage Tour",
                description:
                    "Explore the historical and religious significance of Hebron with visits to the Tomb of the Patriarchs and the Old City.",
                duration: "Full day (7 hours)",
                price: 75,
                nextAvailable: "Wed, Sat",
                maxParticipants: 10
            }
        ]
    },
    {
        id: 6,
        name: "Wadi Qelt",
        category: "Nature",
        shortDescription:
            "Hike through this dramatic desert canyon with its stunning landscapes, ancient monasteries, and natural springs.",
        fullDescription:
            "Wadi Qelt is a geographic feature in the West Bank, originating near Jerusalem and running through the Judean Desert until it empties into the Jordan River near Jericho, shortly before it flows into the Dead Sea. The wadi is home to a unique ecosystem and several historical sites, including the St. George Monastery built into the cliffs of the canyon.",
        location: "West Bank, between Jerusalem and Jericho",
        images: [
            "/images/wadi-qelt-panorama.jpg",
            "/images/st-george-monastery.jpg",
            "/images/wadi-qelt-hiking.jpg",
            "/images/wadi-qelt-springs.jpg"
        ],
        bestTimeToVisit:
            "Spring (March-May) when wildflowers bloom and temperatures are moderate",
        accessibilityInfo:
            "Hiking trails vary in difficulty. The main viewpoints are accessible, but monastery visits require navigating steep paths.",
        localTips:
            "Bring plenty of water, sun protection, and sturdy footwear. Start hikes early in the morning, especially in summer.",
        availableTrips: 3,
        trips: [
            {
                name: "Wadi Qelt Hiking Adventure",
                description:
                    "A guided hike through the dramatic landscapes of Wadi Qelt with a visit to St. George Monastery.",
                duration: "Full day (8 hours)",
                price: 85,
                nextAvailable: "Tue, Thu, Sat",
                maxParticipants: 12
            },
            {
                name: "Desert Monastery Tour",
                description:
                    "Focus on the historical monasteries in the Judean Desert, including St. George in Wadi Qelt.",
                duration: "7 hours",
                price: 75,
                nextAvailable: "Mon, Wed, Fri",
                maxParticipants: 10
            }
        ]
    },
    {
        id: 7,
        name: "Nablus Old City",
        category: "cultural",
        shortDescription:
            "Wander through ancient souks, sample traditional sweets, and discover the rich cultural heritage of this historic Palestinian city.",
        fullDescription:
            "Nablus is one of the oldest cities in Palestine, located in a strategic position between Mount Ebal and Mount Gerizim. The Old City of Nablus is famous for its historic architecture, traditional soap factories, Turkish baths, and bustling markets. The city is particularly renowned for its production of Kanafeh, a traditional Middle Eastern dessert made with thin noodle-like pastry soaked in sweet syrup and layered with cheese.",
        culturalImportance:
            "Nablus has been a center of trade and culture for centuries. The city is known for its traditional olive oil soap production, which dates back to the 10th century. The old soap factories (masabins) are still operational and represent an important part of Palestinian cultural heritage.",
        location: "Northern West Bank",
        images: [
            "/images/Nablus.jpg",
            "/images/Nablus.jpg",
            "/images/Nablus.jpg",
            "/images/Nablus.jpg"
        ],
        bestTimeToVisit:
            "Spring and fall offer pleasant temperatures for exploring the old city",
        accessibilityInfo:
            "The old city has narrow streets and steps that may be challenging for those with mobility issues",
        localTips:
            "Don't miss trying the famous Nablus Kanafeh at Habibah Sweets, and visit Al-Shifa Turkish Bath for an authentic experience",
        availableTrips: 2,
        trips: [
            {
                name: "Nablus Cultural Experience",
                description:
                    "Explore the old city, visit traditional soap factories, and enjoy authentic Palestinian cuisine.",
                duration: "Full day (8 hours)",
                price: 70,
                nextAvailable: "Mon, Thu, Sat",
                maxParticipants: 12
            }
        ]
    },
    {
        id: 8,
        name: "Mar Saba Monastery",
        category: "religious",
        shortDescription:
            "Visit one of the oldest inhabited monasteries in the world, dramatically built into the cliffs of the Kidron Valley.",
        fullDescription:
            "Mar Saba is a Greek Orthodox monastery located east of Bethlehem in the West Bank. The monastery was founded by Saint Sabas of Cappadocia in the 5th century and has been continuously inhabited by monks since then, making it one of the oldest inhabited monasteries in the world. The dramatic architecture of the monastery, built into the cliffs of the Kidron Valley, offers a stunning visual experience.",
        historicalSignificance:
            "Mar Saba played an important role in the ecclesiastical struggles against various heresies of the early Church. The monastery has a rich collection of ancient manuscripts and icons.",
        location: "Kidron Valley, east of Bethlehem",
        images: [
            "/images/mar-saba-monastery.jpg",
            "/images/mar-saba-valley.jpg",
            "/images/mar-saba-interior.jpg",
            "/images/mar-saba-sunset.jpg"
        ],
        bestTimeToVisit: "Spring and autumn when temperatures are moderate",
        accessibilityInfo:
            "The monastery has many steps and uneven surfaces. Women are not permitted inside the main monastery but can view it from a nearby women's tower.",
        localTips:
            "Combine with a visit to Bethlehem. Dress modestly and bring water as facilities are limited.",
        availableTrips: 1,
        trips: [
            {
                name: "Desert Monasteries Tour",
                description:
                    "Visit Mar Saba and other ancient monasteries in the Judean Desert.",
                duration: "Full day (9 hours)",
                price: 90,
                nextAvailable: "Wed, Sun",
                maxParticipants: 10
            }
        ]
    },
    {
        id: 9,
        name: "Battir Terraces",
        category: "cultural",
        shortDescription:
            "Explore the UNESCO-listed ancient irrigation system and agricultural terraces that have been in continuous use for thousands of years.",
        fullDescription:
            "Battir is a Palestinian village located just southwest of Jerusalem in the West Bank. The village is known for its ancient terraces and irrigation system which dates back to pre-Roman times. The terraces are built along the hills, supported by stone walls and irrigated by a system of canals and pools that direct water from natural springs. This traditional system has been in continuous use for cultivation for thousands of years.",
        culturalImportance:
            "The cultural landscape of Battir was inscribed on UNESCO's World Heritage List in 2014, recognizing its outstanding universal value as an evolved cultural landscape. The site represents the continued agricultural practices and irrigation methods used since antiquity.",
        location: "West Bank, southwest of Jerusalem",
        images: [
            "/images/battir-terraces.jpg",
            "/images/battir-landscape.jpg",
            "/images/battir-irrigation.jpg",
            "/images/battir-village.jpg"
        ],
        bestTimeToVisit:
            "Spring when the terraces are green and wildflowers bloom",
        accessibilityInfo:
            "Some paths through the terraces are uneven and may be challenging for those with mobility issues",
        localTips:
            "Hike the 'Battir Cultural Landscape Trail' for the best views of the terraces and irrigation system",
        availableTrips: 2,
        trips: [
            {
                name: "Battir Eco-Tour",
                description:
                    "Explore the UNESCO World Heritage terraces and learn about traditional Palestinian agriculture.",
                duration: "Half day (5 hours)",
                price: 60,
                nextAvailable: "Tue, Fri, Sun",
                maxParticipants: 15
            }
        ]
    },
    {
        id: 10,
        name: "Sebastia Archaeological Site",
        category: "historical",
        shortDescription:
            "Discover the ruins of this ancient city that has been inhabited by various civilizations throughout history.",
        fullDescription:
            "Sebastia is an ancient town located near Nablus in the West Bank. The site has been inhabited by successive civilizations including Canaanites, Israelites, Romans, Byzantines, Crusaders, and Ottomans. The archaeological site includes a Roman forum, theater, colonnaded street, and Byzantine churches. The town was known as Samaria in ancient times and was rebuilt by Herod the Great, who named it Sebastia in honor of Emperor Augustus.",
        historicalSignificance:
            "Sebastia was the capital of the Kingdom of Israel in the 8th-9th centuries BCE. According to tradition, it is also the burial place of John the Baptist. The site showcases multiple layers of history spanning over 3,000 years.",
        location: "Near Nablus, West Bank",
        images: [
            "/images/sebastia-ruins.jpg",
            "/images/sebastia-columns.jpg",
            "/images/sebastia-church.jpg",
            "/images/sebastia-village.jpg"
        ],
        bestTimeToVisit: "Spring and autumn for comfortable temperatures",
        accessibilityInfo:
            "The archaeological site has uneven terrain and may be challenging for those with mobility issues",
        localTips:
            "Visit the nearby traditional Palestinian village of Sebastia for local cuisine after exploring the ruins",
        availableTrips: 1,
        trips: [
            {
                name: "Northern West Bank Heritage Tour",
                description:
                    "Explore the archaeological sites of Sebastia along with visits to Nablus and other historical locations.",
                duration: "Full day (9 hours)",
                price: 85,
                nextAvailable: "Wed, Sat",
                maxParticipants: 12
            }
        ]
    },
    {
        id: 11,
        name: "Jericho",
        category: "historical",
        shortDescription:
            "Visit one of the oldest continuously inhabited cities in the world, with archaeological remains dating back more than 10,000 years.",
        fullDescription:
            "Jericho, located in the Jordan Valley near the Dead Sea, is believed to be one of the oldest continuously inhabited cities in the world. Archaeological excavations have revealed settlements dating back to 9000 BCE. The city is mentioned numerous times in biblical texts and is known for its ancient walls and the story of Joshua. Modern Jericho is a Palestinian city in the West Bank and serves as an important agricultural center and winter resort.",
        historicalSignificance:
            "Jericho contains archaeological evidence of settlement dating back to 9000 BCE. The city is mentioned in the Bible as the first city conquered by the Israelites after crossing the Jordan River. It has been ruled by various empires throughout history.",
        location: "Jordan Valley, West Bank",
        images: [
            "/images/jericho-tel.jpg",
            "/images/jericho-monastery.jpg",
            "/images/jericho-cable-car.jpg",
            "/images/hisham-palace.jpg"
        ],
        bestTimeToVisit:
            "Winter and early spring when temperatures are mild (Jericho is below sea level and can be very hot in summer)",
        accessibilityInfo:
            "Most major sites are accessible, though some archaeological areas have uneven terrain",
        localTips:
            "Visit Hisham's Palace to see the remarkable 'Tree of Life' mosaic, and take the cable car to the Mount of Temptation",
        availableTrips: 4,
        trips: [
            {
                name: "Ancient Jericho Tour",
                description:
                    "Explore Tel es-Sultan (ancient Jericho), Hisham's Palace, and the Mount of Temptation.",
                duration: "Full day (7 hours)",
                price: 75,
                nextAvailable: "Daily",
                maxParticipants: 15
            },
            {
                name: "Jericho & Dead Sea Combo",
                description:
                    "Visit the historical sites of Jericho in the morning and enjoy the Dead Sea in the afternoon.",
                duration: "Full day (9 hours)",
                price: 95,
                nextAvailable: "Tue, Thu, Sun",
                maxParticipants: 12
            }
        ]
    },
    {
        id: 12,
        name: "Ramallah Cultural Center",
        category: "cultural",
        shortDescription:
            "Experience contemporary Palestinian culture at this vibrant arts and cultural hub in the heart of Ramallah.",
        fullDescription:
            "The Ramallah Cultural Center is a modern complex dedicated to promoting Palestinian arts, music, theater, and cultural activities. The center hosts regular exhibitions, performances, film screenings, and workshops, providing a platform for both established and emerging Palestinian artists. It serves as an important venue for cultural exchange and artistic expression in the West Bank.",
        culturalImportance:
            "The center plays a vital role in preserving and developing Palestinian cultural identity while fostering dialogue and exchange with international artists and audiences. It represents the resilience and creativity of Palestinian society.",
        location: "Ramallah, West Bank",
        images: [
            "/images/ramallah-cultural-center.jpg",
            "/images/ramallah-performance.jpg",
            "/images/ramallah-exhibition.jpg",
            "/images/ramallah-city.jpg"
        ],
        bestTimeToVisit:
            "Year-round, check the event calendar for special performances",
        accessibilityInfo: "The center is modern and fully accessible",
        localTips:
            "Combine with a visit to Ramallah's vibrant cafes and restaurants. Check the center's website for current exhibitions and events.",
        availableTrips: 0
    }
];


