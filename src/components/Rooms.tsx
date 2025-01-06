import React from "react";

type RoomProps = {
  single: number;
  double: number;
  triple: number;
  vip: number;
};

const Rooms: React.FC<RoomProps> = ({ single, double, triple, vip }) => {
  return (
    <div className="flex flex-col justify-between shadow-inner border max-w-fit my-5 p-3 rounded-md">
      <div className="p-2 text- ">
        <h1 className="text-2xl font-semibold text-gray-700">Rooms</h1>
      </div>
      <div className="flex gap-x-5 justify-between px-5 ">
        <div className="flex rounded-lg   shadow-md border-gray-300 p-4 pr-6 ">
          <div className="flex flex-col  ">
            <h1 className="text-md text-gray-500">single bed</h1>
            <p className="text-3xl">
              2 <span className="text-xl text-gray-500">/30</span>
            </p>
            <p className="text-blue-500 text-3xl self-end font-bold">
              ${single}
              <span className=" text-xl font-normal text-gray-500">/day</span>
            </p>
          </div>
        </div>
        <div className="flex rounded-lg shadow-md  border-gray-300 p-4 pr-6 ">
          <div className="flex flex-col  ">
            <h1 className="text-md text-gray-500">single bed</h1>
            <p className="text-3xl">
              2 <span className="text-xl text-gray-500">/30</span>
            </p>
            <p className="text-blue-500 text-3xl self-end font-bold">
              ${single}
              <span className=" text-xl font-normal text-gray-500">/day</span>
            </p>
          </div>
        </div>
        <div className="flex rounded-lg shadow-md   border-gray-300 p-4 pr-6 ">
          <div className="flex flex-col  ">
            <h1 className="text-md text-gray-500">single bed</h1>
            <p className="text-3xl">
              2 <span className="text-xl text-gray-500">/30</span>
            </p>
            <p className="text-blue-500 text-3xl self-end font-bold">
              ${single}
              <span className=" text-xl font-normal text-gray-500">/day</span>
            </p>
          </div>
        </div>
        <div className="flex rounded-lg shadow-md   border-gray-300 p-4 pr-6 ">
          <div className="flex flex-col  ">
            <h1 className="text-md text-gray-500">single bed</h1>
            <p className="text-3xl">
              2 <span className="text-xl text-gray-500">/30</span>
            </p>
            <p className="text-blue-500 text-3xl self-end font-bold">
              ${single}
              <span className=" text-xl font-normal text-gray-500">/day</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
