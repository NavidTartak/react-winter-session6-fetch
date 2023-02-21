import React from "react";
import styles from "./ProductSkeleton.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ProductSkeleton = () => {
  const staticArray = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={`col-12 ${styles.padding0}`}>
      <div className="row" dir="rtl">
        <Skeleton className="col-3" />
      </div>
      <div className="row" dir="rtl">
        {staticArray.map((item) => {
          return (
            <div key={item} className="col-xl-6 col-lg-6 col-md-6 col-12">
              <div className="row">
                <div className={`col m-1 ${styles.cardBg}`}>
                  <div className="row">
                    <div className="col-2">
                      <Skeleton height={100} />
                    </div>
                    <div className="col-10">
                      <Skeleton height={10} />
                      <Skeleton height={10} />
                      <Skeleton width={100} height={10} />
                      <Skeleton width={100} height={10} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSkeleton;
