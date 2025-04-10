'use client';
import { CheckIcon } from "@/resources/CheckIcon"
import Styles from "./sort-controller.module.css";
import { useEffect, useRef } from "react";

export interface SortOption {
    label:string;
    value:string
} 
interface SortControllerProps {
    isOpen:boolean;
    activeOption:SortOption | null;
    setActiveSortOption:React.Dispatch<React.SetStateAction<SortOption | null>>;
    closeMethod:React.Dispatch<React.SetStateAction<boolean>>
}
export const SortControllers = ({isOpen,activeOption,setActiveSortOption,closeMethod}:SortControllerProps) => {
    const elementRef = useRef<HTMLInputElement>(null);
    const options = [{label:"RECOMMENDED",value:"recommended"},{label:"NEWEST FIRST",value:"date-asc"},{label:"POPULAR",value:"popular"},{label:"PRICE: HIGH TO LOW",value:"price-desc"},{label:"PRICE: LOW TO HIGH",value:"price-asc"}];

    const handleSelectSortOption = (option:{label:string,value:string}) => {
        setActiveSortOption(prev => prev?.value === option?.value ? null : option)
    }

    // To close the sort options on clicking outside of it.
    useEffect(() => {
        const handleClickOutSide = (e:MouseEvent) => {
            if(elementRef.current && !elementRef?.current?.contains(e.target as Node)){
                closeMethod(false)
            }
        }
        document.addEventListener("mousedown",handleClickOutSide)
        return () => {
            document.removeEventListener("mousedown",handleClickOutSide)
        }
    },[])
    return <div ref={elementRef} className={`${Styles.container} ${isOpen ? Styles.open : Styles.close}`}>
        {
            options?.map(option => {
                return <div key={option?.value} onClick={() => handleSelectSortOption(option)}>
                    {activeOption?.value === option?.value ?<CheckIcon/> : <></>}
                    <span className={activeOption?.value === option?.value ? Styles.active : Styles.inActive}>{option?.label}</span>
                </div>
            })
        }
    </div>
}