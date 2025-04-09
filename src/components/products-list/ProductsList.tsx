import { SingleProduct } from "@/types/products.types"
import Styles from "./products-list.module.css"
import { ProductCard } from "../product-card/ProductCard"
interface ProductListProps {
    products:SingleProduct[];
    isFilters:boolean;
}
export const ProductsList = ({products,isFilters}:ProductListProps) => {
    console.log(products,"products")
    return <div className={`${Styles.container} ${isFilters ? Styles?.three_row : Styles.four_row}`}>
        {
            products?.map(product => {
                return <ProductCard product={product}/>
            })
        }
    </div>
}
