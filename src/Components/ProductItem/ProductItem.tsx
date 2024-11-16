import samsung1 from "../../assets/product/samsung-mobile.png";
import { Products } from "../../Types/Server";

type TProductItem = Products

const ProductItem = ({image,title,description,category}:TProductItem) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-5 border-[1px] border-[#cfcfcf] pb-[40px] rounded-[20px] pt-[10px] mt-[20px] px-4">
      <div className="flex justify-center">
        <img className="w-[50%] object-cover text-center" src={image} alt="" />
      </div>
      <div>
        <h2 className="text-lg">{title}</h2>
      </div>
      <div>
        <p className="text-gray-500 px-3 text-sm">
       {description}
        </p>
      </div>
      <div>
        <p className="text-gray-500 px-3">
          {category}
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
