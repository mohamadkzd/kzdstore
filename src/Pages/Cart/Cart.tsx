import Button from "../../Components/Button/Button";
import CartItem from "../../Components/CartItem/CartItem";

const Cart = () => {
  return (
    <div className="max-w-[1000px] mx-auto ">
      <div className="flex justify-center items-start gap-y-5 flex-col flex-wrap  ">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="mt-[10px]">
        <p>قیمت کل : 1,000</p>
        <p> تخفیف شما : 200</p>
        <p>  قیمت نهایی : 800</p>
      </div>
      <div className="text-left pb-4">
        <Button variant="success">ثبت سفارش</Button>
      </div>
    </div>
  );
};

export default Cart;
