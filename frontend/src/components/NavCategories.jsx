import React from 'react'
import { Link } from 'react-router-dom'
import "./NavCategories.css"

const NavCategories = () => {
    return (
        <div>
            <div className='navbar'>
                <Link to="/Categories/everydayValue">  <button>Everyday Value </button> </Link>
                <Link to="/Categories/Alacarte">   <button>Ala Carte & Combos</button> </Link>
                <Link to="/Categories/Signature">   <button>Signature Boxes</button> </Link>
                <Link to="/Categories/Sharing">   <button>Sharing</button> </Link>
                <Link to="/Categories/SnacksBeverages">   <button> Snacks & Beverages</button> </Link>
                <Link to="/Categories/Midnight">   <button>Midnight</button> </Link>
            </div>
        </div>
    )
}

export default NavCategories