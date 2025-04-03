import Image from "next/image"
import Link from "next/link"
import { Star, Clock } from "lucide-react"
import { RouteCardProps } from "@/types/Interface"



export function RouteCard({ id, name, slug, image, price, duration, rating }: RouteCardProps) {
  return (
    <Link href={`/explore/${slug}`}>
      <div className="rounded-lg overflow-hidden shadow-md bg-white transition-transform hover:scale-[1.02]">
        <div className="relative h-56">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">{name}</h3>
            <span className="text-orange-500 font-bold">${price}</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span>{duration} Days Trip</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm ml-1">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

