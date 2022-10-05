import React from "react";
import "./Bucket.css";
import { useNavigate, Link } from "react-router-dom";
import { decrement, increment, remove } from "../store/cartSlice";

import { useSelector, useDispatch } from "react-redux";
// import { logout, reset } from "../authFeatures/authSlice";

const Bucket = () => {
  const { user } = useSelector((state) => state.auth);

  const product = useSelector((state) => state.cart.cartData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inc = (id) => {
    dispatch(increment({ id: id }));
    console.log("increment");
  };

  const dec = (id) => {
    console.log("decrement");
    dispatch(decrement({ id: id }));
  };

  const del = (id) => {
    console.log("deleted");
    dispatch(remove({ id: id }));
  };

  const proceedDelivery = () => {
    navigate("/delivery");
  };

  return (
    <div>
      <div className="UpperProcessContainer">
        <div className="ProccessContainer">
          <div className="Menu">
            <i
              className="fa fa-check"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
            ></i>
          </div>
          <hr className="hr1Color" />
          <div className="Bucket">2</div>
          <hr className="hr2Color" />
          <div className="checkout">3</div>
        </div>
        <div className="ProcessStatus">
          <h4>Menu</h4>
          <h4 className="bucketHeading">Bucket</h4>
          <h4>Checkout</h4>
        </div>
      </div>

      <div className="bucketLowerContainer">
        <div className="itemsContainer">
          {product.map((item) => {
            return (
              <div key={item.id}>
                <div className="productDetail">
                  <div className="product">
                    <img
                      src={item.image}
                      className="productImg"
                      alt="itemImg"
                    />
                    <div className="productPriceQuantity">
                      <h3> {item.name}</h3>
                      <h4>Rs {item.price}</h4>
                      <h4>
                        <span>
                          <i
                            className="fa fa-minus UDicons"
                            onClick={() => dec(item.id)}
                            aria-hidden="true"
                          ></i>
                        </span>
                        {item.quantity}
                        <span>
                          <i
                            className="fa fa-plus UDicons"
                            onClick={() => inc(item.id)}
                            aria-hidden="true"
                          ></i>
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div>
                    <h3>Rs {item.total}</h3>
                    <h5>
                      <span>
                        <i
                          className="fa fa-pencil UDicons"
                          aria-hidden="true"
                        ></i>
                      </span>
                      <span>
                        <i
                          className="fa fa-trash UDicons"
                          onClick={() => del(item.id)}
                          aria-hidden="true"
                        ></i>
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rightContainer ">
          <div className="proceedToCheckout">
            <textarea
              className="textArea"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <div className="checkBox">
              <input type="checkbox" id="a" />
              <label htmlFor="a">Save for the Future</label>
            </div>
            <button className="DoneButton">Done</button>

            {/* <button className="checkoutButton"><Link to="/delivery" className="proceedLink"> Proceed to Checkout  </Link></button> */}
            <ul className="listConditionButton">
              {user ? (
                <li>
                  <button className="checkoutButton " onClick={proceedDelivery}>
                    Proceed to Checkout
                  </button>
                </li>
              ) : (
                <div>
                  <li className="listConditionButton">
                    <Link to="/login" className="proceedLink">
                      <button className="checkoutButton ">
                        Proceed to Checkout
                      </button>
                    </Link>
                  </li>
                </div>
              )}
            </ul>
          </div>

          <div className="summary">
            <h4>Subtotal</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bucket;
