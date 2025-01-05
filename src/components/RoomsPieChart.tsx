import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function RoomsPieChart() {
  return (
    <div className=" flex w-full  items-center">
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "single bed" },
              { id: 1, value: 15, label: "double bed" },
              { id: 2, value: 20, label: "triple bed" },
              { id: 3, value: 20, label: "VIP" },
            ],
          },
        ]}
        width={300}
        height={150}
      />
    </div>
  );
}
