import { SingleProduct } from "@/types/products.types"
import { SortOption } from "../sort-controlls/SortControllers";

interface HandleFilterDataProps {
    data:SingleProduct[];
    filters:Record<string,string[]>;
    activeSortOption:SortOption | null;
}
export const handleFilterData = ({data,filters,activeSortOption}:HandleFilterDataProps) => {

    let result = [...data];
  if (filters.category && filters.category.length > 0) {
    result = result.filter(p => 
       filters?.category.includes(p.category)
    );
  }


  if (filters.price && filters.price.length > 0) {
    result = result.filter(p => 
      filters.price!.some(range => {
        const [min, max] = range.split('-').map(Number);
        return p.price >= min && (isNaN(max) || p.price <= max);
      })
    );
  }
  if(activeSortOption){
    if(activeSortOption?.value === 'price-asc'){
        result = result?.sort((a,b) => a.price - b.price)
    } else if(activeSortOption?.value === 'price-desc'){
        result = result?.sort((a,b) => b.price - a.price)
    }
  }
   return result 
}