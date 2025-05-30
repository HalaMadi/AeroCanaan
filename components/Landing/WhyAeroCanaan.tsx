import { reasons } from "@/data/data"
import { Card, CardContent } from "../ui/card"

const WhyAeroCanaan = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-4 max-w-2xl text-center">
          <span className="mb-3 inline-block rounded-full bg-accent px-3 py-3 text-sm font-medium text-[#FA7436]">
            Travel with Confidence
          </span>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Why Choose <span className="text-[#FA7436]">AeroCanaan</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Experience the difference with our passionate team dedicated to creating unforgettable journeys through the
            Holy Land
          </p>
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {reasons.map((item, index) => (
            <Card
              className="group overflow-hidden border-none bg-card shadow-md transition-all duration-300 hover:shadow-xl"
              key={index}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <div className="p-8">
                    <div className="mb-5 ">{item.icon}</div>
                    <h3 className="mb-3 font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground text-xs">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyAeroCanaan
