import React from 'react';
import useMyStore from '../Store/zustand_store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons';

const RemoveProductsFromCartButton = ({product}) => {
  const removeProductFromCart = useMyStore((state) => state.removeProductFromCart);

  return (
    <>
    
     <button onClick={() => removeProductFromCart(product.id)}><FontAwesomeIcon icon={faSquareMinus} /></button>
    
    </>
  );
};

export default RemoveProductsFromCartButton;


