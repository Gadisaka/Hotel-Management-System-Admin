import React from "react";

type OverviewProps = {
  checkInToday: number;
  checkOutToday: number;
  totalInHotel: number;
  availableRooms: number;
  occupiedRooms: number;
};

const Overview: React.FC<OverviewProps> = ({
  checkInToday,
  checkOutToday,
  totalInHotel,
  availableRooms,
  occupiedRooms,
}) => {
  return (
    <div className="flex flex-col justify-between shadow-md  p-3 rounded-md">
      <div className="p-2 text- ">
        <h1 className="text-2xl font-semibold text-gray-700">Overview</h1>
      </div>
      <div className="flex  justify-between px-5 ">
        <div className="flex rounded-lg  shadow-inner p-8 gap-x-4  ">
          <div className="flex flex-col  ">
            <h1 className="text-md text-gray-500">Today's</h1>
            <p className="text-xl">Check-In</p>
          </div>
          <p className="text-blue-500 text-3xl self-end font-bold">
            {checkInToday}
          </p>
        </div>
        <div className="flex rounded-lg shadow-inner p-8 gap-x-4  ">
          <div className="flex flex-col  ">
            <h1 className="text-md text-gray-500">Today's</h1>
            <p className="text-xl">Check-In</p>
          </div>
          <p className="text-blue-500 text-3xl self-end font-bold">
            {checkInToday}
          </p>
        </div>
        <div className="flex rounded-lg shadow-inner p-8 gap-x-4  ">
          <div className="flex flex-col  ">
            <h1 className="text-md text-gray-500">Today's</h1>
            <p className="text-xl">Check-In</p>
          </div>
          <p className="text-blue-500 text-3xl self-end font-bold">
            {checkInToday}
          </p>
        </div>
        <div className="flex rounded-lg shadow-inner p-8 gap-x-4  ">
          <div className="flex flex-col  ">
            <h1 className="text-md text-gray-500">Today's</h1>
            <p className="text-xl">Check-In</p>
          </div>
          <p className="text-blue-500 text-3xl self-end font-bold">
            {checkInToday}
          </p>
        </div>
        <div className="flex rounded-lg shadow-inner p-8 gap-x-4  ">
          <div className="flex flex-col  ">
            <h1 className="text-md text-gray-500">Today's</h1>
            <p className="text-xl">Check-In</p>
          </div>
          <p className="text-blue-500 text-3xl self-end font-bold">
            {checkInToday}
          </p>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="h-1/2">
        <h2 className="text-lg font-semibold">Overview</h2>
      </div>
      <div className="flex justify-between text-center">
        <div>
          <p className="text-sm text-gray-500">Today's</p>
          <p className="font-medium">Check-in</p>
          <p className="text-blue-500 text-xl font-bold">{checkInToday}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Today's</p>
          <p className="font-medium">Check-out</p>
          <p className="text-blue-500 text-xl font-bold">{checkOutToday}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total</p>
          <p className="font-medium">In hotel</p>
          <p className="text-blue-500 text-xl font-bold">{totalInHotel}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total</p>
          <p className="font-medium">Available room</p>
          <p className="text-blue-500 text-xl font-bold">{availableRooms}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Total</p>
          <p className="font-medium">Occupied room</p>
          <p className="text-blue-500 text-xl font-bold">{occupiedRooms}</p>
        </div>
      </div> */
}

export default Overview;
