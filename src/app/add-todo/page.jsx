import { redirect } from "next/navigation";
import Link from "next/link";
import dbConnect from "../dbConnect";
import Todos from "@/model/Todos";

export default function AddTodo() {
  async function newTodo(data) {
    "use server";

    let title = data.get("title")?.valueOf();
    let note = data.get("note")?.valueOf();

    if (!title || !note) {
      console.log("All fields are needed!!!");
      return;
    }
    try {
      dbConnect();
      let newTodo = new Todos({ title, note });
      await newTodo.save();
      //console.log(newTodo);
    } catch (error) {
      console.log(error);
    }
    redirect("/cards");
  }

  return (
    <section className=" add-todo py-4 about w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container  ">
        <h1 className=" text-center fw-bold text-success">Create Note</h1>

        <div className="row justify-content-center align-items-center ">
          <div className="col-lg-6 rounded-2   ">
            <div className="card">
              <Link
                className="fw-semibold text-success btn border-success"
                href={"/cards"}
              >
                view
              </Link>

              <div className="card-body border-success">
                <form action={newTodo} className=" ">
                  <div>
                    <label className="text-success ">Title</label>
                    <br />
                    <input
                      type="text"
                      name="title"
                      className=" text-success form-control shadow-none"
                    />
                  </div>
                  <div>
                    <label className=" text-success">Note</label>
                    <br />
                    <textarea
                      type="text"
                      name="note"
                      rows="3"
                      className=" text-success form-control shadow-none"
                    ></textarea>
                  </div>
                  <div className=" mt-4 d-flex justify-content-center"></div>
                  <div className=" d-flex justify-content-center">
                    <Link
                      href={"/"}
                      className="text-success fw-semibold mt-4 btn border-success mx-4"
                    >
                      Back
                    </Link>
                    <button
                      type="submit"
                      className="text-success fw-semibold mt-4 btn border-success mx-4"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
