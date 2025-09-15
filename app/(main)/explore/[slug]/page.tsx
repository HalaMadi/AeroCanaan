import Image from "next/image"
import Link from "next/link"
import { Star, MapPin, Calendar, Clock, ArrowLeft } from "lucide-react"

export default async function PlaceDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const place = {
    id: 1,
    name: "Jerusalem",
    slug: "jerusalem",
    location: "Jerusalem, Palestine",
    rating: 4.9,
    reviews: 128,
    description:
      "The Old City is a 0.9-square-kilometer (0.35 sq mi) walled area within the modern city of Jerusalem. Until 1860, when the Jewish neighborhood Mishkenot Sha'ananim was established, this area constituted the entire city of Jerusalem. The Old City is home to several sites of key religious importance.",
    longDescription:
      "The Old City of Jerusalem is traditionally divided into four quarters, although the current designations were introduced only in the 19th century. The Old City is listed on the UNESCO World Heritage Site List and is surrounded by walls built in the 16th century by the Ottoman Empire. The Old City has been surrounded by walls for its protection since ancient times.",
    images: [
      "/images/jerusalem.jpg",
      "/images/jerusalem-old-city2.jpg",
      "/images/jerusalem-old-city3.jpg",
      "/images/jerusalem-old-city4.jpg",
    ],
    features: [
      "Historical Sites",
      "Religious Landmarks",
      "Cultural Experience",
      "Local Cuisine",
      "Guided Tours Available",
      "Souvenir Shops",
    ],
    price: 120,
    duration: "Full Day",
    included: ["Professional Guide", "Entrance Fees", "Lunch at Local Restaurant", "Transportation", "Bottled Water"],
    notIncluded: ["Personal Expenses", "Tips for Guide", "Travel Insurance"],
    itinerary: [
      {
        time: "08:00 AM",
        activity: "Pickup from your hotel",
      },
      {
        time: "09:00 AM",
        activity: "Visit to the Western Wall",
      },
      {
        time: "10:30 AM",
        activity: "Explore the Church of the Holy Sepulchre",
      },
      {
        time: "12:30 PM",
        activity: "Lunch at a traditional Palestinian restaurant",
      },
      {
        time: "02:00 PM",
        activity: "Walk through the colorful markets",
      },
      {
        time: "04:00 PM",
        activity: "Visit Al-Aqsa Mosque and Dome of the Rock",
      },
      {
        time: "06:00 PM",
        activity: "Return to hotel",
      },
    ],
    mapLocation: "/images/jerusalem.jpg",
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-8">
        <Link href="/explore" className="inline-flex items-center text-muted-foreground mb-6 hover:text-[#FA7436]">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Explore
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4 text-foreground">{place.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 text-[#FA7436] mr-1" />
                <span className="text-muted-foreground">{place.location}</span>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
                <span className="text-muted-foreground">
                  {place.rating} ({place.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="col-span-2">
                <Image
                  src={place.images[0] || "/placeholder.svg"}
                  alt={place.name}
                  width={800}
                  height={500}
                  className="rounded-lg w-full h-80 object-cover"
                />
              </div>
              {place.images.slice(1, 4).map((image, index) => (
                <div key={index}>
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${place.name} ${index + 1}`}
                    width={400}
                    height={300}
                    className="rounded-lg w-full h-40 object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">About This Place</h2>
              <p className="text-muted-foreground mb-4">{place.description}</p>
              <p className="text-muted-foreground">{place.longDescription}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">What to Expect</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {place.features.map((feature, index) => (
                  <div key={index} className="bg-muted p-4 rounded-lg">
                    <p className="font-medium text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Itinerary</h2>
              <div className="space-y-4">
                {place.itinerary.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 flex flex-col items-center">
                      <div className="w-3 h-3 bg-[#FA7436] rounded-full"></div>
                      {index < place.itinerary.length - 1 && <div className="w-0.5 h-full bg-border"></div>}
                    </div>
                    <div className="pb-4">
                      <p className="font-medium text-foreground">{item.time}</p>
                      <p className="text-muted-foreground">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Location</h2>
              <div className="rounded-lg overflow-hidden h-80">
                <Image
                  src={place.mapLocation || "/placeholder.svg"}
                  alt="Map location"
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg shadow-lg p-6 sticky top-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-3xl font-bold text-[#FA7436]">${place.price}</span>
                  <span className="text-muted-foreground">per person</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Available Daily</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{place.duration}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3 text-foreground">What&apos;s Included</h3>
                <ul className="space-y-2">
                  {place.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Not Included</h3>
                <ul className="space-y-2">
                  {place.notIncluded.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-[#FA7436] text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition">
                Book This Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}