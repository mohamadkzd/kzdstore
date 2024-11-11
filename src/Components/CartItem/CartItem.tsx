import samsung1 from "../../assets/product/samsung-mobile.png";
import Button from "../Button/Button";
const CartItem = () => {
  return (
    <div className="lg:w-[25%] sm:w-[45%] w-[80%] border-b-2 border-[#e0e0e0] pb-[20px]">
      <div>
        <img src={samsung1} alt="" />
      </div>
      <div className="flex justify-center items-center flex-col gap-y-4">
        <h3>عنوان محصول</h3>
        <div className="flex justify-center items-center flex-wrap gap-x-3 gap-y-3">
          <Button variant="primary">+</Button>
          <span>{2}</span>
          <Button variant="primary">-</Button>
          <Button variant="danger">remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
