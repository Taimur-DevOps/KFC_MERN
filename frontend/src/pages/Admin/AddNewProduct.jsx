import axios from "axios";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";
import MainContainer from "../../components/Admin/MainContainer";
import SideNavbar from "../../components/Admin/SideNavbar";
import "./Admin.css";

const AddNewProduct = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [desc, setdesc] = useState("");

  const addProduct = (e) => {
   e.preventDefault();
   const product={
    name,price,imageUrl,category,desc
   }
   console.log(product)

   axios.post("http://localhost:8080/api/products/add",{product})
   .then(() => {
    setname('')
    setprice('');
    setcategory('');
    setimageUrl('');
    setdesc('');

    toast.success("Product Added ");

  }).catch((error)=>alert(error.message));
   

  };

  return (
    <>
      <SideNavbar />
      <MainContainer>
        <h1 className="DashboardHeading ">Add New Product</h1>
        <div className="formContainer">
          <div className="addNewProductForm">
            {/* Form For Adding New Products */}

            <form onSubmit={addProduct}>
              <ul className="form-style-1">
                <li>
                  <label>
                    Product Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={e=>setname(e.target.value)}
                    id="name"
                    className="field-divided"
                    placeholder="Enter Product Name"
                  />{" "}
                </li>

                <li>
                  <label>
                    Price <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    value={price}
                    onChange={e=>setprice(e.target.value)}
                    id="price"
                    className="field-long"
                    placeholder="Enter Product Price"
                  />
                </li>

                {/* <li>
                  <label>Category</label>
                  <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={e=>setcategory(e.target.value)}
                    className="field-select"
                  >
                    <option value="AlaCarte">AlaCarte</option>
                    <option value="Sharing">Sharing</option>
                    <option value="EverydayValue ">EverydayValue</option>
                    <option value="Signature">Signature </option>
                    <option value="Midnight Deals ">Midnight Deals</option>
                    <option value="Snacks and Beverages ">
                      Snacks and Beverages
                    </option>
                  </select>
                </li> */}
                  <li>
                  <label>
                    Category <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    value={category}
                    onChange={e=>setcategory(e.target.value)}
                    className="field-select"
                    placeholder="Add Your Category"
                  />
                </li>


                {/* <li>
                  <label>
                    Upload Image <span className="required">*</span>
                  </label>
                  <input
                    type="file"
                    name="image"
                    value={image}
                    onChange={e=>setimage(e.target.value)}
                    id="image"
                    className="field-long uploadBtn"
                  />
                </li> */}
                 <li>
                  <label>
                    Upload Image <span className="required">*</span>
                  </label>
                  <input
                type="text"
                name="image"
                value={imageUrl}
                onChange={e=>setimageUrl(e.target.value)}
                id="image"
                className="field-long uploadBtn"
                placeholder="Add Image Url"
                  />
                </li>



                <li>
                  <label>
                    Description <span className="required">*</span>
                  </label>
                  <textarea
                    name="desc"
                    id="desc"
                    value={desc}
                    onChange={e=>setdesc(e.target.value)}
                    className="field-long field-textarea"
                    placeholder="Product Description "
                  ></textarea>
                </li>


                <li>
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
                 <input type="submit" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default AddNewProduct;



// ab hum action function create karengy
// reducer function store mai
// aur backend py route create karna hai