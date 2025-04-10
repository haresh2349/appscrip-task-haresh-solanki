'use client'
import { SingleProduct } from "@/types/products.types"
import Styles from "./product-card.module.css"
import { WishlistIcon } from "@/resources/WishlistIcon";
import { RedWishlistIcon } from "@/resources/RedWishIcon";

interface ProductCardProps {
    product:SingleProduct;
    cartItems:string[];
    setCartItems:React.Dispatch<React.SetStateAction<string[]>>
}
export const ProductCard = ({product,cartItems,setCartItems}:ProductCardProps) => {
    const handleAddToWishList = () => {
        setCartItems(prev => {
            let auxItems = [...prev,product.id];
            localStorage.setItem("cartItems",JSON.stringify(auxItems))
            return auxItems
        })
    }

    return <div key={product?.id} className={Styles.container}>
        <div className={Styles.image_wrapper}>
            <img src={product.image}/>
        </div>
        <div className={Styles.titleWrapper}>
            <p className={Styles.title}>{product?.title}</p>
            {cartItems?.includes(product?.id) ? 
                <div onClick={() => setCartItems(prev => prev.filter(id => id != product.id))}><RedWishlistIcon/></div>
            :   <div onClick={handleAddToWishList}><WishlistIcon/></div>
            }
        </div>
        <p>{'₹ '}{product?.price}</p>
        <p className={Styles.helper_text}><span>Sign in</span> or Create an account to see pricing</p>
        {/* //just random product to show "OUT OF STOCK" */}
        {product?.id == "3" && <div className={Styles.no_product}> 
            <p>OUT OF STOCK</p>
        </div>}
    </div>
} 