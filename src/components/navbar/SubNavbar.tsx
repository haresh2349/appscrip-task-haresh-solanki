import Styles from "./navbar.module.css"
export const SubNavbar = () => {
    const tabs = ["SHOP","SKILLS","STORIES","ABOUT","CONTACT US"]
    return <div className={Styles.tabs_wrapper}>
    {
        tabs?.map((tab) => {
            return <span key={tab}>{tab}</span>
        })
    }
</div>
}