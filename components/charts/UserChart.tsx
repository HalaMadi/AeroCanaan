import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface User {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
}

const UserChart = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data.data || []);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading) return <div>Loading...</div>;
  const rolesCount = users.reduce((acc, user) => {
    acc[user.role] = (acc[user.role] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  const chartOptions = {
    chart: {
      type: 'pie' as const,
    },
    labels: Object.keys(rolesCount),
    series: Object.values(rolesCount),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
    title: {
      text: 'User Roles Distribution',
      align: 'center' as const,
    },
  };
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="pie"
        width="100%"
        height={350}
      />
    </div>
  );
};

export default UserChart;