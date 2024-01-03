import Delete from "@/components/Delete";
import Todos from "@/model/Todos";
import Link from "next/link";

export default async function Details({ params }) {
  const todos = await Todos.findOne({ _id: params.id });

  {
    /**
    console.log(todos);
async function deleteNote(data) {
    "use server";
    let id = JSON.parse(data.get("id")?.valueOf());

    await Todos.deleteOne({ _id: id });
    redirect("/show");
  }
  href={"/Edit/" + element._id}

   git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/Jimmy-ui-maker/server-action-crud.git
  git push -u origin main
*/
  }

  return (
    <div className="container todoRecords">
      <div className="row g-4 text-center  align-items-center mt-4">
        <h1 className=" text-success">Details Page</h1>
        <div className="container d-flex justify-content-center my-2">
          <div className="col-lg-3 col-6 text-lg-start">
            <div className="card border-success">
              <div className="card-body">
                <p className=" card-title text-success">{todos.title}</p>
                <p className=" card-text text-success">{todos.note}</p>
                <hr />
                <div className="d-flex justify-content-around">
                  <Delete id={todos._id} />
                  <Link
                    className="btn btn-outline-success"
                    href={`/Edit/${todos._id}`}
                  >
                    Edit
                  </Link>
                  <Link className="btn btn-outline-success" href="/cards">
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
