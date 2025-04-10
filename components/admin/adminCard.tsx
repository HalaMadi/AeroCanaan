import React from "react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { TrendingUp } from "lucide-react";

interface AdminCardProps {
    title: string;
    data: number;
    icon: React.ReactNode;
}

const AdminCard = ({ title, data, icon }: AdminCardProps) => {
    return (
        <Card className="w-80 max-w-sm shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg">
            <CardContent className="px-6 py-2">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {title}
                        </p>
                        <h3 className="mt-1 text-2xl font-bold">{data}</h3>
                        <div className="mt-1 flex items-center text-sm">
                            <Badge
                                variant="outline"
                                className="border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/20 dark:text-green-400"
                            >
                                <TrendingUp className="mr-1 h-3 w-3" />
                                8.2%
                            </Badge>
                            <span className="ml-2 text-gray-500 dark:text-gray-400">
                                vs last month
                            </span>
                        </div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 dark:bg-green-900/20">
                        {icon}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default AdminCard;
