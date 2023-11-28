import Link from "next/link";
import React from "react";
import dbConnect from "../app/dbConnect";
import Todos from "@/model/Todos";

export default async function TodoRecords() {
  dbConnect();
  const todos = await Todos.find();

  return (
    <div className="container todoRecords">
      <div className="row g-4 text-center  align-items-center mt-4">
        <h1 className=" text-success">User Page</h1>
        <hr />
        <div className="container d-flex justify-content-center my-2">
          <div className="col-lg-6 col-8  p-1 rounded-3">
            <Link
              className="text-success fw-semibold mt-4 btn border-success"
              href={"/"}
            >
              Back
            </Link>
            
          </div>
        </div>
        {todos.map((todo) => (
          <div key={todo._id} className="col-lg-3 col-6 text-lg-start">
            <div className="card border-success">
              <div className="card-body text-center">
                <Link
                  className=" text-decoration-none"
                  href={`/details/${todo._id}`}
                >
                  <p className=" card-title text-success">{todo.title}</p>
                  <p className=" card-text text-success">{todo.note}</p>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
