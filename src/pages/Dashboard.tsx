import Overview from "@/components/overview";
import Rooms from "@/components/Rooms";
import RoomsPieChart from "@/components/RoomsPieChart";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className=" h-full w-full">
      <Overview
        checkInToday={23}
        checkOutToday={13}
        totalInHotel={60}
        availableRooms={10}
        occupiedRooms={90}
      />
      <div className="flex justify-  ">
        <Rooms single={2003} double={34} triple={54} vip={34} />
        <RoomsPieChart />
      </div>
    </div>
  );
};

export default Dashboard;
