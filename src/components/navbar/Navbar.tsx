import { SiteLogo } from "@/resources/SiteLogo"
import Styles from "./navbar.module.css"
import { WishlistIcon } from "@/resources/WishlistIcon"
import { SearchIcon } from "@/resources/SearchIcon"
import { ProfileIcon } from "@/resources/ProfileIcon"
import { BagIcon } from "@/resources/BagIcon"
import { DownAngleIcon } from "@/resources/DownAngleIcon"
import { HamBurgure } from "@/resources/Hamburgure"
export const Navbar = () => {

    return (
        <nav className={Styles.nav_container}>
                <div className={Styles.nav_left}>
                    <div className={Styles.hamburger_wrapper}>
                        <HamBurgure/>
                    </div>
                    <div className={Styles.brand_logo_wrapper_mob}>
                        <SiteLogo   width={20} height={20}/>
                    </div>
                    <div className={Styles.brand_logo_wrapper_web}>
                        <SiteLogo/>
                    </div>
                </div>
                <h1 className={Styles.brand_name_heading}>MY STORE</h1>
                <meta 
                    name="description" 
                    content="Browse our curated collection of high-quality bags. Luxury handbags, backpacks, and travel accessories with free shipping." 
                />
                <meta property="og:title" content="Premium Collection | myStore" />
                <meta property="og:description" content="Browse our curated collection of high-quality products" />
            <div className={Styles.nav_right}>
                <SearchIcon/>
                <WishlistIcon/>
                <BagIcon/>
                <div className={Styles.profile_wrapper}>
                <ProfileIcon/>
                </div>
                <div className={Styles.lang_wrapper}>
                    <span>ENG</span>
                    <DownAngleIcon/>
                </div>
            </div>
        </nav>
    )
}