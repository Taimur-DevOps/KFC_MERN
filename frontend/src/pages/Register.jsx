import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

 
// import { FaUser } from "react-icons/fa";
import { register, reset } from "../authFeatures/authSlice";
import Spinner from "../components/Spinner";
import "./Register.css";
import ChachaKfc from "../assets/ChachaKfc.gif";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
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
    
    if(password.length<6){
      toast.error("Your Password is less than 6 Characters")
    }
    if (password !== password2) {
      console.log("toast  working");
      toast.error("Passwords do not match");
      console.log("toast not working");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
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
              fontSize: "13px",
            },
          }}
        />
      </div>
      <div className="loginContainerBox">
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
                type="text"
                className="textField"
                placeholder="Enter your name"
                id="name"
                name="name"
                onChange={onChange}
                value={name}
                autoComplete="on"
              />

              {/* {formik.touched.name && formik.errors.name ? <div className='errors'>{formik.errors.name}</div>:null } */}

              <input
                type="email"
                className="numberField"
                placeholder="Enter your email"
                id="email"
                name="email"
                onChange={onChange}
                value={email}
                autoComplete="on"
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
                autoComplete="on"
              />

              {/* {formik.touched.name && formik.errors.name ? <div className='errors'>{formik.errors.name}</div>:null } */}
              <input
                type="password"
                className="numberField"
                placeholder="Confirm Your Password"
                id="password2"
                name="password2"
                onChange={onChange}
                value={password2}
                autoComplete="on"
              />

              {/* {formik.touched.phone && formik.errors.phone? <div className='errors'>{formik.errors.phone}</div>:null}
               */}
              <button className="loginButton" type="submit">
                Create Account
              </button>
            </form>

            <div className="formBottom">
              {/* <div className="orLoginWith">
                <hr className="leftHr" />
                <h2>or login with</h2>
                <hr className="rightHr" />
              </div> */}
              <div>
                {/* <a href="https://www.google.com/" className="googleIcon">
                  <div className="iconDiv">
                    <i
                      class="fa fa-google"
                      style={{ fontSize: "19px", color: "red" }}
                    ></i>
                  </div>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

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
//   <input
//     type="Number"
//     className="numberField"
//     placeholder="Phone Number"
//     id="phone"
//     name="phone"
//     onChange={formik.handleChange}
//     onBlur={formik.handleBlur}
//     value={formik.values.phone}
//   />
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

// return (
//     <>

//       <section className='form'>
//         <form onSubmit={onSubmit}>
//           <div className='form-group'>
//             <input
//               type='text'
//               className='form-control'
//               id='name'
//               name='name'
//               value={name}
//               placeholder='Enter your name'
//               onChange={onChange}
//               autocomplete="on"
//             />
//           </div>
//           <div className='form-group'>
//             <input
//               type='email'
//               className='form-control'
//               id='email'
//               name='email'
//               value={email}
//               placeholder='Enter your email'
//               onChange={onChange}
//               autocomplete="on"
//             />
//           </div>
//           <div className='form-group'>
//             <input
//               type='password'
//               className='form-control'
//               id='password'
//               name='password'
//               value={password}
//               placeholder='Enter password'
//               onChange={onChange}
//               autocomplete="on"
//             />
//           </div>
//           <div className='form-group'>
//             <input
//               type='password'
//               className='form-control'
//               id='password2'
//               name='password2'
//               value={password2}
//               placeholder='Confirm password'
//               onChange={onChange}
//               autocomplete="on"
//             />
//           </div>
//           <div className='form-group'>
//             <button type='submit' className='btn btn-block'>
//               Submit
//             </button>
//           </div>
//         </form>
//       </section>
//     </>
//   )
