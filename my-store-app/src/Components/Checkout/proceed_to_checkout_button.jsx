import {useNavigate} from 'react-router-dom';
import React, { useCallback} from 'react';

function ProceedToCheckoutButton(){
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`/Checkout`);
  }, [navigate]);
  return(
    <button onClick={handleClick}>PROCEED TO CHECKOUT</button>
  );
}

export default ProceedToCheckoutButton;