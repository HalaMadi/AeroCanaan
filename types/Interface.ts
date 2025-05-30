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
    start_date: Date;
    end_date: Date;
    images: string[];
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

export interface Destination {
    images: string[];
    name: string;
    category: string;
    shortDescription: string;
    location: string;
    availableTrips: number;
    historicalSignificance: string;
    culturalImportance: string;
    bestTimeToVisit: string;
    localTips: string;
    accessibilityInfo: string;
    fullDescription: string;
    trips: Trip[];
    id: number;
    longDescription?: string;
    activities?: string[];
    reviews?: number;  
    rating?: number;
    price?: number;
  }