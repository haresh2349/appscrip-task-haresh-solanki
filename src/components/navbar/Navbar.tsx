import { SiteLogo } from "@/resources/site-logo"
import Styles from "./navbar.module.css"
import { WishlistIcon } from "@/resources/WishlistIcon"
import { SearchIcon } from "@/resources/SearchIcon"
import { ProfileIcon } from "@/resources/ProfileIcon"
import { BagIcon } from "@/resources/BagIcon"
import { DownAngleIcon } from "@/resources/DownAngleIcon"
import { HamBurgure } from "@/resources/Hamburgure"
export const Navbar = () => {
    const tabs = ["SHOP","SKILLS","STORIES","ABOUT","CONTACT US"]

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
                <h1 className={Styles.brand_name_heading}>BAG HOUSE</h1>
                <meta 
                    name="description" 
                    content="Browse our curated collection of high-quality bags. Luxury handbags, backpacks, and travel accessories with free shipping." 
                />
                <meta property="og:title" content="Premium Bags Collection | YourStoreName" />
                <meta property="og:description" content="Browse our curated collection of high-quality bags" />
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