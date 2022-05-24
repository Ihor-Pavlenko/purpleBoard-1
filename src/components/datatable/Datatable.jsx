import "./datatable.scss";
import { DataGrid } from "@material-ui/data-grid";

import { userColumns } from "./datatableSource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const Datatable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapShot) => {
      let data = [];

      snapShot.docs.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setData(data);
    });

    return () => {
      unsub();
    };
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "users", id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add new user
        <Link
          to="/users/new"
          style={{ textDecoration: "none" }}
          className="link"
        >
          Add new
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Datatable;
