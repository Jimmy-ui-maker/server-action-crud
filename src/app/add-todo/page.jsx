
import Link from "next/link";
import { newTodo } from "../server/actions";

export default function AddTodo() {
  

  return (
    <section className=" add-todo py-4  about w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container  ">
        <h1 className=" text-center fw-bold text-success">Create Todo</h1>

        <div className="row justify-content-center align-items-center  ">
          <div className="col-lg-6 rounded-2 shadow pt-2  ">
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
