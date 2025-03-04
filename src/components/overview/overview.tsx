import React from "react";
import { PeopleAlt, AttachMoney, AddCard, Article } from "@mui/icons-material";
import Card from "./overviewCard";

const Overview: React.FC = () => {
  const mockData = [
    { title: "Active Customers", value: 3 },
    { title: "Occupied Rooms", value: 3, total: 90 },
    { title: "Today's Income", value: 700 },
    { title: "Today's Bookings", value: 1 },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-4 gap-4">
      {mockData.map((data, index) => {
        let icon;
        switch (data.title) {
          case "Active Customers":
            icon = <PeopleAlt />;
            break;
          case "Occupied Rooms":
            icon = <Article />;
            break;
          case "Today's Income":
            icon = <AttachMoney />;
            break;
          case "Today's Bookings":
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
              data.title === "Today's Income"
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
