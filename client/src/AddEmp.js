import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AddEmp = () => {
  const navigate = useNavigate();
  const init = {
    name: "",
    email: "",
    designation: "",
    empId: "",
  };
  const [emp, setEmp] = useState(init);
  const inputHandler = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };
  const submitHandler = () => {
    //console.log(emp);
    axios
      .post("http://localhost:8000/addEmp", emp)
      .then(() => {
        setEmp(init);
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
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
        onChange={inputHandler}
      />

      <TextField
        label="Email"
        variant="outlined"
        name="email"
        style={{ margin: "10px" }}
        onChange={inputHandler}
      />
      <TextField
        label="Deginnation"
        variant="outlined"
        name="designation"
        style={{ margin: "10px" }}
        onChange={inputHandler}
      />
      <TextField
        label="Emp id"
        variant="outlined"
        name="empId"
        style={{ margin: "10px" }}
        onChange={inputHandler}
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

export default AddEmp;
