"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    LayoutDashboard,
    Map,
    Users,
    CalendarRange,
    Settings,
    LogOut,
    Bell,
    User,
    ChevronDown,
    BarChart3,
    FileText
} from "lucide-react";
import { ThemeToggle } from "../theme-toggle";

export default function AdminSidebar() {
    const pathname = usePathname();
    const isActive = (path: string) => {
        return pathname === path || pathname?.startsWith(`${path}/`);
    };

    return (
        <Sidebar>
            <SidebarHeader className="border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center px-4 py-2">
                    <Link href="/admin" className="flex items-center gap-2">
                        <div className="text-xl font-bold">
                            Aero<span className="text-[#FA7436]">Canaan</span>
                        </div>
                    </Link>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={isActive("/admin")}
                        >
                            <Link href="/admin">
                                <LayoutDashboard className="h-5 w-5" />
                                <span>Dashboard</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={isActive("/admin/trips")}
                        >
                            <Link href="/admin/trips">
                                <Map className="h-5 w-5" />
                                <span>Trips</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={isActive("/admin/bookings")}
                        >
                            <Link href="/admin/bookings">
                                <CalendarRange className="h-5 w-5" />
                                <span>Bookings</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={isActive("/admin/users")}
                        >
                            <Link href="/admin/users">
                                <Users className="h-5 w-5" />
                                <span>Users</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={isActive("/admin/analytics")}
                        >
                            <Link href="/admin/analytics">
                                <BarChart3 className="h-5 w-5" />
                                <span>Analytics</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            isActive={isActive("/admin/reports")}
                        >
                            <Link href="/admin/reports">
                                <FileText className="h-5 w-5" />
                                <span>Reports</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="border-t border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="flex h-auto items-center gap-2 p-0 hover:bg-transparent"
                                >
                                    <div className="flex flex-col items-start text-sm">
                                        <span className="font-medium">
                                            Admin User
                                        </span>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            admin@aerocanaan.com
                                        </span>
                                    </div>
                                    <ChevronDown className="h-4 w-4 text-gray-500" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-56">
                                <DropdownMenuLabel>
                                    My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Bell className="mr-2 h-4 w-4" />
                                    <span>Notifications</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <ThemeToggle />
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
