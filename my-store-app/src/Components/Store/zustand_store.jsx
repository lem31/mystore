import {create} from 'zustand';


  const useMyStore = create((set)=>({
    products: [],
    cart: [],
    setProducts: (products) => set({  products }),
    addProductToCart: (product) => set((state)=>({cart: [...state.cart, product]})),
    removeProductFromCart: (productId) => set((state) => ({
      cart: state.cart.filter((product)=> product.id !== productId)
    })),
    clearCart: () => set({cart:[]}),
    cartCount: (state)=> state.cart.length,
  }));

  export default useMyStore;