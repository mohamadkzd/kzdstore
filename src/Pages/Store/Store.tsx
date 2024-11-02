import React from "react";
import Container from "../../Components/Container/Container";
import ProductItem from "../../Components/ProductItem/ProductItem";

const Store = () => {
  return (
    <Container>
      <div className="mt-6 px-5">
        
          <h1 className="text-2xl font-bold">جدیدترین محصولات</h1>
           <div className="flex justify-center items-center flex-wrap gap-x-5 gap-y-9">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
           </div>
      </div>
    </Container>
  );
};

export default Store;
