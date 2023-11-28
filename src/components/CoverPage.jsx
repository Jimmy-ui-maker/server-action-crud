import Link from "next/link";
import React from "react";

export default function CoverPage() {
  return (
    <section className=" coverPage w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className=" container">
        <div className="row g-2 text-center justify-content-center  ">
          <div className="col-lg-6 col-12 ">
            <h1 className="   fw-bolder  ">
              Welcome to Next.js Server Actions Tutorial
            </h1>
            <p className=" fw-bold ">
              Click on the buttons below to cary out some operations
            </p>
            <div className=" d-flex justify-content-around align-items-center">
              <Link
                className=" fw-bold  btn border-info"
                href={"/add-todo"}
              >
                Add Todo
              </Link>
              <Link
                className=" fw-bold   btn border-info"
                href={"/cards"}
              >
                View Todo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
