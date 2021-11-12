import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

function CandidatesTable(props) {
  const { rows, columns } = props;

  return (
    <div style={{ height: 400, width: 1000 }}>
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.candidateId}
      />
    </div>
  );
}

export default CandidatesTable;
