import React from "react";
import Cards from "./Cards";
import list from "../list.json";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-32 items-center justify-center text-center">
          <h1 className="text-2xl md:text-5xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here.</span> 😊
          </h1>
          <p className="mt-12 sm:w-[70%] mx-auto text-center">
            Your one-stop destination for discovering, exploring, and purchasing
            your favorite books. Enjoy a seamless browsing experience,
            personalized recommendations, and daily literary inspiration!
          </p>
          <Link to={"/"}>
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
              Back
            </button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => {
            return <Cards item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
