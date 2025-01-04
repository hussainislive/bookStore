import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import axios from "axios"

function Course() {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getBook = async()=>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setbook(res.data);
      }catch(error){
        console.error("Error fetching data", error);
      }
    }
    getBook();
  }, []);
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
          {book.map((item) => {
            return <Cards item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
