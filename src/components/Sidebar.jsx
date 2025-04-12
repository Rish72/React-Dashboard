import { BarChart, ChartPie, IndianRupee, Settings, ShoppingBag, ShoppingCart, UserRound } from "lucide-react"
import { useState } from "react"

const sidebar_items_list = [
    {
        name:"Overview", icon : BarChart , color : "white", path : "/"
    },
    {
        name:"Products", icon : ShoppingBag , color : "white", path : "/products"
    },
    {
        name:"Users", icon : UserRound , color : "white", path : "/users"
    },
    {
        name:"Sales", icon : IndianRupee , color : "white", path : "/sales"
    },
    {
        name:"Orders", icon : ShoppingCart , color : "white", path : "/orders"
    },
    {
        name:"Analytics", icon : ChartPie , color : "white", path : "/analytics"
    },
    {
        name:"Settings", icon : Settings , color : "white", path : "/settings"
    },
]

const Sidebar = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(true);
    return (
        <motion.div className={`relative transition-all duration-300 ease-in-out shrink-0 ${isSideBarOpen ? 'w-64' : 'w-20'}`}
        animate={{width : setIsSideBarOpen(!isSideBarOpen)}}>

        </motion.div>
    )
}

export default Sidebar