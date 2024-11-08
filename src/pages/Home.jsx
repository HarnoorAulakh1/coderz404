import React, { Suspense, lazy } from "react"

import { useProductsContext } from "../context/products_context"
import { Loading } from "../components"
import ProductList from "/Users/harnoorsinghaulakh/Desktop/coderz404/src/components1/Products.jsx"

const HomeProduct = lazy(() => import("../components/HomeProduct"))
const BasketProduct = lazy(() => import("../components/Basket"))
const Header = lazy(() => import("../components/Header"))
const Instagram = lazy(() => import("../components/Instagram"))
const ProductCategory = lazy(() => import("../components/ProductCategory"))
const ProductGrid = lazy(() => import("../components/ProductGrid"))

const Home = () => {
  const { products_loading: loading } = useProductsContext()
  if (loading) return <Loading />
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        {/* <HomeProduct />
        <BasketProduct />
        <ProductGrid />
        <ProductCategory /> */}
        <ProductList/>
        <Instagram />
      </Suspense>
    </>
  )
}

export default Home
