import { Box, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";

const Piechart = () => {
  const data = [
    { label: "Single Bed", value: 25 },
    { label: "Double Bed", value: 70 },
    { label: "Triple Bed", value: 20 },
    { label: "VIP", value: 20 },
  ];

  const customPalette = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"];
  // const customPalette = ["#B2DFDB", "#BBDEFB", "#D1C4E9", "#FFCCBC"];

  const valueFormatter = (item: { value: number }) => `${item.value}%`;

  return (
    <Box className=" lg:max-w-[48%]  w-full lg:items-start bg-white items-center  p-6">
      <Typography
        variant="h3"
        color="initial"
        sx={{ fontSize: "20px", fontWeight: "bold" }}
      >
        Occupied
      </Typography>
      <PieChart
        height={300}
        series={[
          {
            data: data,
            innerRadius: 80,
            arcLabel: () => "",
            arcLabelMinAngle: 20,
            valueFormatter,
          },
        ]}
        colors={customPalette}
      />
    </Box>
  );
};

export default Piechart;
