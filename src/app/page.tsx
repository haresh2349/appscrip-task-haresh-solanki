
import { Products } from "@/components/products/Products";

export const getProducts = async (sort?:string,filters?:string[]) => {
  try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      return {products:data}
  } catch (error) {
      console.log(error);
      return {products:[]}
  }
}

export default async function Home() {
  const {products} = await getProducts();
  return (
    <Products products={products}/>
  );
}
