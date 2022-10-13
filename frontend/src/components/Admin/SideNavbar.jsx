import logo from "./logo.png"
import { Link } from "react-router-dom";
import React from 'react'
import "../../pages/Admin/Admin.css"

const SideNavbar = () => {
    return (
        <div>

            <div className="side-nav" style={{boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px"}} data-side-nav="data-side-nav">
               <Link to="/"> <img src={logo} className="logoImg" alt="logo" /></Link>

                <ul className="side-nav__list">
                    <li className="side-nav__item"><Link className="side-nav__link " to="/admin/dashboard"><i className="fa fa-th-large icon" aria-hidden="true"></i>Dashboard</Link></li>
                    <li className="side-nav__item"><Link className="side-nav__link" to="/admin/users"> <i className="fa fa-users icon" aria-hidden="true"></i> Users</Link></li>
                    <li className="side-nav__item"><Link className="side-nav__link" to="/admin/orders"> <i className="fa fa-list-alt icon" aria-hidden="true"></i> Orders</Link></li>
                    <li className="side-nav__item"><Link className="side-nav__link" to="/admin/products"><i className="fa fa-cutlery icon" aria-hidden="true"></i> Products</Link></li>
                    <li className="side-nav__item"><Link className="side-nav__link" to="/admin/addProducts"><i className='fas fa-hamburger icon'></i> Add New Product</Link></li>
                </ul>
            </div>


        </div>
    )
}

export default SideNavbar

