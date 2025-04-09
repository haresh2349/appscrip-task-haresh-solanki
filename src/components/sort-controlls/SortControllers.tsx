'use client';
import { CheckIcon } from "@/resources/CheckIcon"
import Styles from "./sort-controller.module.css";
import { useEffect, useRef } from "react";

interface SortControllerProps {
    isOpen:boolean;
    activeOption:string;
    setActiveSortOption:React.Dispatch<React.SetStateAction<string>>;
    closeMethod:React.Dispatch<React.SetStateAction<boolean>>
}
export const SortControllers = ({isOpen,activeOption,setActiveSortOption,closeMethod}:SortControllerProps) => {
    const elementRef = useRef<HTMLInputElement>(null);
    const options = ["RECOMMENDED","NEWEST FIRST","POPULAR","PRICE: HIGH TO LOW","PRICE: LOW TO HIGH"];

    const handleSelectSortOption = (option:string) => {
        setActiveSortOption(option)
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
                return <div key={option} onClick={() => handleSelectSortOption(option)}>
                    {activeOption === option ?<CheckIcon/> : <></>}
                    <span className={activeOption === option ? Styles.active : Styles.inActive}>{option}</span>
                </div>
            })
        }
    </div>
}