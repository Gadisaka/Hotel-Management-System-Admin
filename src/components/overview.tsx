import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

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
    <Box
      className="flex flex-col justify-between shadow-inner  p-3 rounded-md"
      sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}
    >
      <div className="p-2 text- ">
        <h1 className="text-2xl font-semibold text-gray-700">Overview</h1>
      </div>
      <div className="flex  justify-between px-5 ">
        <div className="flex rounded-lg bg-[rgb(94,53,177)] shadow-md p-8 gap-x-4  ">
          <div className="flex flex-col  ">
            <h1 className="text-md text-gray-500">Today's</h1>
            <p className="text-xl">Check-In</p>
          </div>
          <p className="text-blue-500 text-3xl self-end font-bold">
            {checkInToday}
          </p>
        </div>
        <div className="flex rounded-lg shadow-md p-8 gap-x-4  ">
          <div className="flex flex-col  ">
            <h1 className="text-md text-gray-500">Today's</h1>
            <p className="text-xl">Check-In</p>
          </div>
          <p className="text-blue-500 text-3xl self-end font-bold">
            {checkInToday}
          </p>
        </div>
        <div className="flex rounded-lg shadow-md p-8 gap-x-4  ">
          <div className="flex flex-col  ">
            <h1 className="text-md text-gray-500">Today's</h1>
            <p className="text-xl">Check-In</p>
          </div>
          <p className="text-blue-500 text-3xl self-end font-bold">
            {checkInToday}
          </p>
        </div>
        <div className="flex rounded-lg shadow-md p-8 gap-x-4  ">
          <div className="flex flex-col  ">
            <h1 className="text-md text-gray-500">Today's</h1>
            <p className="text-xl">Check-In</p>
          </div>
          <p className="text-blue-500 text-3xl self-end font-bold">
            {checkInToday}
          </p>
        </div>
        <div className="flex rounded-lg shadow-md p-8 gap-x-4  ">
          <div className="flex flex-col  ">
            <h1 className="text-md text-gray-500">Today's</h1>
            <p className="text-xl">Check-In</p>
          </div>
          <p className="text-blue-500 text-3xl self-end font-bold">
            {checkInToday}
          </p>
        </div>
      </div>
    </Box>
  );
};

export default Overview;

// const Overview: React.FC<OverviewProps> = ({
//   checkInToday,
//   checkOutToday,
//   totalInHotel,
//   availableRooms,
//   occupiedRooms,
// }) => {
//   return (
//     <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
//       <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", color: "gray.700" }}>
//         Overview
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6} md={2}>
//           <Paper sx={{ p: 3, textAlign: "center", bgcolor: "rgb(94,53,177)", color: "white" }}>
//             <Typography variant="body2">Today's</Typography>
//             <Typography variant="h6">Check-In</Typography>
//             <Typography variant="h4" fontWeight="bold" sx={{ color: "blue.500" }}>
//               {checkInToday}
//             </Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={2}>
//           <Paper sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
//             <Typography variant="body2">Today's</Typography>
//             <Typography variant="h6">Check-Out</Typography>
//             <Typography variant="h4" fontWeight="bold" sx={{ color: "blue.500" }}>
//               {checkOutToday}
//             </Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={2}>
//           <Paper sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
//             <Typography variant="body2">Total</Typography>
//             <Typography variant="h6">In Hotel</Typography>
//             <Typography variant="h4" fontWeight="bold" sx={{ color: "blue.500" }}>
//               {totalInHotel}
//             </Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={2}>
//           <Paper sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
//             <Typography variant="body2">Total</Typography>
//             <Typography variant="h6">Available Rooms</Typography>
//             <Typography variant="h4" fontWeight="bold" sx={{ color: "blue.500" }}>
//               {availableRooms}
//             </Typography>
//           </Paper>
//         </Grid>
//         <Grid item xs={12} sm={6} md={2}>
//           <Paper sx={{ p: 3, textAlign: "center", boxShadow: 3 }}>
//             <Typography variant="body2">Total</Typography>
//             <Typography variant="h6">Occupied Rooms</Typography>
//             <Typography variant="h4" fontWeight="bold" sx={{ color: "blue.500" }}>
//               {occupiedRooms}
//             </Typography>
//           </Paper>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Overview;
