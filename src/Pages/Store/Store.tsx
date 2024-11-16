import { useEffect, useState } from "react";
import ProductItem from "../../Components/ProductItem/ProductItem";
import { Link } from "react-router-dom";
import { getProducts } from "../../Services/Api";
import { Products } from "../../Types/Server";

const Store = () => {
  const [data, setData] = useState<Products[]>([]);
  useEffect(() => {
    getProducts().then((data) => setData(data));
  }, []);

  console.log(data);

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold">جدیدترین محصولات</h1>
      <div className="flex justify-center items-center flex-wrap gap-x-5 gap-y-9 ">
        {data?.map((elem) => {
          return (
            <div key={elem?.id} className="lg:w-[25%] sm:w-[45%] w-[80%] ">
              <Link to={`/productdetail/${elem.id}`}>
                <ProductItem {...elem}/>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
