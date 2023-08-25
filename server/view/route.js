import express from "express";
import {
  getAllEmp,
  addEmp,
  updateEmp,
  deleteEmp,
} from "../controller/empController.js";
const router = express.Router();

router.get("/getAll", getAllEmp);
router.post("/addEmp", addEmp);
router.put("/updateEmp/:id", updateEmp);
router.delete("/deleteEmp/:id", deleteEmp);
export default router;
