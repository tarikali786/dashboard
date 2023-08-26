import { TableComponent } from "./TableComponent";
import { employeesData } from "../data/dummy";
import { Header } from "../components";

export const Employees = () => {
  const Columns = [
    {
      name: "Employees",
      selector: (row) => (
        <img
          width={70}
          height={60}
          className="rounded-lg my-2"
          src={row.EmployeeImage}
        />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.Name,
      sortable: true,
    },

    {
      name: "Designation",
      selector: (row) => row.Title,
      sortable: true,
    },

    {
      name: "Country ",
      selector: (row) => row.Country,
      sortable: true,
    },

    {
      name: "HireDate",
      sortable: true,
      selector: (row) => row.HireDate,
    },

    {
      name: "Reports To",
      selector: (row) => row.ReportsTo,
      sortable: true,
    },
  ];
  return (
    <div className="m-2 md:m-10 mt-6 p-2 md:p-4   bg-white rounded-3xl">
      <Header category="Page" title="Empolyee" />
      <TableComponent columns={Columns} data={employeesData} />
    </div>
  );
};
