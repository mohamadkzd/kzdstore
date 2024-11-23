// import { useParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import samsung1 from "../../assets/product/samsung-mobile.png";
import Button from "../../Components/Button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../../Services/Api";
import { Products } from "../../Types/Server";
import { useShoppingCartContext } from "../../Context/ShoppingCartContext";

const ProductDetail = () => {
  const [data, setData] = useState<Products>();
  const params = useParams<{ id: string }>();

  const { handleIncreseProductQty, cartItems } = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((data) => setData(data));
  }, []);

  console.log(cartItems);

  return (
    <div className="flex flex-col justify-center items-center gap-y-5 border-[1px] border-[#cfcfcf] pb-[40px] rounded-[20px] pt-[10px] mt-[20px]">
      <div className="flex justify-center items-center mr-8">
        <img className="w-[50%] " src={data?.image} alt="" />
      </div>
      <div>
        <h2 className="text-xl"> {data?.title}</h2>
      </div>
      <div>
        <p className="text-gray-500 px-3">{data?.description}</p>
      </div>
      <div>
        <span>قیمت :</span>
        <span> 23.300 </span>
      </div>
      <div className="flex justify-center items-center gap-x-5">
        {/* <div>
          <button className="text-4xl text-red-600 ">+</button>
        </div> */}
        <Button
          onClick={() => handleIncreseProductQty(parseInt(params.id as string))}
          variant="danger"
          className="text-xl !p-3"
        >
          افزودن به سبد خرید
        </Button>
        <Button
         
          variant="primary"
          className="text-xl !p-3"
        >
          -
        </Button>
        {/* <div>
          <button className="text-4xl text-red-600 ">-</button>
        </div> */}
      </div>
      <div className="text-left">
        <Button variant="secondary" className="text-left w-full">
          برگشت به صفحه ی قبل
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
