import Card from "./Card";
import styles from "../ShopSection.module.css";

interface Product {
  id: number;
  name: string;
  image: string;
  description?: string | JSX.Element;
  price: string;
}

// fetch products (SSR)
const fetchProductsFromServer = async () => {
  try {
    const response = await fetch('http://localhost:4040/products');
    if (!response.ok) {
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

async function ProductsSection () {
  const products = await fetchProductsFromServer();

  return (
    <div className={styles.productsContainer}>
      {products.map((product: Product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsSection;