"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ChartProps {
  data: Array<Record<string, string | number>>;
  categories: string[];
  index: string;
  colors?: string[];
  className?: string;
  yAxisWidth?: number;
  showLegend?: boolean;
  showGrid?: boolean;
  showTooltip?: boolean;
  type?: "line" | "bar" | "area";
}

export function Chart({
  data,
  categories,
  index,
  colors = ["#2563eb", "#7c3aed", "#db2777"],
  className,
  yAxisWidth = 56,
  showLegend = true,
  showGrid = true,
  showTooltip = true,
  type = "line",
}: ChartProps) {
  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <LineChart data={data} className="w-full">
            {showGrid && (
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={true}
                vertical={false}
                className="stroke-muted"
              />
            )}
            <XAxis
              dataKey={index}
              tick={{ transform: "translate(0, 6)" }}
              className="text-sm text-muted-foreground"
            />
            <YAxis
              width={yAxisWidth}
              tick={{ transform: "translate(-3, 0)" }}
              className="text-sm text-muted-foreground"
            />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            {categories.map((category, i) => (
              <Line
                key={category}
                type="monotone"
                dataKey={category}
                stroke={colors[i % colors.length]}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        );
      case "bar":
        return (
          <BarChart data={data} className="w-full">
            {showGrid && (
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={true}
                vertical={false}
                className="stroke-muted"
              />
            )}
            <XAxis
              dataKey={index}
              tick={{ transform: "translate(0, 6)" }}
              className="text-sm text-muted-foreground"
            />
            <YAxis
              width={yAxisWidth}
              tick={{ transform: "translate(-3, 0)" }}
              className="text-sm text-muted-foreground"
            />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            {categories.map((category, i) => (
              <Bar
                key={category}
                dataKey={category}
                fill={colors[i % colors.length]}
              />
            ))}
          </BarChart>
        );
      case "area":
        return (
          <AreaChart data={data} className="w-full">
            {showGrid && (
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={true}
                vertical={false}
                className="stroke-muted"
              />
            )}
            <XAxis
              dataKey={index}
              tick={{ transform: "translate(0, 6)" }}
              className="text-sm text-muted-foreground"
            />
            <YAxis
              width={yAxisWidth}
              tick={{ transform: "translate(-3, 0)" }}
              className="text-sm text-muted-foreground"
            />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            {categories.map((category, i) => (
              <Area
                key={category}
                type="monotone"
                dataKey={category}
                stroke={colors[i % colors.length]}
                fill={colors[i % colors.length]}
                strokeWidth={2}
              />
            ))}
          </AreaChart>
        );
    }
  };

  return (
    <div className={className}>
      <ResponsiveContainer width="100%" height={350}>
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
}
