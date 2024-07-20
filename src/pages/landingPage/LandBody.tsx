import { Link } from "react-router-dom";
import './styles/landBody.css';
import { CiClock2, CiHeart, CiSearch } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import right from '../../images/land/landHead/right.png';
import { useState } from "react";
import { categories } from "../../data/data";
import grilled from '../../images/land/landMain/grilled.jpg';

function LandBody() {
    const [category, setCategory] = useState(categories)

    return (
        <main>
            <section>
                <div className="categories">
                    <div className="categories_head">
                        <div className="cat_title">
                            <h3>Categories</h3>
                        </div>
                        <div className="cat_link">
                            <Link to=''>See all</Link>
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
                    <div className="categories_main">
                        {
                            category.map((recipe) => (
                                <div key={recipe.id} className="info_category">
                                    <div className="info_img">
                                        <img src={recipe.imgSrc} alt="" />
                                        <div className="info_reaction">
                                            <div className="react_like">
                                                <CiHeart />
                                                <span>10.1k</span>
                                            </div>
                                            <div className="react_comment">
                                                <FaRegCommentDots />
                                                <span>10.1k</span>
                                            </div>
                                            <div className="react_share">
                                                <IoPaperPlaneOutline />
                                                <span>10.1k</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info_details">
                                        <div className="info_title">
                                            <div className="info_name">
                                                <h4>{recipe.title}</h4>
                                            </div>
                                            <div className="info_time">
                                                <CiClock2 />
                                                <span>{recipe.time}</span>
                                            </div>
                                        </div>
                                        <div className="info_desc">
                                            <p>
                                                {recipe.description}
                                            </p>
                                        </div>
                                        <div className="info_user_details">
                                            <div className="info_user">
                                                <div className="info_user_img">
                                                    <img src={recipe.userImgSrc} alt="" />
                                                    <span></span>
                                                </div>
                                                <div className="info_user_title">
                                                    <h6>{recipe.userName}</h6>
                                                    <p>{recipe.userTitle}</p>
                                                </div>
                                            </div>
                                            <div className="info_user_rate">
                                                <p>{recipe.userRating}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section>
                <div className="latest">
                    <div className="latest_head">
                        <h3>
                            Latest recipes
                        </h3>
                        <p>
                            Explore 10k+ recipes specially handpicked for you
                        </p>
                    </div>
                    <div className="searchbar">
                        <form action="">
                            <div className="inp_ctrl">
                                <input type="text" name="" placeholder='Find recipes...' />
                            </div>
                            <button className="frm_btn">
                                <CiSearch className='srchIcon' />
                                <span>Search</span>
                            </button>
                        </form>
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
                    <div className="latest_main">
                        {
                            category.map((recipe) => (
                                <div key={recipe.id} className="info_category">
                                    <div className="info_img">
                                        <img src={recipe.imgSrc} alt="" />
                                        <div className="info_reaction">
                                            <div className="react_like">
                                                <CiHeart />
                                                <span>10.1k</span>
                                            </div>
                                            <div className="react_comment">
                                                <FaRegCommentDots />
                                                <span>10.1k</span>
                                            </div>
                                            <div className="react_share">
                                                <IoPaperPlaneOutline />
                                                <span>10.1k</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info_details">
                                        <div className="info_title">
                                            <div className="info_name">
                                                <h4>{recipe.title}</h4>
                                            </div>
                                            <div className="info_time">
                                                <CiClock2 />
                                                <span>{recipe.time}</span>
                                            </div>
                                        </div>
                                        <div className="info_desc">
                                            <p>
                                                {recipe.description}
                                            </p>
                                        </div>
                                        <div className="info_user_details">
                                            <div className="info_user">
                                                <div className="info_user_img">
                                                    <img src={recipe.userImgSrc} alt="" />
                                                    <span></span>
                                                </div>
                                                <div className="info_user_title">
                                                    <h6>{recipe.userName}</h6>
                                                    <p>{recipe.userTitle}</p>
                                                </div>
                                            </div>
                                            <div className="info_user_rate">
                                                <p>{recipe.userRating}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section>
                <div className="popular">
                    <div className="popular_head">
                        <h3>Popular</h3>
                    </div>
                    <div className="select_popular">
                        <div className="pop_list">
                            <span>Recipes</span>
                        </div>
                        <div className="pop_list">
                            <span>Reels</span>
                        </div>
                        <div className="pop_list">
                            <span>Blogs</span>
                        </div>
                    </div>
                    <div className="searchbar">
                        <form action="">
                            <div className="inp_ctrl">
                                <input type="text" name="" placeholder='Find recipes...' />
                            </div>
                            <button className="frm_btn">
                                <CiSearch className='srchIcon' />
                                <span>Search</span>
                            </button>
                        </form>
                    </div>
                    <div className="popular_main">
                        {
                            category.map((recipe) => (
                                <div key={recipe.id} className="info_category">
                                    <div className="info_img">
                                        <img src={recipe.imgSrc} alt="" />
                                        <div className="info_reaction">
                                            <div className="react_like">
                                                <CiHeart />
                                                <span>10.1k</span>
                                            </div>
                                            <div className="react_comment">
                                                <FaRegCommentDots />
                                                <span>10.1k</span>
                                            </div>
                                            <div className="react_share">
                                                <IoPaperPlaneOutline />
                                                <span>10.1k</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info_details">
                                        <div className="info_title">
                                            <div className="info_name">
                                                <h4>{recipe.title}</h4>
                                            </div>
                                            <div className="info_time">
                                                <CiClock2 />
                                                <span>{recipe.time}</span>
                                            </div>
                                        </div>
                                        <div className="info_desc">
                                            <p>
                                                {recipe.description}
                                            </p>
                                        </div>
                                        <div className="info_user_details">
                                            <div className="info_user">
                                                <div className="info_user_img">
                                                    <img src={recipe.userImgSrc} alt="" />
                                                    <span></span>
                                                </div>
                                                <div className="info_user_title">
                                                    <h6>{recipe.userName}</h6>
                                                    <p>{recipe.userTitle}</p>
                                                </div>
                                            </div>
                                            <div className="info_user_rate">
                                                <p>{recipe.userRating}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section>
                <div className="videos">
                    <div className="video_head">
                        <div className="video_title">
                            <h3>Videos</h3>
                        </div>
                        <div className="video_link">
                            <Link to=''>See all</Link>
                        </div>
                    </div>
                    <div className="video_reel_list">
                        <div className="video_reel">
                            <div className="video_play">
                                <img src={grilled} alt="" />
                                <div className="reel_container">
                                    <div className="video_reactions">
                                        <div className="reel_like">
                                            <CiHeart />
                                            <span>10.1k</span>
                                            <span>likes</span>
                                        </div>
                                        <div className="reel_comment">
                                            <FaRegCommentDots />
                                            <span>10.1k</span>
                                            <span>comments</span>
                                        </div>
                                        <div className="reel_share">
                                            <IoPaperPlaneOutline />
                                            <span>10.1k</span>
                                            <span>share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info_details">
                                <div className="info_title">
                                    <div className="info_name">
                                        <h4>{categories[1].title}</h4>
                                    </div>
                                    <div className="info_time">
                                        <CiClock2 />
                                        <span>{categories[1].time}</span>
                                    </div>
                                </div>
                                <div className="info_desc">
                                    <p>
                                        {categories[1].description}
                                    </p>
                                </div>
                                <div className="info_user_details">
                                    <div className="info_user">
                                        <div className="info_user_img">
                                            <img src={categories[1].userImgSrc} alt="" />
                                            <span></span>
                                        </div>
                                        <div className="info_user_title">
                                            <h6>{categories[1].userName}</h6>
                                            <p>{categories[1].userTitle}</p>
                                        </div>
                                    </div>
                                    <div className="info_user_rate">
                                        <p>{categories[1].userRating}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="video_reel">
                            <div className="video_play">
                                <img src={grilled} alt="" />
                                <div className="reel_container">
                                    <div className="video_reactions">
                                        <div className="reel_like">
                                            <CiHeart />
                                            <span>10.1k</span>
                                            <span>likes</span>
                                        </div>
                                        <div className="reel_comment">
                                            <FaRegCommentDots />
                                            <span>10.1k</span>
                                            <span>comments</span>
                                        </div>
                                        <div className="reel_share">
                                            <IoPaperPlaneOutline />
                                            <span>10.1k</span>
                                            <span>share</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info_details">
                                <div className="info_title">
                                    <div className="info_name">
                                        <h4>{categories[1].title}</h4>
                                    </div>
                                    <div className="info_time">
                                        <CiClock2 />
                                        <span>{categories[1].time}</span>
                                    </div>
                                </div>
                                <div className="info_desc">
                                    <p>
                                        {categories[1].description}
                                    </p>
                                </div>
                                <div className="info_user_details">
                                    <div className="info_user">
                                        <div className="info_user_img">
                                            <img src={categories[1].userImgSrc} alt="" />
                                            <span></span>
                                        </div>
                                        <div className="info_user_title">
                                            <h6>{categories[1].userName}</h6>
                                            <p>{categories[1].userTitle}</p>
                                        </div>
                                    </div>
                                    <div className="info_user_rate">
                                        <p>{categories[1].userRating}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="blogs">
                    <div className="blogs_head">
                        <div className="blogs_title">
                            <h3>Blogs</h3>
                        </div>
                        <div className="video_link">
                            <Link to=''>See all</Link>
                        </div>
                    </div>
                    <div className="blog_main">
                        {
                            category.map((recipe) => (
                                <div key={recipe.id} className="info_category">
                                    <div className="info_img">
                                        <img src={recipe.imgSrc} alt="" />
                                        <div className="info_reaction">
                                            <div className="react_like">
                                                <CiHeart />
                                                <span>10.1k</span>
                                            </div>
                                            <div className="react_comment">
                                                <FaRegCommentDots />
                                                <span>10.1k</span>
                                            </div>
                                            <div className="react_share">
                                                <IoPaperPlaneOutline />
                                                <span>10.1k</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info_details">
                                        <div className="info_title">
                                            <div className="info_name">
                                                <h4>{recipe.title}</h4>
                                            </div>
                                            <div className="info_time">
                                                <CiClock2 />
                                                <span>{recipe.time}</span>
                                            </div>
                                        </div>
                                        <div className="info_desc">
                                            <p>
                                                {recipe.description}
                                            </p>
                                        </div>
                                        <div className="info_user_details">
                                            <div className="info_user">
                                                <div className="info_user_img">
                                                    <img src={recipe.userImgSrc} alt="" />
                                                    <span></span>
                                                </div>
                                                <div className="info_user_title">
                                                    <h6>{recipe.userName}</h6>
                                                    <p>{recipe.userTitle}</p>
                                                </div>
                                            </div>
                                            <div className="info_user_rate">
                                                <p>{recipe.userRating}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section>
                <div className="about">
                    <div className="about_info">
                        <div className="about_head">
                            <h3>About us</h3>
                        </div>
                        <div className="about_detail">
                            <h3>
                                Bringing you to the world of Taste and Aromas
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur magnam omnis, porro beatae nobis repellendus. Harum, delectus fugit? Exercitationem beatae quasi aperiam earum ipsa obcaecati voluptatem nemo quibusdam, corrupti itaque, eligendi quo et. Deserunt architecto distinctio harum quae nostrum, similique id ipsa nulla saepe dignissimos at error debitis sapiente itaque vitae ea in non vel neque quo! Blanditiis illum esse consectetur quasi placeat illo ad. Cum amet non beatae quos, itaque, adipisci magnam praesentium quod molestias consequuntur qui fugiat quo sed eaque earum impedit explicabo quibusdam iure doloremque dolorum totam officiis veritatis voluptate perspiciatis. Tempora nam repellat obcaecati qui nesciunt cupiditate minima in, accusamus, sit molestias corporis nobis esse aliquam quisquam. Blanditiis necessitatibus hic autem eum vel. Et exercitationem dicta ratione architecto sequi, minus iusto autem asperiores placeat eius dignissimos provident in deleniti voluptatem repudiandae. Veritatis consequatur quidem perferendis velit aliquid vero error impedit illo sint perspiciatis voluptate sequi corporis harum, voluptatem dolorum esse delectus ratione fugit? Debitis temporibus fugiat distinctio. Possimus adipisci pariatur, perspiciatis soluta, iure fugit dolorum culpa, ullam doloribus rerum eveniet rem hic! Sint fugit nobis, doloribus odit consequatur, minus magni vel laboriosam fuga, obcaecati dolorum enim repudiandae dicta quo sunt adipisci nisi sapiente distinctio rem! Non.
                            </p>
                        </div>
                        <div className="rect1"></div>
                        <div className="rect2"></div>
                        <img src={right} alt="" className="img_rt" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default LandBody