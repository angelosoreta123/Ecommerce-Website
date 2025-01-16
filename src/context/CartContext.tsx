import { createContext, ReactNode } from "react";
import products from "../data/products";
import useLocalStorage from "../hooks/useLocalStorage";

interface CartContextProviderProps {
  children: ReactNode;
}

interface CartItem {
  id: number;
  quantity: number;
}

interface CartContext {
  //openCart: () => void;
  //closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
  cartTotal: number;
}

export const CartContext = createContext({} as CartContext);

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart", []);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id: number) => {
    setCartItems((currentCartItems) => {
      if (currentCartItems.find((item) => item.id === id) == null) {
        return [...currentCartItems, { id, quantity: 1 }];
      } else {
        return currentCartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id: number) => {
    setCartItems((currentCartItems) => {
      if (currentCartItems.find((item) => item.id === id)?.quantity === 1) {
        return currentCartItems.filter((item) => item.id !== id);
      } else {
        return currentCartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id: number) => {
    setCartItems((currentCartItems) => {
      return currentCartItems.filter((item) => item.id !== id);
    });
  };
  const clearCart = () => {
    setCartItems([]);
  };
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const cartTotal = cartItems.reduce((total, cartItem) => {
    const item = products.find((product) => product.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);
  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
        cartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
