const ProductCard = ({ product }) => {
  return (
    <>
      <div>
        <img src={product.image} alt={product.description} width={'100px'} />
        <h1>{product.title}</h1>
        <p>{product.price}</p>
      </div>
    </>
  );
};

const ProductCardDetails = ({ product }) => {
  return (
    <>
      <div>
        <img src={product.image} alt={product.description} width={'100px'} />
      </div>
      <div>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <div>
          <button>Decrease</button>
          <input type="number" name="counter" min="0" max="10" step="1" />
          <button>Increase</button>
        </div>
        <button>Add To Cart</button>
      </div>
    </>
  );
};

export { ProductCard, ProductCardDetails };
