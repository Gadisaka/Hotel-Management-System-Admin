import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import { bookings, BookingData } from "./bookingsData";

interface ColumnData {
  dataKey: keyof BookingData;
  label: string;
  numeric?: boolean;
  width?: number;
}

const columns: ColumnData[] = [
  {
    width: 50,
    label: "ID",
    dataKey: "id",
    numeric: true,
  },
  {
    width: 150,
    label: "Customer Name",
    dataKey: "customerName",
  },
  {
    width: 100,
    label: "Room Number",
    dataKey: "roomNumber",
  },
  {
    width: 110,
    label: "Start Date",
    dataKey: "startDate",
  },
  {
    width: 110,
    label: "End Date",
    dataKey: "endDate",
  },
  {
    width: 100,
    label: "Payment",
    dataKey: "payment",
  },
  {
    width: 100,
    label: "Status",
    dataKey: "status",
  },
];

const VirtuosoTableComponents: TableComponents<BookingData> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{ backgroundColor: "background.paper" }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: BookingData) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function BookingTable() {
  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <TableVirtuoso
        data={bookings}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
