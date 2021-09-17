import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function DataGridSym(props) {
    return (
        <div style={{ height: 800, width: '100%' }} >
    <DataGrid
        components={{
          Toolbar: GridToolbar,
        }}
     filterModel={{
      items: [{ columnField: 'commodity', operatorValue: 'contains', value: 'rice' }],
    }}
      rows={props.rows}
      columns={props.columns}
      pageSize={10}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>
    )
}
