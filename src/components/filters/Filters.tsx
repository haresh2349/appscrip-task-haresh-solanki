import { UpAngleIcon } from "@/resources/UpAngleIcon"
import Styles from "./filters.module.css"
import { useState } from "react"
import { DownAngleIcon } from "@/resources/DownAngleIcon"
import { FILTERS_DATA } from "./filters.service"
import { emit } from "process"
import { SelectedFilters } from "@/types/filter-sort-options.types"

interface FiltersProps {
    filters:Record<string,string[]>;
    setFilters:React.Dispatch<React.SetStateAction<Record<string,string[]>>>
}
export const Filters = ({filters,setFilters}:FiltersProps) => {
    const [openedDrawer,setOpenedDrawer] = useState< string[]>([]);

    const handleChange = ({e,filter,option}:{e:React.ChangeEvent<HTMLInputElement>,filter:string,option:string}) => {
        const isChecked = e.target.checked;
        let auxFilter = filter?.toLowerCase()
        setFilters(prev => {
            if(!isChecked){
                return {...prev,[auxFilter]:prev?.[auxFilter]?.filter(opt => opt?.toLowerCase() != option?.toLowerCase())}
            } else {
                if(prev[auxFilter]){
                    return {...prev,[auxFilter]:[...prev[auxFilter],option?.toLowerCase()]}
                } else {
                    return {...prev,[auxFilter]:[option?.toLowerCase()]}
                }
            }
        })
    }
    return <div className={Styles.container}>
        <div className={Styles.filter_wrapper}>
            {
                FILTERS_DATA?.map((entity,index) => {
                    return <div key={index+1}>
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
                            <span onClick={() => setFilters(prev=>({...prev,[entity?.filter?.toLowerCase()]:[]}))}>Unselect all</span>
                            {
                                entity?.filterOptions?.map(option => {

                                    return <div key={option} className={Styles.option_wrapper}>
                                        <input onChange={(e) => handleChange({e,filter:entity.filter,option})} type="checkbox"/>
                                        <span>{option}</span>
                                    </div> 
                                })
                            }
                        </div>}
                    </div>
                })
            }
        </div>
    </div>
}
