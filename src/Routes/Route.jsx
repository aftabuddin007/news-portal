import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Components/Pages/Home";
import CategoryNews from "../Components/Pages/CategoryNews";
import Login from "../Components/Pages/Login";
import Registration from "../Components/Pages/Registration";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../Components/Pages/NewsDetails";
import PrivateRoute from "../Components/PrivateRoute";
import Loading from "../Components/Pages/Loading";
import NewspaperAboutPage from "../Components/Pages/About";
import NewspaperCareersPage from "../Components/Pages/CareerPage";

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
        loader:()=>fetch('/news.json'),
        hydrateFallbackElement:<Loading></Loading>

    },
    {
        path:'',
        element:<Home></Home>
    },
    {
    path:"/about",
    element:<NewspaperAboutPage></NewspaperAboutPage>
},
{
    path:"/career",
    element:<NewspaperCareersPage></NewspaperCareersPage>
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
   path:'/news-details/:id' ,
   element:<PrivateRoute>
    <NewsDetails></NewsDetails>
   </PrivateRoute>,
   loader:()=>fetch('/news.json'),
   hydrateFallbackElement:<Loading></Loading>
},
    {
   path:'/*' ,
   element:<p>Error404</p>
}
])
export default router