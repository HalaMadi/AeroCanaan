import Image from "next/image";
import { Trip } from "@/lib/Interface";
interface BookNowProps {
    trip: Trip;
    onClose: () => void;
}
export default function Book({ trip, onClose }: BookNowProps) {
    return (
        <div className="bg-opacity-50 fixed inset-0 flex items-center justify-center bg-white text-center">
            <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900">
                    {trip.title}
                </h2>
                <Image
                    src={trip.image}
                    alt={trip.title}
                    width={400}
                    height={250}
                    className="mt-3 rounded-md"
                />
                <p className="mt-2 text-gray-600">{trip.duration}</p>
                <p className="text-lg font-bold text-orange-500">
                    {trip.price}
                </p>
                <p className="font-bold text-yellow-500">⭐ {trip.rating}</p>
                <div className="mt-4 flex justify-between">
                    <button
                        onClick={onClose}
                        className="rounded-lg border border-orange-500 px-4 py-2 text-orange-500 hover:bg-orange-100 cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => alert("Booking Confirmed!")}
                        className="rounded-lg border border-orange-500 px-4 py-2 text-orange-500 hover:bg-orange-100 cursor-pointer"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
