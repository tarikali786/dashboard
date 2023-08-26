import { TableComponent } from "./TableComponent";
import { customersData } from "../data/dummy";
import { Header } from "../components";

export const Customers = () => {
  const Columns = [
    {
      name: "Customers",
      selector: (row) => (
        <img
          width={70}
          height={60}
          className="rounded-lg my-2"
          src={row.CustomerImage}
        />
      ),
    },
    {
      name: "Name",
      selector: (row) => row.CustomerName,
      sortable: true,
    },
    {
      name: "CustomerEmail",
      selector: (row) => row.CustomerEmail,
      sortable: true,
    },
    {
      name: "Project Name",
      selector: (row) => row.ProjectName,
      sortable: true,
    },

    {
      name: "Status",
      sortable: true,

      selector: (row) => row.Status,
      cell: (row) => {
        let bgColorClass = "";
        switch (row.Status) {
          case "Active":
            bgColorClass = "bg-green-500";
            break;
          case "Pending":
            bgColorClass = "bg-yellow-400";
            break;
          case "Completed":
            bgColorClass = "bg-pink-400";
            break;

          case "Cancel":
            bgColorClass = "bg-red-600";
            break;
          default:
            bgColorClass = "bg-gray-950";
        }

        return (
          <>
            <div className="flex gap-1  items-center">
              <p className={` w-2 h-2  rounded-full ${bgColorClass}  `}></p>
              <p>{row.Status}</p>
            </div>
          </>
          // <span
          //   className={`border-1 w-20 flex justify-center py-2.5 text-white rounded-full ${bgColorClass}`}
          // >
          //   {row.Status}
          // </span>
        );
      },
    },

    {
      name: "Weeks",
      sortable: true,
      selector: (row) => row.Weeks,
    },

    {
      name: "Budget",
      selector: (row) => row.Budget,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => row.Location,
      sortable: true,
    },
    {
      name: "CustomerID",
      selector: (row) => row.CustomerID,
      sortable: true,
    },
  ];
  return (
    <div className="m-2 md:m-10 mt-6 p-2 md:p-4   bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <TableComponent columns={Columns} data={customersData} />
    </div>
  );
};
