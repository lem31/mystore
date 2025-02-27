import React, { useEffect, useState } from 'react';
import useMyStore from '../../Store';




const DisplayProductSubtotal = ({ product }) => {
  const [subtotal, setSubtotal] = useState(0);
  const specificProductTotal = useMyStore((state) => state.specificProductTotal);

  useEffect(() => {
    setSubtotal(specificProductTotal(product));
  }, [product, specificProductTotal]);

  return (
    <div>
      <h2>Subtotal: {subtotal}</h2>
    </div>
  );
};

export default DisplayProductSubtotal;