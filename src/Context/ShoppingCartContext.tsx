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
  handleIncreseProductQty:(id:number)=>void
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
      } 
      else {
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
    
  // const handelDecreaseProductQty=(id:number)=>{
  //  setCartItems((prevItems)=>{
      
  //  })
  // }

  return (
    <ShoppingCartContext.Provider value={{ cartItems ,handleIncreseProductQty}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
