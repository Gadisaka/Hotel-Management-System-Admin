import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import Typography from "@mui/material/Typography";

const Chart: React.FC = () => {
  const dataset = [
    {
      single: 590,
      double: 570,
      triple: 868,
      vip: 221,
      month: "Jan",
    },
    {
      single: 500,
      double: 520,
      triple: 788,
      vip: 228,
      month: "Feb",
    },
    {
      single: 470,
      double: 530,
      triple: 1086,
      vip: 241,
      month: "Mar",
    },
    {
      single: 540,
      double: 560,
      triple: 928,
      vip: 273,
      month: "Apr",
    },
    {
      single: 570,
      double: 690,
      triple: 928,
      vip: 299,
      month: "May",
    },
    {
      single: 600,
      double: 630,
      triple: 1083,
      vip: 1244,
      month: "June",
    },
    {
      single: 590,
      double: 600,
      triple: 1085,
      vip: 3219,
      month: "July",
    },
    {
      single: 650,
      double: 600,
      triple: 1086,
      vip: 2249,
      month: "Aug",
    },
    {
      single: 510,
      double: 510,
      triple: 958,
      vip: 1231,
      month: "Sept",
    },
    {
      single: 600,
      double: 650,
      triple: 978,
      vip: 255,
      month: "Oct",
    },
    {
      single: 670,
      double: 640,
      triple: 768,
      vip: 248,
      month: "Nov",
    },
    {
      single: 610,
      double: 700,
      triple: 1083,
      vip: 225,
      month: "Dec",
    },
  ];

  function valueFormatter(value: number | null) {
    return `${value}birr`;
  }

  const customPalette = ["#4CAF50", "#2196F3", "#FFC107", "#9C27B0"];

  const chartSetting = {
    yAxis: [
      {
        label: "Income (birr)",
      },
    ],
    width: 500,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "translate(-15px, 0)",
      },
    },
  };

  return (
    <div className=" w-full lg:max-w-[48%] p-6 flex flex-col lg:items-start bg-white items-center justify-center ">
      {" "}
      <Typography
        variant="h3"
        sx={{ fontSize: "20px", fontWeight: "bold" }}
        color="initial"
      >
        Income
      </Typography>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
          { dataKey: "single", label: "Single", valueFormatter },
          { dataKey: "double", label: "Double", valueFormatter },
          { dataKey: "triple", label: "Triple", valueFormatter },
          { dataKey: "vip", label: "Vip", valueFormatter },
        ]}
        colors={customPalette}
        {...chartSetting}
      />
    </div>
  );
};

export default Chart;
