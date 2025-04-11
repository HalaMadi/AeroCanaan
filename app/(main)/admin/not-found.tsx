import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileQuestion } from "lucide-react"
import Link from "next/link"

export default function AdminNotFound() {
  return (
    <div className="p-6 flex items-center justify-center min-h-[80vh]">
      <Card className="max-w-md w-full">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <FileQuestion className="h-5 w-5" />
            <CardTitle>Page Not Found</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            The admin page you are looking for doesn't exist or you don't have permission to access it.
          </p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Link href="/admin">
            <Button className="bg-[#FA7436] hover:bg-[#e56a30] text-white">Go to Dashboard</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Return to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
