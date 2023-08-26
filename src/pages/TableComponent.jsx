import { useState } from "react";
import DataTables from "react-data-table-component";

export const TableComponent = ({ columns, data }) => {
  return (
    <>
      <DataTables
        columns={columns}
        data={data} // Use filteredData instead of data
        pagination
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        // subHeaderComponent={
        //   <input
        //     type="text"
        //     placeholder="Search here..."
        //     className="form-control w-40"
        //     value={search}
        //     onChange={(e) => setSearch(e.target.value)}
        //   />
        // }
        // subHeaderAlign="center"
        // actions={
        //   <>
        //     <button className="btn btn-sm btn-info" onClick={() => exportToPdf(filteredData)}>
        //       Export
        //     </button>
        //   </>
        // }
      />
    </>
  );
};
