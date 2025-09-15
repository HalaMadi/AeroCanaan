"use client"

import { Bar, Line, Doughnut } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend)

export function LineChart() {
  const { theme } = useTheme()
  const [chartData, setChartData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Revenue",
        data: [4500, 5200, 4800, 5800, 7200, 8500, 9200, 8700, 9800, 10500, 11200, 12500],
        borderColor: "#FA7436",
        backgroundColor: "rgba(250, 116, 54, 0.1)",
        tension: 0.4,
        fill: true,
      },
      {
        label: "Expenses",
        data: [3200, 3800, 3500, 4200, 5100, 5800, 6300, 6100, 6800, 7200, 7800, 8500],
        borderColor: "#6366F1",
        backgroundColor: "rgba(99, 102, 241, 0.1)",
        tension: 0.4,
        fill: true,
      },
    ],
  })

  const [chartOptions, setChartOptions] = useState<ChartOptions<"line">>({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: theme === "dark" ? "#e5e7eb" : "#374151",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: theme === "dark" ? "#e5e7eb" : "#374151",
        },
      },
      x: {
        grid: {
          color: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: theme === "dark" ? "#e5e7eb" : "#374151",
        },
      },
    },
  })

  useEffect(() => {
    setChartOptions((prev) => ({
      ...prev,
      plugins: {
        ...prev.plugins,
        legend: {
          ...prev.plugins?.legend,
          labels: {
            color: theme === "dark" ? "#e5e7eb" : "#374151",
          },
        },
      },
      scales: {
        ...prev.scales,
        y: {
          ...prev.scales?.y,
          grid: {
            color: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          },
          ticks: {
            color: theme === "dark" ? "#e5e7eb" : "#374151",
          },
        },
        x: {
          ...prev.scales?.x,
          grid: {
            color: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          },
          ticks: {
            color: theme === "dark" ? "#e5e7eb" : "#374151",
          },
        },
      },
    }))
  }, [theme])

  return <Line data={chartData} options={chartOptions} />
}

export function BarChart() {
  const { theme } = useTheme()
  const [chartData, setChartData] = useState({
    labels: ["Jerusalem", "Dead Sea", "Bethlehem", "Hebron", "Nablus", "Jericho"],
    datasets: [
      {
        label: "Bookings",
        data: [65, 59, 80, 45, 56, 40],
        backgroundColor: [
          "rgba(250, 116, 54, 0.8)",
          "rgba(99, 102, 241, 0.8)",
          "rgba(16, 185, 129, 0.8)",
          "rgba(245, 158, 11, 0.8)",
          "rgba(139, 92, 246, 0.8)",
          "rgba(236, 72, 153, 0.8)",
        ],
      },
    ],
  })

  const [chartOptions, setChartOptions] = useState<ChartOptions<"bar">>({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: theme === "dark" ? "#e5e7eb" : "#374151",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: theme === "dark" ? "#e5e7eb" : "#374151",
        },
      },
      x: {
        grid: {
          color: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          color: theme === "dark" ? "#e5e7eb" : "#374151",
        },
      },
    },
  })

  useEffect(() => {
    setChartOptions((prev) => ({
      ...prev,
      plugins: {
        ...prev.plugins,
        legend: {
          ...prev.plugins?.legend,
          labels: {
            color: theme === "dark" ? "#e5e7eb" : "#374151",
          },
        },
      },
      scales: {
        ...prev.scales,
        y: {
          ...prev.scales?.y,
          grid: {
            color: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          },
          ticks: {
            color: theme === "dark" ? "#e5e7eb" : "#374151",
          },
        },
        x: {
          ...prev.scales?.x,
          grid: {
            color: theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
          },
          ticks: {
            color: theme === "dark" ? "#e5e7eb" : "#374151",
          },
        },
      },
    }))
  }, [theme])

  return <Bar data={chartData} options={chartOptions} />
}

export function DonutChart() {
  const { theme } = useTheme()
  const [chartData, setChartData] = useState({
    labels: ["New Users", "Returning Users", "Inactive Users"],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ["#FA7436", "#6366F1", "#94A3B8"],
        borderColor: theme === "dark" ? "#1F2937" : "#FFFFFF",
        borderWidth: 2,
      },
    ],
  })

  const [chartOptions, setChartOptions] = useState<ChartOptions<"doughnut">>({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: theme === "dark" ? "#e5e7eb" : "#374151",
          padding: 20,
        },
      },
    },
    cutout: "70%",
  })

  useEffect(() => {
    setChartData((prev) => ({
      ...prev,
      datasets: [
        {
          ...prev.datasets[0],
          borderColor: theme === "dark" ? "#1F2937" : "#FFFFFF",
        },
      ],
    }))

    setChartOptions((prev) => ({
      ...prev,
      plugins: {
        ...prev.plugins,
        legend: {
          ...prev.plugins?.legend,
          labels: {
            ...prev.plugins?.legend?.labels,
            color: theme === "dark" ? "#e5e7eb" : "#374151",
          },
        },
      },
    }))
  }, [theme])

  return <Doughnut data={chartData} options={chartOptions} />
}
