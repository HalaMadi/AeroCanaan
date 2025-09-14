import Image from "next/image"
import Link from "next/link"
import { Star, MapPin } from "lucide-react"
import type { PlaceCardProps } from "@/types/Interface"

export function PlaceCard({
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
      <div className="rounded-lg overflow-hidden shadow-md bg-card transition-transform hover:scale-[1.02]">
        <div className="relative h-48">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          {featured && (
            <div className="absolute bottom-4 right-4">
              <button className="bg-[#FA7436] text-white px-4 py-2 rounded-md text-sm font-medium">Book Now</button>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg text-foreground">{name}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm ml-1 text-foreground">{rating}</span>
            </div>
          </div>
          <div className="flex items-center text-muted-foreground text-sm mb-3">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            <span>{location}</span>
          </div>
          {(originalPrice || discountPrice) && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {originalPrice && <span className="text-muted-foreground line-through">${originalPrice}</span>}
                {discountPrice && <span className="text-[#FA7436] font-bold">${discountPrice}</span>}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
