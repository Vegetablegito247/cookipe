import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import './footer.css';
import right from '../../images/land/landHead/right.png';

function Footer() {
  return (
    <footer>
      <div className="foot_main">
        <div className="foot_logo">
          <i></i>
          <h3>Cookipé</h3>
        </div>
        <div className="foot_list">
          <div className="foot_list_head">
            <h3>Information</h3>
          </div>
          <ul className="foot_links">
            <li>
              <Link to=''>Latest recipes</Link>
            </li>
            <li>
              <Link to=''>Popular</Link>
            </li>
            <li>
              <Link to=''>Video</Link>
            </li>
            <li>
              <Link to=''>Blogs</Link>
            </li>
            <li>
              <Link to=''>About us</Link>
            </li>
          </ul>
        </div>
        <div className="foot_form">
          <div className="foot_form_head">
            <h3>Subscribe to our newsletter</h3>
          </div>
          <form action="" className="form">
            <div className="inp_ctrl">
              <input type="email" placeholder="Email address" />
              <button id="subscribe"><FaArrowRightLong />
              </button>
            </div>
          </form>
          <div className="foot_form_bottom">
            <p>
              Subscribe to our newsletter to stay updates with most recent information.
            </p>
          </div>
        </div>
      </div>
      <div className="foot_bottom">
        <div className="foot_copyright">
          <span>&copy; Copyright @2024</span>
        </div>
        <div className="foot_tandp">
          <ul>
            <li>
              <Link to=''>Terms</Link>
            </li>
            <li>
              <Link to=''>Privacy</Link>
            </li>
            <li>
              <Link to=''>Cookies</Link>
            </li>
          </ul>
        </div>
        <div className="foot_socials">
          <ul>
            <li>
              <Link to=''>
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link to=''>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to=''>
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <img src={right} alt="" className="img_rit" />
    </footer>
  )
}

export default Footer