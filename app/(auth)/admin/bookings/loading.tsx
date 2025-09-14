import { Loader2 } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function BookingsLoading() {
  return (
    <div className="p-6 bg-background">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Bookings</h1>
          <p className="text-muted-foreground">Manage customer bookings and reservations</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" /> Export
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>All Bookings</CardTitle>
          <CardDescription>Loading bookings...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <div className="h-10 w-full bg-muted rounded animate-pulse"></div>
            </div>
            <div className="w-full md:w-auto">
              <div className="h-10 w-24 bg-muted rounded animate-pulse"></div>
            </div>
          </div>

          <div className="rounded-md border">
            <div className="p-4 flex justify-center items-center">
              <Loader2 className="h-8 w-8 animate-spin text-[#FA7436] mr-2" />
              <span className="text-foreground">Loading booking data...</span>
            </div>

            {/* Skeleton table */}
            <div className="w-full">
              <div className="border-b p-4">
                <div className="grid grid-cols-7 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                    <div key={i} className="h-6 bg-muted rounded animate-pulse"></div>
                  ))}
                </div>
              </div>

              {[1, 2, 3, 4, 5].map((row) => (
                <div key={row} className="border-b p-4">
                  <div className="grid grid-cols-7 gap-4">
                    {[1, 2, 3, 4, 5, 6, 7].map((col) => (
                      <div key={col} className="h-6 bg-muted rounded animate-pulse"></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
