import EmployeeTable from "@/components/employees/employeeTable";
import React from "react";
import { employees } from "../components/employees/employeeData";
import Search from "@/components/employees/searchEmployee";

const Employees: React.FC = () => {
  const [filteredData, setFilteredData] = React.useState(employees);

  return (
    <div>
      <Search
        onFilterChange={(data) => {
          setFilteredData(data);
        }}
      />
      <EmployeeTable data={filteredData} />
    </div>
  );
};

export default Employees;
