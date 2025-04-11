"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Card } from "../ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { testimonials } from "@/data/data"

const Testimonials = () => {
  return (
    <section className="relative py-20 dark:bg-gray-900">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 dark:opacity-[0.02]"></div>
      <div className="relative container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-amber-50 dark:bg-amber-900/20 px-4 py-2 text-sm font-medium text-[#FA7436]">
            Traveler Stories
          </span>
          <h2 className="mb-4 text-xl font-bold text-foreground md:text-2xl lg:text-4xl">
            What Our <span className="text-[#FA7436]">Guests</span> Say
          </h2>
          <p className="mx-auto max-w-md text-[12px] text-muted-foreground">
            Real experiences from travelers who have explored Palestine with us
          </p>
        </div>
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2.5,
              },
            }}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="!pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="relative h-full overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 p-4 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="absolute right-6 top-6 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300 dark:text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                  
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-[14px] text-foreground">&ldquo;{testimonial.feedback}&rdquo;</p>
                                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-8 flex justify-center gap-4">
            <button className="testimonial-prev flex h-12 w-12 items-center justify-center rounded-full border border-[#FA7436] bg-white text-[#FA7436] shadow-md transition hover:bg-[#FA7436] hover:text-white dark:border-gray-700 dark:bg-gray-800">
              <ChevronLeft size={24} />
            </button>
            <button className="testimonial-next flex h-12 w-12 items-center justify-center rounded-full border border-[#FA7436] bg-white text-[#FA7436] shadow-md transition hover:bg-[#FA7436] hover:text-white dark:border-gray-700 dark:bg-gray-800">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials