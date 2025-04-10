'use client';
import { USDSvg } from "@/resources/USD"
import Styles from "./footer.module.css"
import { DownAngleIcon } from "@/resources/DownAngleIcon"
import { InstagramIcon } from "@/resources/InstagramIcon"
import { LinkedinIcon } from "@/resources/LinkedinIcon"
import { GPayIcon } from "@/resources/GPayIcon"
import { MSCardIcon } from "@/resources/MasterCardIcon"
import { PayPalWrapper } from "@/resources/PayPalIcon"
import { AmexPayIcon } from "@/resources/AmexIcon"
import { IPayIcon } from "@/resources/IPayIcon"
import { OCPayIcon } from "@/resources/OCPayIcon"
import { useEffect, useState } from "react"
import FooterlistSection from "./FooterSection"
const Footer =() => {
    const [openedDrawer,setOpnedDrawer] = useState<string[]>([]);
    const [windowWidth,setWindowWidth] = useState(0);
    const mettamuseContent = {
        title:"mettā muse",
        links:["About Us","Stories","Artisans","Boutiques","Contact Us","EU Complainces Docs"]
    }

    const quickLinksContent = {
        title:'QUICK LINKS',
        links: ["Orders & Shipping","Join/Login as a Seller","Payment & Pricing","Return & Refunds","FAQs","Privacy Policy","Terms & Conditions"]
    }

    const handleOpenDrawer = (drawer:string) => {
        setOpnedDrawer(prev => {
            let temp = [...prev];
            if(temp.includes(drawer)){
                return temp?.filter(d => d != drawer)
            } else {
                return [...temp,drawer]
            }
        })
    }

    useEffect(() => {
        if(window){
            setWindowWidth(window.innerWidth);
        }
      }, []);

    return <footer className={Styles.container}>
        <div className={Styles.footer_top}>
            <div className={Styles.connect_wrapper}>
                <h3>Be the first to know</h3>
                <p className={Styles.text}>Sign up for updates from mettā muse.</p>
                <div>
                    <input placeholder="Enter your e-mail..."/>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
            <div className={Styles.contact_wrapper}>
                <div className={Styles.contact}>
                    <h3 className={Styles.web_title}>CONTACT US</h3>
                    <h3 className={Styles.mob_title}>Call Us</h3>
                    <div className={Styles.mob_cd_wrapper}>
                        <p>+44 221 133 5360</p>
                        <div className={`${Styles.square} ${Styles.mob_square}}`}></div>
                        <p >customercare@mettamuse.com</p>
                    </div>
                </div>
                <div className={Styles.currency}>
                    <h3>Currency</h3>
                    <div className={Styles.country_wrapper}>
                        <USDSvg/>
                        <div className={Styles.square}></div>
                        <p>USD</p>
                    </div>
                    <span className={Styles.mob_hide}>Transactions will be completed in Euros and a currency reference is available on hover.</span>
                </div>
            </div>
        </div>
        <div className={Styles.footer_mid}></div>
        <div className={Styles.footer_bottom}>
            <FooterlistSection content={mettamuseContent}openedDrawer={openedDrawer} setOpnedDrawer={setOpnedDrawer}/>
            <FooterlistSection content={quickLinksContent} openedDrawer={openedDrawer} setOpnedDrawer={setOpnedDrawer}/>
            <div className={Styles.footer_btm_rght}>
                <div className={Styles.social_container}>
                    <div className={Styles.title_wrapper}>
                        <h3>FOLLOW US</h3>
                        <div onClick={() => handleOpenDrawer("social")} className={Styles.mob_angle_wrapper}>
                            <DownAngleIcon color="#FFF"/>
                        </div>
                    </div>
                    {(openedDrawer?.includes("social") || windowWidth >= 1024) && <div className={Styles.social_icon_wrapper}>
                        <InstagramIcon/>
                        <LinkedinIcon/>
                    </div>}
                </div>
                <div className={Styles.cards_container}>
                    <h3>mettā muse Accepts</h3>
                    <div className={Styles.cards_icon_wrapper}>
                        <GPayIcon/>
                        <MSCardIcon/>
                        <PayPalWrapper/>
                        <AmexPayIcon/>
                        <IPayIcon/>
                        <OCPayIcon/>
                    </div>
                </div>
            </div>
        </div>
        <p className={Styles.copyright_text}>Copyright © 2023 mettamuse. All rights reserved.</p>
    </footer>
}
export default Footer

