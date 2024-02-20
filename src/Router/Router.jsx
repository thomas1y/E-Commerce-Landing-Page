import { createBrowserRouter } from "react-router-dom"
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop"
import SingleProduct from "../shop/SingleProduct";
import CartPage from "../shop/CartPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <App/>,
        children: [
            {path: "/",element: <Home/>},
            {
                path: "/shop",
                element: <Shop />
              },
            {
                path: "shop/:id",
                element: <SingleProduct />
            },
            {
                path: "/cart-page",
                element: <CartPage />
            }
           
        ]
    },
]);

export default router;