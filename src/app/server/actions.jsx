"use server";
import Todos from "@/model/Todos";
import { redirect } from "next/navigation";

// Creating Todo
export async function newTodo(data) {
  let title = data.get("title")?.valueOf();
  let note = data.get("note")?.valueOf();

  if (!title || !note) {
    console.log("All fields are needed!!!");
    return;
  }
  try {
    let newTodo = new Todos({ title, note });
    await newTodo.save();
    //console.log(newTodo);
  } catch (error) {
    console.log(error);
  }
  redirect("/cards");
}
