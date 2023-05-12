// components/EmployeeList.js
import React from "react";
import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList(props) {
  const img1 = <img src={require("./img1.PNG")} alt="img1" />;
  const img2 = <img src={require("./img2.PNG")} alt="img2" />;
  const employees = [
    { name: "James King", title: "President and CEO", img: img1 },
    { name: "Julie Taylor", title: "VP of Marketing", img: img2 },
    { name: "Eugene Lee", title: "CFO", img: img1 },
    { name: "John Williams", title: "VP of Engineering", img: img2 },
    { name: "Ray Moore", title: "VP of Sales", img: img1 },
    { name: "Paul Jones", title: "QA Manager", img: img2 },
  ];
  return (
    <div className="employeeList">
      {employees.map((employee) => (
        <EmployeeListItem key={employee.name} employee={employee} />
      ))}
    </div>
  );
}
