import { createContext, useContext, useState } from "react";

interface ShoppingCartProvider {
  children: React.ReactNode;
}

interface CartItem {
  id: number;
  qty: number;
}

interface ShoppingCartContext {
  cartItems: CartItem[];
  handleIncreseProductQty: (id: number) => void;
  handelDecreaseProductQty: (id: number) => void;
  getProductsQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty:number
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleIncreseProductQty = (id: number) => {
    setCartItems((prevItems) => {
      let selectedItem = prevItems.find((item) => item.id == id); //با فایند کردن آیتمی که میخواهیم که بگیم آیدی محصولی که کلیک شد با آیدی محصولی که هست یکی باشه حالا اگر فایند نکنه خالی بر میگردونه

      if (selectedItem == null) {
        return [...prevItems, { id: id, qty: 1 }];
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handelDecreaseProductQty = (id: number) => {
    setCartItems((prevItems) => {
      let selectedItem = prevItems.find((item) => item.id == id);
      if (selectedItem?.qty === 1) {
        return prevItems.filter((item) => item.id !== id);
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductsQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id != id));
  };

  const cartQty=cartItems.reduce((totalQty,item)=>totalQty+item.qty,0)

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreseProductQty,
        handelDecreaseProductQty,
        getProductsQty,
        handleRemoveProduct,
        cartQty,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
