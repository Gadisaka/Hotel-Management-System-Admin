import React from "react";
import { PeopleAlt, AttachMoney, AddCard, Article } from "@mui/icons-material";
import Card from "./overviewCard";

const Overview: React.FC = () => {
  const mockData = [
    { title: "Customers", value: 20 },
    { title: "Rooms", value: 50, total: 300 },
    { title: "Monthly Income", value: 100 },
    { title: "Bookings", value: 75 },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-4 gap-4">
      {mockData.map((data, index) => {
        let icon;
        switch (data.title) {
          case "Customers":
            icon = <PeopleAlt />;
            break;
          case "Rooms":
            icon = <Article />;
            break;
          case "Monthly Income":
            icon = <AttachMoney />;
            break;
          case "Bookings":
            icon = <AddCard />;
            break;
          default:
            icon = <AttachMoney />;
        }
        return (
          <Card
            key={index}
            title={data.title}
            value={
              data.title === "Monthly Income"
                ? `${data.value} Birr`
                : data.value
            }
            icon={icon}
            total={data.total || null}
          />
        );
      })}
    </div>
  );
};
export default Overview;
