"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Card } from "../ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { testimonials } from "@/data/data"

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="relative container mx-auto">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-amber-50 dark:bg-amber-900/20 px-3 py-1 text-sm font-medium text-[#FA7436]">
            Traveler Stories
          </span>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            What Our <span className="text-[#FA7436]">Guests</span> Say
          </h2>
          <p className="text-xs text-muted-foreground">
            Real experiences from travelers who have explored Palestine with AeroCanaan
          </p>
        </div>
        <div className="relative py-10">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mx-auto w-full px-4 md:w-[80%]"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <Card className="border-primary shadow-primary flex w-full flex-col items-center rounded-2xl bg-card p-6 text-center shadow-sm transition-all duration-300 hover:scale-105">
                  <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="mt-3 text-foreground italic">&quot; {testimonial.feedback} &quot;</p>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute right-40 bottom-[-50px] flex gap-3">
            <button className="custom-prev rounded-full bg-[#FA7436] p-2 text-white shadow-md transition hover:scale-110">
              <ChevronLeft size={20} />
            </button>
            <button className="custom-next rounded-full bg-[#FA7436] p-2 text-white shadow-md transition hover:scale-110">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
