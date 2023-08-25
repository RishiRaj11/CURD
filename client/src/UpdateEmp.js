import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UpdateEmp = ({ singleEmp }) => {
  const navigate = useNavigate();
  const dummy = {
    name: singleEmp.name,
    email: singleEmp.email,
    designation: singleEmp.designation,
    empId: singleEmp.empId,
  };
  const [emp, setEmp] = useState(dummy);
  const inputHandler = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };
  const submitHandler = async () => {
    // console.log(emp);
    await axios.put(`http://localhost:8000/updateEmp/${singleEmp._id}`, emp);
    navigate("/");
  };
  return (
    <Box
      style={{
        marginTop: "8%",
        marginLeft: "25%",
        marginRight: "25%",
        width: "50%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        style={{ margin: "10px" }}
        value={emp.name}
        onChange={inputHandler}
      />

      <TextField
        label="Email"
        variant="outlined"
        name="email"
        style={{ margin: "10px" }}
        onChange={inputHandler}
        value={emp.email}
      />
      <TextField
        label="Deginnation"
        variant="outlined"
        name="designation"
        style={{ margin: "10px" }}
        onChange={inputHandler}
        value={emp.designation}
      />
      <TextField
        label="Emp id"
        variant="outlined"
        name="empId"
        style={{ margin: "10px" }}
        onChange={inputHandler}
        value={emp.empId}
      />
      <Button
        style={{ margin: "10px", background: "rgb(29,69,107)", color: "white" }}
        onClick={submitHandler}
      >
        Submit
      </Button>
    </Box>
  );
};

export default UpdateEmp;
