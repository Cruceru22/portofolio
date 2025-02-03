"use client";

import { motion } from "framer-motion";
import { FaCar } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartDataItem = {
  metric: string;
  m4: number;
  myCar: number;
  unit: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Connoisseur() {
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
    return value.toString();
  };

  const formatTooltip = (
    value: number,
    name: string,
    props: { payload?: ChartDataItem },
  ): [string, string] => {
    if (props.payload) {
      const { unit } = props.payload;
      return [`${value} ${unit}`, name];
    }
    return [value.toString(), name];
  };

  return (
    <motion.div
      className="relative overflow-hidden py-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-12">
          <div className="mx-auto max-w-2xl space-y-6">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-blue-800"
            >
              <FaCar className="mr-2" />
              <span className="text-sm font-medium">Car Enthusiast</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold tracking-tight text-gray-900"
            >
              Car Connoisseur
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-gray-600">
              The BMW M4 is a high-performance model, known for its impressive
              power and acceleration. I have a BMW 435d, which balances
              performance with efficiency, offering strong torque for a diesel
              engine.
            </motion.p>

            <motion.div variants={itemVariants} className="relative w-full">
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <XAxis dataKey="metric" />
                    <YAxis domain={[0, 800]} tickFormatter={formatYAxis} />
                    <Tooltip formatter={formatTooltip} />
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
              <div className="mt-2 text-center text-sm text-gray-500">
                <div className="flex justify-center gap-4">
                  <span className="flex items-center">
                    <span
                      className="mr-1 inline-block h-3 w-3"
                      style={{ backgroundColor: chartConfig.m4.color }}
                    ></span>
                    BMW M4
                  </span>
                  <span className="flex items-center">
                    <span
                      className="mr-1 inline-block h-3 w-3"
                      style={{ backgroundColor: chartConfig.myCar.color }}
                    ></span>
                    My BMW 435d
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
