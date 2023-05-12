// components/EmployeeListItem.js
import React from "react";

export default function EmployeeListItem({ employee }) {
  return (
    <div className="employeeListItem">
      <div className="imgControl">{employee.img}</div>
      <div className="moveDiv">
        <ul>
          <li>
            <strong>{employee.name}</strong>
          </li>
          <li>{employee.title}</li>
        </ul>
      </div>
    </div>
  );
}
