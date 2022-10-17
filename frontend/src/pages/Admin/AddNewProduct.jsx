import React from "react";
import { useState } from "react";
import MainContainer from "../../components/Admin/MainContainer";
import SideNavbar from "../../components/Admin/SideNavbar";
import "./Admin.css";

const AddNewProduct = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [image, setimage] = useState("");
  const [desc, setdesc] = useState("");

  const submitForm = (e) => {
   e.preventDefault();
   const product={
    name,price,image,category,desc
   }
   console.log(product)
  };

  return (
    <>
      <SideNavbar />
      <MainContainer>
        <h1 className="DashboardHeading ">Add New Product</h1>
        <div className="formContainer">
          <div className="addNewProductForm">
            {/* Form For Adding New Products */}

            <form onSubmit={submitForm}>
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
                value={image}
                onChange={e=>setimage(e.target.value)}
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