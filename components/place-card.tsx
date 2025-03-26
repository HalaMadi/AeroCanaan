import Image from "next/image"
import Link from "next/link"
import { Star, MapPin } from "lucide-react"

interface PlaceCardProps {
  id: number
  name: string
  slug: string
  image: string
  rating: number
  location: string
  originalPrice?: number
  discountPrice?: number
  featured?: boolean
}

export function PlaceCard({
  id,
  name,
  slug,
  image,
  rating,
  location,
  originalPrice,
  discountPrice,
  featured = false,
}: PlaceCardProps) {
  return (
    <Link href={`/explore/${slug}`}>
      <div className="rounded-lg overflow-hidden shadow-md bg-white transition-transform hover:scale-[1.02]">
        <div className="relative h-48">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          {featured && (
            <div className="absolute bottom-4 right-4">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium">Book Now</button>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm ml-1">{rating}</span>
            </div>
          </div>
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span>{location}</span>
          </div>
          {(originalPrice || discountPrice) && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {originalPrice && <span className="text-gray-400 line-through">${originalPrice}</span>}
                {discountPrice && <span className="text-orange-500 font-bold">${discountPrice}</span>}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

