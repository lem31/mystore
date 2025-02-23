import {create} from 'zustand';


  const useMyStore = create((set)=>({
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
          cart: state.cart.filter((product)=> product.id !== productId),
        };
        }),
      
    clearCart: () => set({cart:[]}),
    cartCount: (state)=> state.cart.length,
  }));

  export default useMyStore;