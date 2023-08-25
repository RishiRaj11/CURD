import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const AddButton = () => {
  return (
    <Link to="/addEmp">
      <Button
        style={{
          padding: "5px",
          color: "block",
          backgound: "rgb(211,211,211)",
          marginButton: "10px",
        }}
      >
        Add New Employee
      </Button>
    </Link>
  );
};

export default AddButton;
