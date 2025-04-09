export interface SingleProduct {
    id:string;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:{
        rate:number;
        count:number
    };

}



// export interface SingleProduct {
//     id:string;
//     title:string;
//     price:number;
//     image:string;
//     rating:number;
//     isRecommended:boolean;
//     quantity:number;
//     category:string;
//     occasion:string[];
//     work:string;
//     fabric:string;
//     segment:string;
//     suitableFor:string;
//     pattern:string;
//     dateAdded:string;
// }