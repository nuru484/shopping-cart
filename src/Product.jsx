const Product = ({ product }) => {
  return (
    <div className="product-card" id={`product-card-${product.id}`}>
      <span>
        <img
          src={product.image}
          alt={product.description}
          width="100px"
          className="product-image"
        />
      </span>

      <h1 className="product-title">{product.title}</h1>
      <p className="product-price">${product.price}</p>
    </div>
  );
};
export default Product;
