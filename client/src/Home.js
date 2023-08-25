import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddButton from "./AddButton";
const Home = ({ setSigleEmp }) => {
  const [emp, setEmp] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/getAll").then((data) => {
      // console.log(data.data.data);
      setEmp(data.data.data);
    });
  }, [emp]);

  const deleteHandler = async (e) => {
    await axios.delete(`http://localhost:8000/deleteEmp/${e._id}`);
  };
  return (
    <Box
      style={{
        marginTop: "8%",
        marginLeft: "5%",
        marginRight: "5%",
        width: "90%",
      }}
    >
      <TableContainer>
        <AddButton />
        <Table>
          <TableHead>
            <TableRow style={{ background: "rgb(29,69,107)" }}>
              <TableCell style={{ color: "white" }}>Name</TableCell>
              <TableCell style={{ color: "white" }}>Email</TableCell>
              <TableCell style={{ color: "white" }}>Designation</TableCell>
              <TableCell style={{ color: "white" }}>EmpId</TableCell>
              <TableCell style={{ color: "white" }}>update</TableCell>
              <TableCell style={{ color: "white" }}>delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emp.map((e) => {
              return (
                <TableRow>
                  <TableCell>{e.name}</TableCell>
                  <TableCell>{e.email}</TableCell>
                  <TableCell>{e.designation}</TableCell>
                  <TableCell>{e.empId}</TableCell>
                  <TableCell>
                    <Link to="/update" style={{ color: "black" }}>
                      <EditIcon
                        onClick={() => {
                          setSigleEmp(e);
                        }}
                      />
                    </Link>
                  </TableCell>
                  <TableCell>
                    <DeleteIcon
                      onClick={() => {
                        deleteHandler(e);
                      }}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
