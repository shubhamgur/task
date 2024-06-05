import { Route, Routes } from "react-router-dom";
import AddCategoryPage from "../pages/AddCategoryPage";
import AddProductPage from "../pages/AddProductPage";
import AddSubCategoryPage from "../pages/AddSubCategoryPage";
import CategoryPage from "../pages/CategoryPage";
import EditCategoryPage from "../pages/EditCategoryPage";
import EditProductPage from "../pages/EditProductPage";
import EditSubCategoryPage from "../pages/EditSubCategoryPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";
import SubCategoryPage from "../pages/SubCategoryPage";

const PageRoute=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/category" element={<CategoryPage/>}/>
            <Route path="/subcategory" element={<SubCategoryPage/>}/>
            <Route path="/addcategory" element={<AddCategoryPage/>}/>
            <Route path="/addsubcategory" element={<AddSubCategoryPage/>}/>
            <Route path="/product" element={<ProductPage/>}/>
            <Route path="/editcat" element={<EditCategoryPage/>}/>
            <Route path="/esub" element={<EditSubCategoryPage/>}/>
            <Route path="/addpro" element={<AddProductPage/>}/>
            <Route path="/editpro" element={<EditProductPage/>}/>
        </Routes>
        </>
    )
}

export default PageRoute;