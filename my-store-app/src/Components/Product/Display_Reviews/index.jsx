import React from 'react';
const DisplayReviews = ({ product }) => {
  return (
    <>
      {product.reviews.map((review, index) => (
        <div key={index}>
          <p>{review.description}</p>
          <p>
            {Array.from({length: review.rating},(_, i)=>(
              <span key={i}>★</span>
            ))}
          </p>
     
          <p>{review.username}</p>
         
        </div>
      ))}
    </>
  );
};

export default DisplayReviews;