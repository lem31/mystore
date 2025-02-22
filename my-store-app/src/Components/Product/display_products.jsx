import ViewProductButton from "./view_product_button";



function DisplayProducts({ product }) {
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image.url} alt={product.title} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <ViewProductButton id={product.id} />
    </div>
  );
}

export default DisplayProducts;