import ProductList from "./ProductList";

function HomePage({ products, onAddToCart, searchTerm }) {

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ProductList
      products={filteredProducts}
      onAddToCart={onAddToCart}
    />
  );
}

export default HomePage;