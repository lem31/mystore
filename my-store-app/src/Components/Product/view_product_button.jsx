import {useNavigate} from 'react-router-dom';
import React, { useCallback} from 'react';

function ViewProductButton({id}){
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`/product/${id}`);
  }, [navigate, id]);
  return(
    <button onClick={handleClick}>View Product</button>
  );
}

export default ViewProductButton;

