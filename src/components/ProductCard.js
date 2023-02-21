import React, { useState } from "react";
import styles from "./ProductCard.module.css";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
const ProductCard = (props) => {
  const [quantity, setQuantity] = useState(0);
  const increaseQuantityHandler = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantityHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      return;
    }
    setQuantity(0);
  };
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-12">
      <div className="row">
        <div className={`col m-1 ${styles.cardBg}`}>
          <div className="row">
            <img
              src={props.data.index_Image_Url}
              alt={props.data.name}
              className={`col-3 m-auto ${styles.noselectable}`}
            />
            <div className={`col-9 m-auto`}>
              <div className={`text-dark ${styles.lineHeight}`}>
                {props.data.name}
              </div>
              <div className="row">
                <div className={`col-6 m-auto  ${styles.noselectable}`}>
                  {props.data.price_With_Discount > 0 ? (
                    <>
                      <div>
                        <span className={`text-danger ${styles.font09}`}>
                          <span className={`${styles.lineThrough}`}>
                            {props.data.price.toLocaleString("fa-IR")}
                          </span>
                          &nbsp;
                          <span>تومان</span>
                        </span>
                      </div>
                      <div>
                        <span className={`text-dark`}>
                          <span>
                            {props.data.price_With_Discount.toLocaleString(
                              "fa-IR"
                            )}
                          </span>
                          &nbsp;
                          <span>تومان</span>
                        </span>
                      </div>
                    </>
                  ) : (
                    <div>
                      <span className={`text-dark`}>
                        <span>{props.data.price.toLocaleString("fa-IR")}</span>
                        &nbsp;
                        <span>تومان</span>
                      </span>
                    </div>
                  )}
                </div>
                <div className={`col-6 m-auto text-left`} dir="ltr">
                  <FaMinusSquare
                    className={`text-danger ${styles.cursorPointer}`}
                    size={25}
                    onClick={decreaseQuantityHandler}
                  />
                  <label
                    className={`${styles.quantityLabel} ${styles.noselectable}`}
                  >
                    {quantity.toLocaleString("fa-IR")}
                  </label>
                  <FaPlusSquare
                    className={`text-danger ${styles.cursorPointer}`}
                    size={25}
                    onClick={increaseQuantityHandler}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
