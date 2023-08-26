import { TableComponent } from "./TableComponent";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";

export const Orders = () => {
  const Columns = [
    {
      name: "Image",
      selector: (row) => (
        <img
          width={70}
          height={60}
          className="rounded-lg my-2"
          src={row.ProductImage}
        />
      ),
    },
    {
      name: "Item",
      selector: (row) => row.OrderItems,
      sortable: true,
    },

    {
      name: "Customer Name",
      selector: (row) => row.CustomerName,
      sortable: true,
    },

    {
      name: "TotalAmount ",
      selector: (row) => row.TotalAmount,
      sortable: true,
    },

    {
      name: "Status",
      sortable: true,

      selector: (row) => row.Status,
      cell: (row) => {
        let bgColorClass = "";
        switch (row.Status) {
          case "pending":
            bgColorClass = "bg-orange-500";
            break;
          case "active":
            bgColorClass = "bg-sky-400";
            break;
          case "complete":
            bgColorClass = "bg-pink-400";
            break;
          case "rejected":
            bgColorClass = "bg-red-600";
            break;
          case "canceled":
            bgColorClass = "bg-red-400";
            break;
          default:
            bgColorClass = "bg-gray-950";
        }

        return (
          <span
            className={`border-1 w-20 flex justify-center py-2.5 text-white rounded-full ${bgColorClass}`}
          >
            {row.Status}
          </span>
        );
      },
    },

    {
      name: "OrderID",
      selector: (row) => row.OrderID,
      sortable: true,
    },

    {
      name: "Location",
      selector: (row) => row.Location,
      sortable: true,
    },
    // {
    //   name: "Action",
    //   cell: (row) => (
    //     <button className="btn btn-primary" onClick={() => {}}>
    //       Edit
    //     </button>
    //   ),
    // },
  ];
  return (
    <div className="m-2 md:m-10 mt-6 p-2 md:p-4   bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <TableComponent columns={Columns} data={ordersData} />
    </div>
  );
};
