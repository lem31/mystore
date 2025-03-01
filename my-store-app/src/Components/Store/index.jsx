import {create} from 'zustand';
import {persist} from 'zustand/middleware';


  const useMyStore = create(persist((set, get) => ({
    products: [],
    cart: [],
    setProducts: (products) => set({  products }),
    addProductToCart: (product) => set((state)=> {
      const itemInCart = state.cart.find((item)=> item.id === product.id);
      if (itemInCart){
        return{
          cart:state.cart.map((item)=> item.id === product.id ? {...item, quantity: item.quantity +1} : item),
        };
      }
      return { cart: [...state.cart, {...product, quantity: 1}],};
    }),
    removeProductFromCart: (productId) => set((state) => {
      const itemInCart = state.cart.find((item) => item.id === productId);
      if(itemInCart && itemInCart.quantity > 1){
        return{
          cart: state.cart.map((item)=> item.id === productId ? { ...item, quantity: item.quantity -1} : item),
        };
        }
        return {
          cart: state.cart.filter((product) => product.id !== productId),
        };
        }),

        removeAllOfProductFromCart: (productId) => set((state) => ({
          cart: state.cart.filter((product) => product.id != productId),
        })),
      
    clearCart: () => set({cart:[]}),
    cartCount: (state) => state.cart.reduce((total, product) => total + product.quantity, 0),
    cartTotal: (state) => { const total = state.cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    return total.toFixed(2) },
  
specificProductTotal: (product) => {
  const state = get();
  const itemInCart = state.cart.find((item) => item.id === product.id);
  return itemInCart ? (itemInCart.discountedPrice * itemInCart.quantity).toFixed(2) : '0.00';
},
  }),{
    name: 'my-store-cart',
    getStorage: () => localStorage,
  }));

 

  export default useMyStore;