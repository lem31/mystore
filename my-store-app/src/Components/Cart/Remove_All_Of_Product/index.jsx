import React from 'react';
import useMyStore from '../../Store';
import BinIcon from '../../../Images/icons8-bin-50.png';


const RemoveAllOfProductFromCartButton = ({product}) => {
  const removeAllOfProductFromCart = useMyStore((state) => state.removeAllOfProductFromCart);


  return (
    <>
    
     <button onClick={() => removeAllOfProductFromCart(product.id)}> <img src={BinIcon} alt="Remove all" /></button>
    
    </>
  );
};

export default RemoveAllOfProductFromCartButton;

