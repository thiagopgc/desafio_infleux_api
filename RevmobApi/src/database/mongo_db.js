import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const passaword = process.env.DB_PASSAWORD;
const Conn = () => {
  mongoose
    .connect(
      `mongodb+srv://thiagopgc:${passaword}@infleuxcluster.pth01ef.mongodb.net/Revmob?retryWrites=true&w=majority`
    )
    .then(() => {
      console.log("Banco de dados conectado com sucesso");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default Conn;
