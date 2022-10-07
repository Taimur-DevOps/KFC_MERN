
import { useState, useEffect } from "react";
// import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import { login, reset } from "../auth/authSlice";
import Spinner from "../components/Spinner";
import { Toaster, toast } from "react-hot-toast";
import {  Link } from "react-router-dom";
import "./Login.css";
import ChachaKfc from "../assets/ChachaKfc.gif";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log("toast idhar  working");

      toast.error(message);
      console.log("toast  idhar not working");
    }

    if (isSuccess || user) {
      navigate("/bucket");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="bodyContainer">
      <div>
        <Toaster
          position="top-center"
          reverseOrder={true}
          toastOptions={{
            className: "",
            style: {
              borderRadius: "6px",
              padding: "15px 50px",
              color: "white",
              backgroundColor: "#e4002b ",
              marginTop: "55px",
              fontSize:"13px"
            },
          }}
        />
      </div>
      <div className="loginContainer">
        <div className="leftSide">
          <div className="gifImage">
            <img src={ChachaKfc} alt="ChachaKfc" />
          </div>
        </div>

        <div className="rightSide">
          <div className="formSide">
            <h2 className="welcome">Welcome!</h2>

            <form onSubmit={onSubmit}>
              <input
                type="email"
                className="textField"
                id="email"
                name="email"
                onChange={onChange}
                value={email}
                
                placeholder="Enter your email"
              />

              {/* {formik.touched.name && formik.errors.name ? <div className='errors'>{formik.errors.name}</div>:null } */}
              <input
                type="password"
                className="numberField"
                placeholder="Enter password"
                id="password"
                name="password"
                onChange={onChange}
                value={password}
              
              />

              {/* {formik.touched.phone && formik.errors.phone? <div className='errors'>{formik.errors.phone}</div>:null} */}

              <div>
                <button className="loginButton" type="submit">
                  Login
                </button>
              </div>
            </form>

            <div className="formBottom">
              <div className="orLoginWith">
                <hr className="leftHr" />
                <h2>or Register Yourself</h2>
                <hr className="rightHr" />
              </div>
              <div>
                <Link to="/register" className="googleIcon">
                  <div className="iconDiv">
                    <i
                      className="fa fa-google"
                      style={{ fontSize: "19px", color: "red" }}
                    ></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

// import React from "react";
// import "./Login.css";
// import ChachaKfc from "../assets/ChachaKfc.gif";

// import { useFormik } from "formik";
// import * as Yup from "yup";

// // input feilds 'name' attr
// const initialValues = {
//   name: "",
//   phone: "",
// };

// const onSubmit = (values) => {
//   console.log(values);
// };

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
// //validation through YUP
// const validationSchema = Yup.object({
//   name: Yup.string().required("Please fill in the required information"),
//   phone:Yup.string().min(10).matches(phoneRegExp, 'Phone number is not valid')

// });

// const Login = () => {
//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//     validationSchema,
//   });

//   return (
//     <div className="bodyContainer">
//       <div className="loginContainer">
//         <div className="leftSide">
//           <div className="gifImage">
//             <img src={ChachaKfc} alt="ChachaKfc" />
//           </div>
//         </div>

//         <div className="rightSide">
//           <div className="formSide">
//             <h2 className="welcome">Welcome!</h2>

//             <form onSubmit={formik.handleSubmit}>
//               <input
//                 type="text"
//                 className="textField"
//                 placeholder="Name"
//                 id="name"
//                 name="name"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.name}
//               />
//               {formik.touched.name && formik.errors.name ? <div className='errors'>{formik.errors.name}</div>:null }
//               <input
//                 type="Number"
//                 className="numberField"
//                 placeholder="Phone Number"
//                 id="phone"
//                 name="phone"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.phone}
//               />
//               {formik.touched.phone && formik.errors.phone? <div className='errors'>{formik.errors.phone}</div>:null}
//               <button className="loginButton" type="submit">
//                 Login
//               </button>
//             </form>

//             <div className="formBottom">
//               <div className="orLoginWith">
//                 <hr className="leftHr" />
//                 <h2>or login with</h2>
//                 <hr className="rightHr" />
//               </div>
//               <div>
//                 <a href="https://www.google.com/" className="googleIcon">
//                   <div className="iconDiv">
//                     <i
//                       class="fa fa-google"
//                       style={{ fontSize: "19px", color: "red" }}
//                     ></i>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// {
//   /* <section className='form'>
// <form onSubmit={onSubmit}>
  
//   <div className='form-group'>
//     <input type='email'  className='form-control' id='email' name='email' value={email} placeholder='Enter your email'  onChange={onChange} autocomplete="on"/>
//   </div>
  
//   <div className='form-group'>
//     <input type='password'  className='form-control'   id='password' name='password'  value={password}  placeholder='Enter password' onChange={onChange} autocomplete="on"
//     />
//   </div>

//   <div className='form-group'>
//     <button type='submit' className='btn btn-block'>
//       Submit
//     </button>
//   </div>
// </form>
// </section> */
// }
