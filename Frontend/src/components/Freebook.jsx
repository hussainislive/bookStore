import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios"
import Slider from "react-slick";

import Cards from "./Cards";
const Freebook = () => {
  const [book, setbook] = useState([]);
  useEffect(() => {
    const getBook = async()=>{
      try{
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "Free")
        console.log(data);
        
        setbook(data);
      }catch(error){
        console.error("Error fetching data", error);
      }
    }
    getBook();
  }, []);
  // console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Books</h1>
          <p className="w-[70%]">
            Browse our collection of free books, from thrilling stories to
            insightful knowledge. Perfect for readers seeking great content
            without spending a dime!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {book.map((item) => {
             return <Cards item={item} key={item.id} />;
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
