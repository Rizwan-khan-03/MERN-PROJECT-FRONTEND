import { UpdateRounded } from "@mui/icons-material";
import AddProduct from "../component/AddProduct";
import Login from "../component/Login";
import Product from "../component/Product";
import Profile from "../component/Profile";
import UpdateProduct from "../component/UpdateProduct";

export const routepath = [
    {
        path: "/product",
        Element: Product,
    },
    {
        path: "/add",
        Element: AddProduct,
    },
    {
        path: "/update",
        Element: UpdateProduct,
    },

    {
        path: "/profile",
        Element: Profile,
    },
]
