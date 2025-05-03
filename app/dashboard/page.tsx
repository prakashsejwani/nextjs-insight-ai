// /app/dashboard/page.tsx
'use client';

import { useEffect, useState } from "react";
import Chart from "@/components/charts/VisitorsChart";
import AIInsights from "@/components/insight-ai/AIInsights";

// Define the shape of the chart data returned from /api/analytics
interface ChartPoint {
  timestamp: string;
  count: number;
}

export default function Dashboard() {
  const [data, setData] = useState<ChartPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/analytics")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load analytics");
        return res.json();
      })
      .then((json: ChartPoint[]) => setData(json))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">InsightAI Dashboard</h1>
      {loading ? (
        <p>Loading chart...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <Chart data={data} />
      )}
      <AIInsights />
    </div>
  );
}