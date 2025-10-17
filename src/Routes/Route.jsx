import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Components/Pages/Home";
import CategoryNews from "../Components/Pages/CategoryNews";

const router = createBrowserRouter([
    {
   path:'/' ,
   element:<HomeLayouts></HomeLayouts>,
   children:[
    {
        path:'',
        element:<Home></Home>
    },
    {
        path:'/category/:id',
        element:<CategoryNews></CategoryNews>
    },
    {
        path:'',
        element:<Home></Home>
    }
   ]
},
    {
   path:'/auth' ,
   element:<p>Atheantication</p>
},
    {
   path:'/news' ,
   element:<p>News Layout</p>
},
    {
   path:'/*' ,
   element:<p>Error404</p>
}
])
export default router