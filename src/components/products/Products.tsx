'use client';
import { RightAngleIcon } from '@/resources/RightAngle'
import Styles from './products.module.css'
import { DownAngleIcon } from '@/resources/DownAngleIcon'
import { SortControllers, SortOption } from '../sort-controlls/SortControllers'
import { useEffect, useState } from 'react'
import { Filters } from '../filters/Filters';
import { ProductsList } from '../products-list/ProductsList';
import { SingleProduct } from '@/types/products.types';
import { SelectedFilters } from '@/types/filter-sort-options.types';
import { handleFilterData } from './products.service';

interface ProductsProps {
    products:SingleProduct[];
}

export const Products = ({products}:ProductsProps) => {
    const [filteredData,setFilteredData] = useState<SingleProduct[]>([])
    const [showFilters,setShowFilters] = useState(true);
    const [showSortOptions,setShowSortOptios] = useState(false);
    const [activeSortOption,setActiveSortOption] = useState<SortOption | null>(null);
    const [filters,setFilters] = useState<Record<string,string[]>>({})
    
    useEffect(() => {
        setFilteredData(handleFilterData({data:products,filters,activeSortOption}))
    },[filters,activeSortOption])


    return <div className={Styles.products_container}>
        {/* PRODUCTS HEADER */}
        <div className={Styles.products_header}>
            <div className={Styles.products_header_left_mob}>
                <span>FILTER</span>
            </div>
            <div className={Styles.products_header_left}>
                <p>{`${filteredData?.length} ITEMS`}</p>
                <div onClick={() => setShowFilters(prev => !prev)} className={Styles.filter_conterller}>
                    <RightAngleIcon/>
                    <span>{showFilters ? "HIDE FILTERS":"SHOW FILTERS"}</span>
                </div>
            </div>
            <div className={Styles.mob_vr_line}></div>
            <div className={Styles.products_header_right}>
                <div onClick={() => setShowSortOptios(prev => !prev)} className={Styles.sort_conterller}>
                    <span>{activeSortOption?.label || "SORT IT BY"}</span>
                    <DownAngleIcon/>
                </div>
                {showSortOptions && <SortControllers isOpen={showSortOptions} activeOption={activeSortOption} setActiveSortOption={setActiveSortOption} closeMethod={setShowSortOptios}/>}
            </div>
        </div>
        <div className={Styles.products_section}>
            {showFilters && <Filters filters={filters} setFilters={setFilters} /> }
            <ProductsList isFilters={showFilters} products={filteredData}/>
        </div>
    </div>
}