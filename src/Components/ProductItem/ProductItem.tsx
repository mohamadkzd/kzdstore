import samsung1 from "../../assets/product/samsung-mobile.png";
const ProductItem = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5 border-[1px] border-[#cfcfcf] pb-[40px] rounded-[20px] pt-[10px] mt-[20px]">
      <div>
        <img src={samsung1} alt="" />
      </div>
      <div>
        <h2 className="text-xl">عنوان محصول</h2>
      </div>
      <div>
        <p className="text-gray-500 px-3">
        گوشی موبایل سامسونگ مدل Galaxy A55 دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت - ویتنام
        </p>
      </div>
      <div>
        <span>
            قیمت : 
        </span>
        <span> 23.300 </span>
      </div>
    </div>
  );
};

export default ProductItem;
