// import { useParams } from "react-router-dom";
import samsung1 from "../../assets/product/samsung-mobile.png";
import Button from "../../Components/Button/Button";

const ProductDetail = () => {
  //   const params = useParams();
  return (
    <div className="flex flex-col justify-center items-center gap-y-5 border-[1px] border-[#cfcfcf] pb-[40px] rounded-[20px] pt-[10px] mt-[20px]">
      <div>
        <img className="w-[50%] mx-auto" src={samsung1} alt="" />
      </div>
      <div>
        <h2 className="text-xl">عنوان محصول</h2>
      </div>
      <div>
        <p className="text-gray-500 px-3">
          گوشی موبایل سامسونگ مدل Galaxy A55 دو سیم کارت ظرفیت 256 گیگابایت و رم
          8 گیگابایت - ویتنام
        </p>
      </div>
      <div>
        <span>قیمت :</span>
        <span> 23.300 </span>
      </div>
      <div className="flex justify-center items-center gap-x-5">
        <div>
          <button className="text-4xl text-red-600 ">+</button>
        </div>
        <Button variant="danger" className="text-2xl">خرید محصول</Button>
        <div>
          <button className="text-4xl text-red-600 ">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
