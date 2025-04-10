'use client';
import { useEffect, useState } from "react";
import Styles from "./footer.module.css"
import { DownAngleIcon } from "@/resources/DownAngleIcon";

interface Content {
    title:string;
    links:string[];
}
const FooterlistSection = ({content,setOpnedDrawer,openedDrawer}:{
    content:Content;
    openedDrawer:string[];
    setOpnedDrawer:React.Dispatch<React.SetStateAction<string[] | []>>
}) => {
    const [windowWidth,setWindowWidth] = useState(0)
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
    return (
        <div className={Styles.section_container}>
            <div className={Styles.title_wrapper}>
                <h3>{content.title}</h3>
                <div onClick={() => handleOpenDrawer(content.title)} className={Styles.mob_angle_wrapper}>
                    <DownAngleIcon color="#FFF"/>
                </div>
            </div>
            {
               (openedDrawer?.includes(content?.title) || windowWidth >= 1024)  && content?.links?.map(link => {
                    return <span key={link} className={Styles.link}>{link}</span>
                })
            }
        </div>
    )
}

export default FooterlistSection