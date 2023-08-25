import mongoose from "mongoose";

const connection = async (URL) => {
  try {
    await mongoose.connect(URL);
    console.log("Db conection established");
  } catch (e) {
    console.log("getting Error while connecting db", e);
  }
};

export default connection;
