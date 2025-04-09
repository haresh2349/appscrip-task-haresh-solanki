import { UpAngleIcon } from "@/resources/UpAngleIcon"
import Styles from "./filters.module.css"
import { useState } from "react"
import { DownAngleIcon } from "@/resources/DownAngleIcon"
import { FILTERS_DATA } from "./filters.service"
export const Filters = () => {
    const [openedDrawer,setOpenedDrawer] = useState<string[]>([])
    return <div className={Styles.container}>
        <div className={Styles.filter_wrapper}>
            {
                FILTERS_DATA?.map(entity => {
                    return <>
                        <div className={Styles.filter_header} >
                            <p>{entity.filter}</p>
                            {
                                openedDrawer?.includes(entity.filter) ? 
                                <div onClick={() => setOpenedDrawer(prev => prev?.filter(opt => opt != entity.filter))}>
                                    <UpAngleIcon/>
                                </div>
                                :
                                <div onClick={() => setOpenedDrawer(prev => [...prev,entity.filter])}>
                                    <DownAngleIcon/>
                                </div>
                            }
                        </div>
                        <p>ALL</p>
                        {openedDrawer.includes(entity.filter) && <div className={Styles.options_wrapper}>
                            <span>Unselect all</span>
                            {
                                entity.filterOptions?.map(option => {
                                    return <div className={Styles.option_wrapper}>
                                        <input type="checkbox"/>
                                        <span>{option}</span>
                                    </div> 
                                })
                            }
                        </div>}
                    </>
                })
            }
        </div>
    </div>
}