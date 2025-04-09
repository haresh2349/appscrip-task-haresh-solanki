'use client'
import { SingleProduct } from "@/types/products.types"
import Styles from "./product-card.module.css"
import { WishlistIcon } from "@/resources/WishlistIcon"
export const ProductCard = ({product}:{product:SingleProduct}) => {
    return <div key={product?.id} className={Styles.container}>
        <div className={Styles.image_wrapper}>
            <img src={product.image}/>
        </div>
        <div className={Styles.titleWrapper}>
            <p className={Styles.title}>{product?.title}</p>
            <WishlistIcon/>
        </div>
        <p>{'₹ '}{product?.price}</p>
        <div className={Styles.no_product}>
            <p>OUT OF STOCK</p>
        </div>
    </div>
} 