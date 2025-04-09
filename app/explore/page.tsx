import Image from "next/image"
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react"

export default function ExplorePlaces() {
  return (
    <main className="min-h-screen bg-background">
      {/* Featured Destinations Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Exclusive <span className="text-[#FA7436]">deals & discounts</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our fantastic early booking discounts & start planning your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredDestinations.map((destination) => (
            <div key={destination.id} className="rounded-lg overflow-hidden shadow-md bg-card">
              <div className="relative h-48">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
                {destination.featured && (
                  <div className="absolute bottom-4 right-4">
                    <button className="bg-[#FA7436] text-white px-4 py-2 rounded-md text-sm font-medium">
                      Book Now
                    </button>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg text-foreground">{destination.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm ml-1 text-foreground">{destination.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <MapPin className="h-3.5 w-3.5 mr-1" />
                  <span>{destination.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground line-through">${destination.originalPrice}</span>
                    <span className="text-[#FA7436] font-bold">${destination.discountPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <button className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-card text-foreground">
            <ChevronLeft className="h-4 w-4" />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                page === 1 ? "bg-[#FA7436] text-white" : "border border-border bg-card text-foreground"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-8 h-8 rounded-full bg-[#FA7436] text-white flex items-center justify-center">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Vacation Plans Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Best <span className="text-[#FA7436]">vacation plan</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers!
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center bg-card text-foreground">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#FA7436] text-white flex items-center justify-center">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vacationPlans.map((plan) => (
            <div key={plan.id} className="rounded-lg overflow-hidden shadow-md bg-card">
              <div className="relative h-56">
                <Image src={plan.image || "/placeholder.svg"} alt={plan.name} fill className="object-cover" />
              </div>
              <div className="p-4 bg-muted">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-foreground">{plan.name}</h3>
                  <span className="text-[#FA7436] font-bold">${plan.price}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <span className="mr-2">{plan.duration} Days Trip</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm ml-1 text-foreground">{plan.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 relative text-foreground">
              Special Offer
              <span className="absolute -bottom-2 left-0 w-32 h-1 bg-[#FA7436]"></span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-right">Check out our special offer and discounts</p>
        </div>

        <div className="flex gap-4 mb-4">
          <button className="w-10 h-10 rounded-md bg-gray-900 text-white flex items-center justify-center">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="w-10 h-10 rounded-md bg-[#FA7436] text-white flex items-center justify-center">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialOffers.map((offer) => (
            <div key={offer.id} className="rounded-lg overflow-hidden shadow-md bg-card">
              <div className="relative h-56">
                <Image src={offer.image || "/placeholder.svg"} alt={offer.name} fill className="object-cover" />
              </div>
              <div className="p-5 bg-muted">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{offer.name}</h3>
                <div className="flex mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{offer.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-muted-foreground text-sm mr-1">From</span>
                    <span className="text-[#FA7436] font-bold text-xl">€{offer.price}</span>
                  </div>
                  <button className="bg-[#FA7436] text-white px-4 py-2 rounded text-sm uppercase">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

// Sample data for featured destinations
const featuredDestinations = [
  {
    id: 1,
    name: "Jerusalem",
    image: "/images/jerusalem.jpg",
    rating: 4.8,
    location: "Palestine",
    originalPrice: 900,
    discountPrice: 750,
    featured: true,
  },
  {
    id: 2,
    name: "Bethlehem",
    image: "/images/bethlehem.jpg",
    rating: 4.6,
    location: "Palestine",
    originalPrice: 850,
    discountPrice: 700,
    featured: false,
  },
  {
    id: 3,
    name: "Jericho",
    image: "/images/jericho.jpeg",
    rating: 4.5,
    location: "Palestine",
    originalPrice: 800,
    discountPrice: 650,
    featured: false,
  },
  {
    id: 4,
    name: "Hebron",
    image: "/images/hebron.jpeg",
    rating: 4.7,
    location: "Palestine",
    originalPrice: 880,
    discountPrice: 720,
    featured: false,
  },
]

// Sample data for vacation plans
const vacationPlans = [
  {
    id: 1,
    name: "Al-Aqsa Mosque, Jerusalem",
    image: "/images/jerusalem2.jpeg",
    price: "5,42k",
    duration: 10,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Dead Sea, Palestine",
    image: "/images/deadsea2.jpeg",
    price: "3,42k",
    duration: 7,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Church of the Nativity, Bethlehem",
    image: "/images/church.jpeg",
    price: "4,42k",
    duration: 8,
    rating: 4.6,
  },
]

// Sample data for special offers
const specialOffers = [
  {
    id: 1,
    name: "Al-Jazzar Mosque",
    image: "/images/aljazzar.webp",
    price: "500",
    rating: 5,
    description:
      "An Ottoman-era mosque built in the 18th century, known for its green dome, tall minaret, and blue-tiled courtyard, making it a significant Islamic landmark.",
  },
  {
    id: 2,
    name: "Gaza Beach",
    image: "/images/gaza-beach.jpg",
    price: "800",
    rating: 5,
    description:
      "A scenic Mediterranean coastline with golden sands and blue waters, serving as a vital social and recreational spot for Gaza's residents.",
  },
  {
    id: 3,
    name: "Hisham's Palace",
    image: "/images/Hisham_Palace.jpg",
    price: "750",
    rating: 5,
    description:
      "An Umayyad-era archaeological site from the 8th century, famous for its Tree of Life mosaic, one of the most beautiful in Islamic art.",
  },
  {
    id: 4,
    name: "Wadi Qelt",
    image: "/images/wadiqelt.jpg",
    price: "450",
    rating: 5,
    description:
      "A stunning natural valley between Jerusalem and Jericho, featuring flowing water, breathtaking cliffs, and St. George's Monastery, a historic pilgrimage site.",
  },
  {
    id: 5,
    name: "Sebastia",
    image: "/images/sebastia.jpg",
    price: "400",
    rating: 5,
    description:
      "An archaeological site with Roman and Byzantine ruins, including an ancient Roman theater and royal palace remains, perfect for history lovers.",
  },
  {
    id: 6,
    name: "Solomon's Pools",
    image: "/images/suliman.jpg",
    price: "550",
    rating: 5,
    description:
      "Solomon's Pools are three ancient reservoirs near Bethlehem, built during the Roman era to supply water to Jerusalem. They are a historical landmark surrounded by beautiful nature..",
  },
]
