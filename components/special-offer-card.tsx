import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"

interface SpecialOfferCardProps {
  id: number
  name: string
  slug: string
  image: string
  price: string
  rating: number
  description: string
}

export function SpecialOfferCard({ id, name, slug, image, price, rating, description }: SpecialOfferCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white">
      <div className="relative h-56">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>
      <div className="p-5 bg-gray-50">
        <h3 className="font-semibold text-lg mb-2">{name}</h3>
        <div className="flex mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`h-4 w-4 ${star <= Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-gray-500 text-sm mr-1">From</span>
            <span className="text-orange-500 font-bold text-xl">€{price}</span>
          </div>
          <Link href={`/explore/${slug}`}>
            <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm uppercase">Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

