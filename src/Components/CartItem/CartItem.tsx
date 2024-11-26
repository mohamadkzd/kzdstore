import { useEffect, useState } from "react";
import samsung1 from "../../assets/product/samsung-mobile.png";
import Button from "../Button/Button";
import { getProduct } from "../../Services/Api";
import { Products } from "../../Types/Server";
import { useShoppingCartContext } from "../../Context/ShoppingCartContext";
import { Link } from "react-router-dom";
interface ICarrtItem {
  id: number;
  qty: number;
}
const CartItem = ({ id, qty }: ICarrtItem) => {
  const [product, setProduct] = useState<Products>();

  const {
    handleIncreseProductQty,
    handelDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(id).then((data) => setProduct(data));
  }, []);
  return (
    <div className="lg:w-[25%] sm:w-[45%] w-[80%] border-b-2 border-[#e0e0e0] pb-[20px]">
      <div className="w-[60%]">
       <Link to={`/productdetail/${id}`}> <img src={product?.image} alt="" /></Link>
      </div>
      <div className="flex justify-center items-center flex-col gap-y-4">
        <h3>{product?.title} </h3>
        <div className="flex justify-center items-center flex-wrap gap-x-3 gap-y-3">
          <Button onClick={()=>handleIncreseProductQty(id)} variant="primary">+</Button>
          <span>{qty}</span>
          <Button onClick={()=>handelDecreaseProductQty(id)} variant="primary">-</Button>
          <Button onClick={()=>handleRemoveProduct(id)} variant="danger">remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
