import React from 'react'
import MainContainer from "../../components/Admin/MainContainer";
import SideNavbar from "../../components/Admin/SideNavbar";
import "./Admin.css";

const AddNewProduct = () => {
  return (
    <>
      <SideNavbar />
      <MainContainer>
        <h1 className="DashboardHeading ">Add New Product</h1>
        <div>
          <div className='addNewProductForm'>
            <form>
              <ul class="form-style-1">
                <li><label>Product Name <span className="required">*</span></label><input type="text" name="name" id='name' className="field-divided" placeholder="Enter Product Name" /> </li>
                <li>
                  <label>Price <span className="required">*</span></label>
                  <input type="number" name="price" id="price" className="field-long" />
                </li>



                <li>
                  <label>Category</label>
                  <select name="category"  id="category" className="field-select">
                    <option value="AlaCarte">AlaCarte</option>
                    <option value="Sharing">Sharing</option>
                    <option value="EverydayValue ">EverydayValue</option>
                    <option value="Signature">Signature </option>
                    <option value="Midnight Deals ">Midnight Deals</option>
                    <option value="Snacks and Beverages ">Snacks and Beverages</option>
                  </select>
                </li>

                <li>
                  <label>Upload Image <span className="required">*</span></label>
                  <input type="file" name="image" id="image" className="field-long uploadBtn" />
                </li>
                <li>
                  <label>Description <span className="required">*</span></label>
                  <textarea name="desc" id="desc" className="field-long field-textarea"></textarea>
                </li>
                <li>
                  <input type="submit" value="Submit" />
                </li>
              </ul>
            </form>
          </div>
        </div>

      </MainContainer>
    </>
  )
}

export default AddNewProduct