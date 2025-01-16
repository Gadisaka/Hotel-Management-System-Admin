import CustomersTable from "@/components/customers/customerTable";
import FilterAndSearch from "@/components/customers/FilterAndSearch";
import { Box } from "@mui/material";
import React from "react";
import { customers } from "@/components/customers/customersData";

const Customers: React.FC = () => {
  const [filteredData, setFilteredData] = React.useState(customers);

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      {/* Filter and Search */}
      <FilterAndSearch onFilterChange={(data) => setFilteredData(data)} />

      {/* Customers Table */}
      <CustomersTable data={filteredData} />
    </Box>
  );
};

export default Customers;
