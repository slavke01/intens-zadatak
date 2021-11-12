import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";


function SkillsTable(props) {
  const { rows, columns } = props;

  return (
    <div style={{height:400, width:350}}>
      <DataGrid
        columns={columns}
        rows={rows}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.skillId}
      />
    </div>
  );
}

export default SkillsTable;