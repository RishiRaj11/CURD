import Employee from "../model/emp_Schema.js";

export const getAllEmp = async (req, res) => {
  try {
    const emp = await Employee.find({});
    return res.status(200).json({ data: emp });
  } catch (e) {
    return res.status(500).json({ message: "Internal Error" });
  }
};
export const addEmp = async (req, res) => {
  //console.log(req.body);
  const { email } = req.body;
  try {
    const emp = await Employee.findOne({ email: email });
    if (emp) {
      return res.status(409).json({ message: "existing data" });
    }
    const addEmp = new Employee(req.body);
    await addEmp.save();
    return res.status(201).json({ message: "emp added successfully" });
  } catch (e) {
    return res.status(500).json({ message: "Internal Error" });
  }
};

export const updateEmp = async (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  let emp;
  try {
    emp = await Employee.findByIdAndUpdate(_id, req.body);
    return res.status(200).json({ message: "Updated successfully" });
  } catch (e) {
    console.log(e);
  }
  if (!emp) {
    return res.status(404).json({ message: "not found !" });
  }
};

export const deleteEmp = async (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  let emp;
  try {
    emp = await Employee.findByIdAndDelete(_id);
    return res.status(200).json({ message: "deleted successfully" });
  } catch (e) {
    console.log(e);
  }
  if (!emp) {
    return res.status(404).json({ message: "not found !" });
  }
};
