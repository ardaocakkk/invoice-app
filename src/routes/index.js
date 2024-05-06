import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/main";
import ViewInvoice from "../pages/ViewInvoice";
import Home from "../pages/Home";


const routes = createBrowserRouter([
    {
        path: "/",
        element :  <MainLayout/>,
        children : [
            {
                index: true,
                element : <Home/>
            },
            {
              path: "/view-invoice/:id",
              element : <ViewInvoice/>
            },
            {
                path: "*",
                element : "404",
            }

        ]
    },

])


export default routes