export interface Trip {
    id: string;
    title: string; 
    image: string;
    rating: number;
    location: string;
    originalPrice: number;
    discountPrice: number;
    price: string;
    duration: number;
    description: string;
    isFeatured: boolean;
    hasDiscount: boolean;
    isSpecialOffer: boolean;
    seats: number;
    bookedSeats: number;
    startDate: Date;
    endDate: Date;
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

export type Place = {
    id: string;
    name: string;
    slug: string;
    category: string;
    shortDesc: string;
    fullDesc: string;
    location: string;
    bestTimeToVisit: string;
    accessibilityInfo: string;
    localTips: string;
    images: { url: string }[];
    availableTrips: number;
    trips?: Trip[];
    historicalSignificance?: string;
    culturalImportance?: string;
};

export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    profilePicture?: string;
};
