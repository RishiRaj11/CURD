import mongoose from "mongoose";

const empSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  designation: {
    type: String,
  },
  empId: {
    type: String,
    unique: true,
  },
});

const Employee = mongoose.model("Employee", empSchema);
export default Employee;
