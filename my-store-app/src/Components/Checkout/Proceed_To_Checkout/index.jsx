import {useNavigate} from 'react-router-dom';
import React, { useCallback} from 'react';
import styles from '../../../CSS_Modules/Global_Styles/global_styles.module.css';

function ProceedToCheckoutButton(){
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(`/Checkout`);
  }, [navigate]);
  return(
    <div>
    <button className={styles.button} onClick={handleClick}>PROCEED TO CHECKOUT</button>

    </div>
  );
}

export default ProceedToCheckoutButton;