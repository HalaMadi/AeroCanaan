import type React from "react"
import type { Metadata } from "next"
import { SidebarProvider } from "@/components/ui/sidebar"
import AdminSidebar from "@/components/admin/admin-sidebar"

export const metadata: Metadata = {
  title: "AeroCanaan Admin Dashboard",
  description: "Admin dashboard for managing AeroCanaan travel platform",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen">
        <AdminSidebar />
        <main className="flex-1 overflow-x-hidden bg-gray-50 dark:bg-gray-900">{children}</main>
      </div>
    </SidebarProvider>
  )
}
