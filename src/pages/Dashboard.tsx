import Charts from "@/components/charts/Charts";
import Overview from "@/components/overview/overview";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 justify-around h-full w-full">
      <Overview />
      <Charts />
    </div>
  );
};
export default Dashboard;
