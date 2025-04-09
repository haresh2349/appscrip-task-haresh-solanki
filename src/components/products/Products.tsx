'use client';
import { RightAngleIcon } from '@/resources/RightAngle'
import Styles from './products.module.css'
import { DownAngleIcon } from '@/resources/DownAngleIcon'
import { SortControllers } from '../sort-controlls/SortControllers'
import { useState } from 'react'
import { Filters } from '../filters/Filters';
import { ProductsList } from '../products-list/ProductsList';
import { SingleProduct } from '@/types/products.types';

interface ProductsProps {
    products:SingleProduct[];
}

export const Products = ({products}:ProductsProps) => {
    const [showFilters,setShowFilters] = useState(true);
    const [showSortOptions,setShowSortOptios] = useState(false);
    const [activeSortOption,setActiveSortOption] = useState("RECOMMENDED");
    return <div className={Styles.products_container}>
        {/* PRODUCTS HEADER */}
        <div className={Styles.products_header}>
            <div className={Styles.products_header_left_mob}>
                <span>FILTER</span>
            </div>
            <div className={Styles.products_header_left}>
                <p>3425 ITEMS</p>
                <div onClick={() => setShowFilters(prev => !prev)} className={Styles.filter_conterller}>
                    <RightAngleIcon/>
                    <span>{showFilters ? "HIDE FILTERS":"SHOW FILTERS"}</span>
                </div>
            </div>
            <div className={Styles.mob_vr_line}></div>
            <div className={Styles.products_header_right}>
                <div onClick={() => setShowSortOptios(prev => !prev)} className={Styles.sort_conterller}>
                    <span>{activeSortOption}</span>
                    <DownAngleIcon/>
                </div>
                {showSortOptions && <SortControllers isOpen={showSortOptions} activeOption={activeSortOption} setActiveSortOption={setActiveSortOption} closeMethod={setShowSortOptios}/>}
            </div>
        </div>
        <div className={Styles.products_section}>
            {showFilters && <Filters /> }
            <ProductsList isFilters={showFilters} products={products}/>
        </div>
    </div>
}