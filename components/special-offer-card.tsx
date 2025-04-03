import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { SpecialOfferCardProps } from "@/types/Interface";

export function SpecialOfferCard({
    id,
    name,
    slug,
    image,
    price,
    rating,
    description
}: SpecialOfferCardProps) {
    return (
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <div className="relative h-56">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="bg-gray-50 p-5">
                <h3 className="mb-2 text-lg font-semibold">{name}</h3>
                <div className="mb-3 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                            key={star}
                            className={`h-4 w-4 ${star <= Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                    ))}
                </div>
                <p className="mb-4 text-sm text-gray-600">{description}</p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="mr-1 text-sm text-gray-500">From</span>
                        <span className="text-xl font-bold text-orange-500">
                            €{price}
                        </span>
                    </div>
                    <Link href={`/explore/${slug}`}>
                        <button className="rounded bg-orange-500 px-4 py-2 text-sm text-white uppercase">
                            Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
