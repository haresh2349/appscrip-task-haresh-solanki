import { SingleProduct } from "@/types/products.types"
import Styles from "./products-list.module.css"
import { ProductCard } from "../product-card/ProductCard"
import { useEffect, useState } from "react";
interface ProductListProps {
    products:SingleProduct[];
    isFilters:boolean;
}
export const ProductsList = ({products,isFilters}:ProductListProps) => {
    const [cartItems,setCartItems] = useState<string[]>([]);

    useEffect(() => {
        const itemsFromCart = JSON.parse(localStorage.getItem('cartItems') || '[]')
        setCartItems(itemsFromCart)
    },[])
    return <div className={`${Styles.container} ${isFilters ? Styles?.three_row : Styles.four_row}`}>
        {
            products?.map(product => {
                return <ProductCard key={product?.id} product={product} setCartItems={setCartItems} cartItems={cartItems}/>
            })
        }
    </div>
}
