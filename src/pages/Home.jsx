import React, { Suspense, lazy, useContext } from "react";

import { useProductsContext } from "../context/products_context";
import { Loading } from "../components";
import ProductList from "../components1/Products.jsx";
import { BiFoodMenu } from "react-icons/bi";
import { cartContext } from "../context/cartContext.jsx";

const HomeProduct = lazy(() => import("../components/HomeProduct"));
const BasketProduct = lazy(() => import("../components/Basket"));
const Header = lazy(() => import("../components/Header"));
const Instagram = lazy(() => import("../components/Instagram"));
const ProductCategory = lazy(() => import("../components/ProductCategory"));
const ProductGrid = lazy(() => import("../components/ProductGrid"));
import {products} from "../components1/products.js";
import { userContext } from "../context/profile.jsx";

const Home = () => {
  const { products_loading: loading } = useProductsContext();
  const { cart } = useContext(cartContext);
  const {user}=useContext(userContext);
  console.log(cart);
  if (loading) return <Loading />;
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        {/* <HomeProduct />
        <BasketProduct />
        <ProductGrid />
        <ProductCategory /> */}
        <div className="mt-10 flex flex-col gap-5">
          <ProductList heading="Fashion" products={products} sp={1} ep={8} />
          <ProductList heading="Home Decor" products={products} sp={8} ep={16} />
          <ProductList heading="Foods" products={products} sp={16} ep={24} />
        </div>

        <Instagram />
      </Suspense>
    </>
  );
};

export default Home;

// home decode
// food
// fashion
