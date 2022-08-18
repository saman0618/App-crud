import React from "react";
import { useAppsQuery } from "../../services/AplicationApi";
import "./Table.css";

import Tr from "../tr/Tr";
function Table() {
  const { data, isSuccess } = useAppsQuery();

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>name</th>
          <th>surname</th>
          <th>email</th>
          <th>Application Aim</th>
          <th>Edit and Delete</th>
        </tr>
      </thead>
      <tbody>
        {isSuccess &&
          data.map((item, index) => (
            <tr key={index}>
              <Tr {...item} />
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
