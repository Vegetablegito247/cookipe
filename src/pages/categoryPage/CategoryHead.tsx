import React from 'react'
import { Link } from 'react-router-dom';
import './style/categoryHead.css'

function CategoryHead() {
    return (
        <div className="category_page">
            <div className="category_header">
                <div className="category_head">
                    <h3>Categories</h3>
                </div>
                <div className="category_search">
                    <div className="searchbar">
                        <form action="">
                            <div className="inp_ctrl">
                                <input type="search" name="" id="" />
                            </div>
                            <button className="frm_btn">
                                <i></i>
                                <span>Search</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="categories_list">
                <ul>
                    <li>
                        <Link to=''>Latest recipe</Link>
                    </li>
                    <li>
                        <Link to=''>Popular recipe</Link>
                    </li>
                    <li>
                        <Link to=''>Video reels</Link>
                    </li>
                    <li>
                        <Link to=''>Vegetarian recipe</Link>
                    </li>
                    <li>
                        <Link to=''>Pasta noodles</Link>
                    </li>
                    <li>
                        <Link to=''>20-mins recipe</Link>
                    </li>
                    <li>
                        <Link to=''>Meat & Poultry</Link>
                    </li>
                    <li>
                        <Link to=''>Sea food</Link>
                    </li>
                    <li>
                        <Link to=''>Pasta noodles</Link>
                    </li>
                    <li>
                        <Link to=''>20-mins recipe</Link>
                    </li>
                    <li>
                        <Link to=''>Meat & Poultry</Link>
                    </li>
                    <li>
                        <Link to=''>Sea food</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CategoryHead