import React from "react";
import ProductCard from "./Card";
//import { products } from "../components1/products.js";

const ProductList = ({ heading,products, sp, ep }) => {
  return (
    <div className="ml-10 flex flex-col gap-5 ">
      <h1 className="text-3xl font-bold ">{heading}</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((p) =>
          p.id >= sp && p.id <= ep ? (
            <ProductCard key={p.id} product={p} />
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};

export default ProductList;
