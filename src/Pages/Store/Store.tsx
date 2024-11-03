import React from "react";
import Container from "../../Components/Container/Container";
import ProductItem from "../../Components/ProductItem/ProductItem";
import { Link } from "react-router-dom";

const Store = () => {
  return (
   
      <div className="mt-6">
        <h1 className="text-2xl font-bold">جدیدترین محصولات</h1>
        <div className="flex justify-center items-center flex-wrap gap-x-5 gap-y-9 ">
          <div className="lg:w-[25%] sm:w-[45%] w-[80%] ">
            <Link to={`/productdetail/${1}`}>
              <ProductItem />
            </Link>
          </div>
          <div className="lg:w-[25%] sm:w-[45%] w-[80%] ">
            <Link to={`/productdetail/${2}`}>
              <ProductItem />
            </Link>
          </div>
          <div className="lg:w-[25%] sm:w-[45%] w-[80%] ">
            <Link to={`/productdetail/${3}`}>
              <ProductItem />
            </Link>
          </div>
          <div className="lg:w-[25%] sm:w-[45%] w-[80%] ">
            <Link to={`/productdetail/${4}`}>
              <ProductItem />
            </Link>
          </div>
          <div className="lg:w-[25%] sm:w-[45%] w-[80%] ">
            <Link to={`/productdetail/${1}`}>
              <ProductItem />
            </Link>
          </div>
        </div>
      </div>
   
  );
};

export default Store;
