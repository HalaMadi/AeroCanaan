"use client";

import { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Edit,
    Filter,
    Lock,
    MoreHorizontal,
    Search,
    UserPlus,
    Mail,
    Phone,
    Ticket
} from "lucide-react";
import axios from "axios";

type Role = "ADMIN" | "USER" | "MANAGER";

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    role: Role;
    bookings: {
        id: string;
    }[];
}

export default function UsersPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const itemsPerPage = 10;
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get("/api/users");

                if (
                    response.data?.success &&
                    Array.isArray(response.data.data)
                ) {
                    setUsers(response.data.data);
                } else {
                    throw new Error("Invalid data format received from API");
                }
            } catch (error) {
                console.error("Error fetching users:", error);
                setError("Failed to load users. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const filteredUsers = users.filter((user) => {
        const searchLower = searchTerm.toLowerCase();
        return (
            `${user.firstName} ${user.lastName}`
                .toLowerCase()
                .includes(searchLower) ||
            user.email.toLowerCase().includes(searchLower) ||
            user.mobile.toLowerCase().includes(searchLower) ||
            user.role.toLowerCase().includes(searchLower)
        );
    });

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const getRoleBadge = (role: Role) => {
        switch (role) {
            case "ADMIN":
                return <Badge variant="destructive">Admin</Badge>;
            case "MANAGER":
                return <Badge variant="secondary">Manager</Badge>;
            default:
                return <Badge variant="outline">User</Badge>;
        }
    };

    return (
        <div className="p-6">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">
                        Users Management
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Manage all registered users in the system
                    </p>
                </div>
                <Button className="gap-2">
                    <UserPlus className="h-4 w-4" /> Add User
                </Button>
            </div>
            <Card>
                <CardHeader className="pb-3">
                    <CardTitle>All Users</CardTitle>
                    <CardDescription>
                        {loading
                            ? "Loading users..."
                            : `Showing ${Math.min(currentPage * itemsPerPage, filteredUsers.length)} of ${filteredUsers.length} users`}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mb-6 flex flex-col gap-4 md:flex-row">
                        <div className="relative flex-1">
                            <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <Input
                                type="search"
                                placeholder="Search users by name, email, phone or role..."
                                className="bg-white pl-8 dark:bg-gray-950"
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                            />
                        </div>
                        <Button variant="outline" className="w-full md:w-auto">
                            <Filter className="mr-2 h-4 w-4" />
                            Filters
                        </Button>
                    </div>
                    {error && (
                        <div className="mb-4 rounded-md bg-red-100 p-4 text-red-700">
                            {error}
                        </div>
                    )}
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>User</TableHead>
                                    <TableHead>Contact</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Bookings</TableHead>
                                    <TableHead className="text-right">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {loading ? (
                                    Array.from({ length: 5 }).map((_, i) => (
                                        <TableRow key={`skeleton-${i}`}>
                                            <TableCell>
                                                <div className="h-4 w-[150px] animate-pulse rounded bg-gray-200" />
                                            </TableCell>
                                            <TableCell>
                                                <div className="h-4 w-[120px] animate-pulse rounded bg-gray-200" />
                                            </TableCell>
                                            <TableCell>
                                                <div className="h-4 w-[80px] animate-pulse rounded bg-gray-200" />
                                            </TableCell>
                                            <TableCell>
                                                <div className="h-4 w-[50px] animate-pulse rounded bg-gray-200" />
                                            </TableCell>
                                            <TableCell>
                                                <div className="h-4 w-[50px] animate-pulse rounded bg-gray-200" />
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : filteredUsers.length === 0 ? (
                                    <TableRow>
                                        <TableCell
                                            colSpan={5}
                                            className="py-8 text-center"
                                        >
                                            {searchTerm
                                                ? "No users match your search"
                                                : "No users found"}
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    paginatedUsers.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-9 w-9">
                                                        <AvatarFallback>
                                                            {user.firstName.charAt(
                                                                0
                                                            )}
                                                            {user.lastName.charAt(
                                                                0
                                                            )}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <div className="font-medium">
                                                            {user.firstName}{" "}
                                                            {user.lastName}
                                                        </div>
                                                        <div className="text-xs text-gray-500">
                                                            ID: {user.id}
                                                        </div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center">
                                                        <Mail className="mr-1 h-3.5 w-3.5 text-gray-500" />
                                                        <span className="text-sm">
                                                            {user.email}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Phone className="mr-1 h-3.5 w-3.5 text-gray-500" />
                                                        <span className="text-sm">
                                                            {user.mobile}
                                                        </span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                {getRoleBadge(user.role)}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center">
                                                    <Ticket className="mr-1 h-3.5 w-3.5 text-gray-500" />
                                                    <span>
                                                        {user.bookings.length}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger
                                                        asChild
                                                    >
                                                        <Button
                                                            variant="ghost"
                                                            className="h-8 w-8 p-0"
                                                        >
                                                            <MoreHorizontal className="h-4 w-4" />
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end">
                                                        <DropdownMenuLabel>
                                                            Actions
                                                        </DropdownMenuLabel>
                                                        <DropdownMenuItem>
                                                            <Edit className="mr-2 h-4 w-4" />{" "}
                                                            Edit
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <Lock className="mr-2 h-4 w-4" />{" "}
                                                            Reset Password
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem className="text-red-600 dark:text-red-400">
                                                            Delete User
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    {totalPages > 1 && (
                        <div className="mt-6 flex items-center justify-between">
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Showing {(currentPage - 1) * itemsPerPage + 1}{" "}
                                to{" "}
                                {Math.min(
                                    currentPage * itemsPerPage,
                                    filteredUsers.length
                                )}{" "}
                                of {filteredUsers.length} users
                            </div>
                            <div className="flex items-center space-x-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setCurrentPage(1)}
                                    disabled={currentPage === 1}
                                >
                                    <ChevronsLeft className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() =>
                                        setCurrentPage(currentPage - 1)
                                    }
                                    disabled={currentPage === 1}
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <span className="text-sm">
                                    Page {currentPage} of {totalPages}
                                </span>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() =>
                                        setCurrentPage(currentPage + 1)
                                    }
                                    disabled={currentPage === totalPages}
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setCurrentPage(totalPages)}
                                    disabled={currentPage === totalPages}
                                >
                                    <ChevronsRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
