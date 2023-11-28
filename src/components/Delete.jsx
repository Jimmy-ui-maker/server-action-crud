const mongoose = require("mongoose");
import { redirect } from "next/navigation";
import Note from "../model/Todos";

export default async function Delete(props) {
  const id = props.id;
  await mongoose.connect(process.env.MONGODB_URI);

  async function deleteTodo() {
    "use server";
    await Note.deleteOne({ _id: id });
    redirect("/cards");
  }
  return (
    <form action={deleteTodo}>
      <button type="submit" className=" btn btn-outline-danger">
        Del
      </button>
    </form>
  );
}
