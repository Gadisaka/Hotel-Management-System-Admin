import React from "react";
import getEthiopianDate from "../utils/ethiopianDate.js";

const Top: React.FC = () => {
  const getFormattedDate = (): string => {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return today.toLocaleDateString("en-US", options);
  };

  const today = getFormattedDate();
  const todayEC = getEthiopianDate();

  return (
    <div className="w-full text-center  p-3">
      {today} / {todayEC}
    </div>
  );
};

export default Top;
