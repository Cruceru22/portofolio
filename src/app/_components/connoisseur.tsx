import React from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type ChartDataItem = {
  metric: string;
  m4: number;
  myCar: number;
  unit: string;
};

export default function Connoisseur() {
  useLayoutEffect(() => {
    gsap.set("#car", { opacity: 0 });
  }, []);

  useGSAP(() => {
    gsap.to("#car", {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  const chartData: ChartDataItem[] = [
    { metric: "Horsepower", m4: 425, myCar: 313, unit: "hp" },
    { metric: "Torque", m4: 550, myCar: 630, unit: "Nm" },
  ];

  const chartConfig = {
    m4: {
      label: "BMW M4",
      color: "#2563eb",
    },
    myCar: {
      label: "My BMW 435d",
      color: "#60a5fa",
    },
  };

  const formatYAxis = (value: number): string => {
    const metric = chartData.find(
      (item) => item.m4 === value || item.myCar === value,
    );
    return metric
      ? `${value}${metric.unit === "1/s" ? "" : ` ${metric.unit}`}`
      : value.toString();
  };

  const formatTooltip = (
    value: number,
    name: string,
    props: { payload?: ChartDataItem },
  ): [string, string] => {
    if (props.payload) {
      const { unit } = props.payload;
      if (unit === "1/s") {
        return [`${(10 / value).toFixed(1)} s`, name];
      }
      return [`${value} ${unit}`, name];
    }
    return [value.toString(), name];
  };

  return (
    <div id="car" className="mx-auto flex w-full max-w-3xl flex-col pt-12">
      <p className="mb-4 pl-2 text-lg font-semibold">Car Connoisseur</p>
      <div className="mt-4 flex flex-col items-start">
        <div className="mb-4 pl-4">
          <p className="mb-2 text-lg">
            The BMW M4 is a high-performance model, known for its impressive
            power and acceleration.
          </p>
          <p className="mb-2 text-lg">
            I have a BMW 435d, which balances performance with efficiency,
            offering strong torque for a diesel engine.
          </p>
          <p className="text-lg">Lets compare their key performance metrics:</p>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="metric" />
              <YAxis tickFormatter={formatYAxis} />
              <Tooltip formatter={formatTooltip} />
              <Legend />
              <Bar
                dataKey="m4"
                fill={chartConfig.m4.color}
                name={chartConfig.m4.label}
              />
              <Bar
                dataKey="myCar"
                fill={chartConfig.myCar.color}
                name={chartConfig.myCar.label}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
