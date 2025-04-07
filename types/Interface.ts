export interface Trip {
    id: string;
    title: string;
    image: string;
    rating: number;
    location: string;
    originalPrice: number;
    discountPrice: number;
    // Removed 'featured' to avoid redundancy with 'isFeatured'
    price: string;
    duration:number;
    description: string;
    isFeatured: boolean;
    hasDiscount: boolean;
    isSpecialOffer: boolean;
}

export interface RouteCardProps {
    id: number;
    name: string;
    slug: string;
    image: string;
    price: string;
    duration: string;
    rating: number;
}
export interface SpecialOfferCardProps {
    id: number;
    name: string;
    slug: string;
    image: string;
    price: string;
    rating: number;
    description: string;
}
export interface PlaceCardProps {
    id: number;
    name: string;
    slug: string;
    image: string;
    rating: number;
    location: string;
    originalPrice?: number;
    discountPrice?: number;
    featured?: boolean;
}
