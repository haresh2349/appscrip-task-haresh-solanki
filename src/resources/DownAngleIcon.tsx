export const DownAngleIcon = ({width,height,color}:{width?:string;height?:string;color?:string}) => {
    return <div className="icon-wrapper">
        <svg role="down-angle-icon" aria-label="down-angle" width={width ? width : "16"} height={height ? height :"16"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.72125 5.9949L7.06792 10.3416C7.58125 10.8549 8.42125 10.8549 8.93458 10.3416L13.2813 5.9949" stroke={color ? color :"#292D32" } strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    </div>
}