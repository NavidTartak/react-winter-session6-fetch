import React from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductsCategory.module.css";
const ProductsCategory = (props) => {
  return (
    <div className={`col-12 text-right ${styles.m1auto}`}>
      <h5 className="text-secondary h5" dir="rtl">
        {props.data.categoryName}
      </h5>
      <div className="row" dir="rtl">
        {props.data.products.map((prod) => {
          return <ProductCard key={prod.productId} data={prod} />;
        })}
      </div>
    </div>
  );
};

export default ProductsCategory;
