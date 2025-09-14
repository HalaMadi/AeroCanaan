import Image from "next/image"
import Link from "next/link"
import { Star, Clock } from "lucide-react"
import type { RouteCardProps } from "@/types/Interface"

export function RouteCard({  name, slug, image, price, duration, rating }: RouteCardProps) {
  return (
    <Link href={`/explore/${slug}`}>
      <div className="rounded-lg overflow-hidden shadow-md bg-card transition-transform hover:scale-[1.02]">
        <div className="relative h-56">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="p-4 bg-muted">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-foreground">{name}</h3>
            <span className="text-[#FA7436] font-bold">${price}</span>
          </div>
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center text-muted-foreground text-sm">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span>{duration} Days Trip</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm ml-1 text-foreground">{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
