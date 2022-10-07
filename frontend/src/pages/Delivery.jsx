import React from "react";
import "./Delivery.css";
import { Toaster, toast } from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartEmpty, postData } from "../store/cartSlice";
const Delivery = () => {
  const product = useSelector((state) => state.cart.cartData);
  const User = useSelector((state) => state.auth);

  console.log("Products", product);
  console.log("users", User);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitOrder = () => {
    // const { id, name, price, imageUrl, total } = product;
    const user = User.user._id;
    // console.log("prodyct" ,product)
    // console.log("user",user)

    const data = {
      userid: user,
      item: product,
    };
    console.log("order is submitted from frontend", data);
    dispatch(postData(data));
    toast.success("Order Submitted");
    setTimeout(() => {
      navigate("/");
      dispatch(cartEmpty([]));
    }, 2000);
  };

  return (
    <div className="deliveryContainer">
      <div className="UpperProcessContainerBar">
        <div className="ProccessContainerBar">
          <div className="MenuDelivery">
            <i
              className="fa fa-check"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
            ></i>
          </div>
          <hr className="hr1ColorBar" />
          <div className="Bucket">
            <i
              className="fa fa-check"
              aria-hidden="true"
              style={{ fontSize: "20px" }}
            ></i>
          </div>
          <hr className="hr2ColorBar" />
          <div className="checkoutBar">3</div>
        </div>
        <div className="ProcessStatus">
          <h4>Menu</h4>
          <h4>Bucket</h4>
          <h4>Checkout</h4>
        </div>
      </div>

      {/*_________ Order History_______  */}

      <div className="SummaryContainer">
        <h1>Order Summary</h1>
        <div>
          <div className="itemsContainerBar">
            {product.map((item) => {
              return (
                <div key={item.id} className="productSingleDetail">
                  <img
                    src={item.image}
                    className="productDeliverImg"
                    alt="itemImg"
                  />
                  <div className="productPriceQuantityDetails ">
                    <div>
                      <h2> {item.name}</h2>
                      <p>
                        Rs {item.price} * {item.quantity}
                      </p>
                    </div>

                    <div>
                      <h3>PKR {item.price * item.quantity}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="DecisionButtons">
            <button
              className="BackButton"
              onClick={() => {
                navigate("/bucket");
              }}
            >
              Back
            </button>
            <Toaster
              position="top-center"
              reverseOrder={true}
              toastOptions={{
                className: "",
                style: {
                  borderRadius: "6px",
                  padding: "15px 50px",
                  color: "white",
                  backgroundColor: "green ",
                  marginTop: "55px",
                  fontSize: "13px",
                },
              }}
            />
            <button className="ConfirmButton " onClick={submitOrder}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
