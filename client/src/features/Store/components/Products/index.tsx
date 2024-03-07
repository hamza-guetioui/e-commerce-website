import Card from "./Card";
import styles from "../ShopSection.module.css";

interface Product {
  id: number;
  name: string;
  image: string;
  description?: string | JSX.Element;
  price: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// fetch products (SSR)
const getProducts = async () => {
  try {
    const response = await fetch(`${apiUrl}/products`);
    if (!response.ok) {
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }
    const {data} = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

async function Products() {
  const products = await getProducts();

  return (
    <div className={styles.productsContainer}>
      {products.map((product: Product) => (
        <Card key={product.id} {...product} />
      ))}
    </div>
  );
}

export default Products;
