
import { redirect } from "next/navigation";
import dbConnect from "@/app/dbConnect";
import Todos from "@/model/Todos";
import Link from "next/link";

export default async function Edit({ params }) {
  dbConnect();
  const notes = await Todos.findOne({ _id: params.id });

  async function updateTodo(data) {
    "use server";
    let title = data.get("title")?.valueOf();
    let note = data.get("note")?.valueOf();
    let updateTodo = await Todos.findByIdAndUpdate(
      { _id: params.id },
      { title, note }
    );
    console.log(updateTodo);
    redirect("/cards");
  }
  return (
    <section className="update-todo py-4 about w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container  ">
        <h1 className=" text-center fw-bold text-success">Update Todos</h1>

        <div className="row justify-content-center align-items-center ">
          <div className="col-lg-6 rounded-2   ">
            <div className="card">
              <div className="card-body  border-success">
                <form action={updateTodo}>
                  <div>
                    <label className="text-success ">Title</label>
                    <br />
                    <input
                      type="text"
                      name="title"
                      className="text-success form-control shadow-none"
                      defaultValue={notes?.title}
                    />
                  </div>
                  <div>
                    <label className="text-success">Note</label>
                    <br />
                    <textarea
                      type="text"
                      name="note"
                      rows="3"
                      className="text-success form-control shadow-none"
                      defaultValue={notes?.note}
                    ></textarea>
                  </div>
                  <div className=" d-flex justify-content-center">
                  <Link
                      href={"/cards"}
                      className="text-success fw-semibold mt-4 btn border-success mx-4"
                    >
                      Back
                    </Link>
                    <button
                      type="submit"
                      className=" mt-4 btn btn-outline-success"
                    >
                      Update
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
