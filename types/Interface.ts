export type Trip = {
    id: number;
    title: string;
    price: string;
    duration: string;
    rating: number;
    image: string;
};
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
