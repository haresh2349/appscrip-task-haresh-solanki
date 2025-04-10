
import { Products } from "@/components/products/Products";
const getProducts = async () => {
  try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return {products:data}
  } catch (error) {
      return {products:[]}
  }
}

export default async function Home() {
  const {products} = await getProducts();
  return (
    <Products products={products}/>
  );
}
