import "./datatable.scss"
import { DataGrid } from '@material-ui/data-grid';

import {userColumns, userRows} from "./datatableSource";

const Datatable = () => {
        return (
            <div className="datatable">
              <DataGrid
                rows={userRows}
                columns={userColumns}
                pageSize={10}
                checkboxSelection
                disableSelectionOnClick
              />
            </div>
        );
}

export default Datatable;
