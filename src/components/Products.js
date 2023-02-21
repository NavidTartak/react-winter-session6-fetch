import React, { useEffect, useState } from "react";
import GetProducts from "../api/ProductsController";
import styles from "./Products.module.css";
import ProductsCategory from "./ProductsCategory";
import ProductSkeleton from "./ProductSkeleton";
const Products = () => {
  const [products, setProducts] = useState({
    isLoading: true,
    productsData: [],
  });
  const [search, setSearch] = useState("");
  useEffect(() => {
    GetProducts(0, "", setProducts);
  }, []);
  const searchProductHandler = () => {
    GetProducts(0, search, setProducts);
  };
  return (
    <div className={`container-fluid ${styles.mainBack}`}>
      <div className={`container ${styles.m3top}`}>
        <div className="row" dir="rtl">
          <div className={`col-12 ${styles.padding0}`}>
            <div className="input-group input-group-sm mb-3" dir="ltr">
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                dir="rtl"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {!products.isLoading ? (
                <span
                  className={`input-group-text ${styles.cursorPointer} bg-dark text-white`}
                  id="inputGroup-sizing-sm"
                  onClick={searchProductHandler}
                >
                  &nbsp;جستجو&nbsp;
                </span>
              ) : (
                <></>
              )}
            </div>
          </div>
          {products.isLoading ? (
            <ProductSkeleton />
          ) : (
            products.productsData.map((cat) => {
              return <ProductsCategory key={cat.categoryId} data={cat} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
