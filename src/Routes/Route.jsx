import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Components/Pages/Home";
import CategoryNews from "../Components/Pages/CategoryNews";
import Login from "../Components/Pages/Login";
import Registration from "../Components/Pages/Registration";
import AuthLayout from "../Layouts/AuthLayout";

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
        element:<CategoryNews></CategoryNews>,
        loader:()=>fetch('/news.json')
    },
    {
        path:'',
        element:<Home></Home>
    }
   ]
},
    {
   path:'/auth' ,
   element:<AuthLayout></AuthLayout>,
   children:[
    {
        path:'/auth/login',
        element:<Login></Login>
    },
    {
        path:'/auth/registration',
        element:<Registration></Registration>
    }
   ]
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