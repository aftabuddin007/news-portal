import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";

const router = createBrowserRouter([
    {
   path:'/' ,
   element:<HomeLayouts></HomeLayouts>
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