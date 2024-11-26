// import { useParams } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { useEffect, useState } from "react";
import { getProduct } from "../../Services/Api";
import { Products } from "../../Types/Server";
import { useShoppingCartContext } from "../../Context/ShoppingCartContext";

const ProductDetail = () => {
  const [data, setData] = useState<Products>();
  const params = useParams<{ id: string }>();

  const {
    handleIncreseProductQty,
    handelDecreaseProductQty,
    cartItems,
    getProductsQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((data) => setData(data));
  }, []);

  const navigate = useNavigate();
  console.log(cartItems);

  return (
    <div className="flex justify-center items-center gap-x-5 border-[1px] border-[#cfcfcf] pb-[40px] rounded-[20px] pt-[10px] mt-[20px]">
      <div className="w-[70%]">
        <div className="flex justify-center items-center gap-x-4">
          <div className="flex justify-center items-center mr-8">
            <img className="w-[50%] " src={data?.image} alt="" />
          </div>
          <div>
            <div className="">
              <h2 className="text-xl"> {data?.title}</h2>
            </div>
            <div className="w-[40%]">
              <p className="text-gray-500 px-3">{data?.description}</p>
            </div>
            <div>
              <span>قیمت :</span>
              <span> 23.300 </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-[1px] border-[#e0e0e0] shadow-xl py-5 px-4">
        <div className="flex justify-center items-center gap-x-5">
          {getProductsQty(parseInt(params.id as string)) == 0 ? (
            <Button
              onClick={() =>
                handleIncreseProductQty(parseInt(params.id as string))
              }
              variant="danger"
              className="text-xl !p-3"
            >
              افزودن به سبد خرید
            </Button>
          ) : (
            <div>
              <div className="text-center text-2xl border-b-2 pb-4">
                <span className="text-2xl">تعداد محصول : </span>
                {getProductsQty(parseInt(params.id as string))}
              </div>
              <div className="flex justify-center items-center gap-x-3 pt-4">
                <Button
                  onClick={() =>
                    handleIncreseProductQty(parseInt(params.id as string))
                  }
                  variant="primary"
                  className="text-xl !px-4 !py-0"
                >
                  +
                </Button>
                <Button
                  onClick={() =>
                    handelDecreaseProductQty(parseInt(params.id as string))
                  }
                  variant="primary"
                  className="text-xl !px-4 !py-0 "
                >
                  -
                </Button>
              </div>
              <div className="text-center mt-3">
                <Button
                  onClick={() =>
                    handleRemoveProduct(parseInt(params.id as string))
                  }
                  variant="danger"
                  className=" !px-4 !py-0 "
                >
                  حذف
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className="text-left mt-4">
          <Button
            onClick={() => navigate("/store")}
            variant="secondary"
            className="text-left w-full"
          >
            برگشت به صفحه ی قبل
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
