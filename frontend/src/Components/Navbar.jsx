import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";

import { FaUser } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faLinkedin,faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping,faToolbox,faXmark,faBars } from '@fortawesome/free-solid-svg-icons'

import Preloader from "./Preloader";
import ButtonThree from "./Buttons/ButtonThree";

import useStore from "../Zustand/Store";
import { useAuthContext } from "../Context/AuthContext";

const Navbar = ({selectedTab = "home"}) => {

    const navigate = useNavigate();
    const {authUser} = useAuthContext();

    const {cart} = useStore();
    const subTotal = cart?.reduce((acc, item) => acc + item.price, 0);

    useEffect(() => {
        document.querySelectorAll(".menu-link").forEach((tab) => tab.classList.remove("active"));
        document.querySelector(`.menu-link[data-target="${selectedTab}"]`)?.classList.add('active');
        document.querySelectorAll(".mob-menu-link").forEach((tab) => tab.classList.remove("active"));
        document.querySelector(`.mob-menu-link[data-target="${selectedTab}"]`)?.classList.add('active');
    },[])

    useEffect(() => {
        const checkMode = () => {
            const mode = JSON.parse(localStorage.getItem("mode"));
            if(mode !== null){
              document.documentElement.style.setProperty("--bg-color",mode.bg);
              document.documentElement.style.setProperty("--text-color",mode.text);
              document.documentElement.style.setProperty("--bg-image-1",mode.bg_1);
              document.documentElement.style.setProperty("--bg-image-2",mode.bg_2);
            }
            if(mode !== null && mode.mode === "dark"){
              // Container 
              document.getElementById("mode-btn").classList.add("night-mode-btn-container");
        
              //Outer Circle
              document.getElementById("outer-circle").classList.add("night-mode-outer-circle");
        
              // Setting up for Night Mode (Circle)
              document.getElementById("mode-circle").classList.add("night-mode-inner-circle","rotate-circle");
            }
        }
        checkMode();
    },[])

    const openAsideContent = () => {
        document.getElementById("aside-content").classList.add("aside-open");
    }
    const handleCloseAside = (e) => {
        e.stopPropagation();
        document.getElementById("aside-content").classList.remove("aside-open");
    }

    const openMobNav = () => {
        document.getElementById("menu-content").classList.toggle("menu-open");
    }
    const closeMobNav = (e) => {
        e.stopPropagation();
        document.getElementById("menu-content").classList.remove("menu-open");
    }

    const handleCartClick = () => {
        document.getElementById("cart-menu").classList.toggle("hide-cart-menu");
    }

    const handleLogout = () => {
        fetch("/api/auth/logout")
        .then((response) => {
            return response.json();
        }).then(data => {
            sessionStorage.removeItem("SecureAuth_v2_srr8i9rto34zx_AuthUser_Mechanics");
            window.location.reload();
            toast.success(data.message);
        }).catch((error) => {
            toast.error("Something went wrong!!");
            console.log(error.message)
        })
    }

  return (
    <>
        <Preloader />
        <header className="header">
            <div className="header-top">
                <div className="container-fluid px-4">
                    <div className="py-1 hidden xl:flex justify-between items-center flex-wrap">
                        {/* LEFT BOX */}
                        <div className="left-box">
                            <ul className="info-list">
                                <li><a href="mailto:autofixers.services@gmail.com">autofixers.services@gmail.com</a></li>
                                <li><a href="#">8:00AM - 9:00PM</a></li>
                                <li><a href="https://www.google.com/maps/place/A40%2F1,+Sahibabad+Industrial+Area+Site+4,+Sahibabad,+Ghaziabad,+Uttar+Pradesh+201010/@28.6607037,77.3427314,17z/data=!4m6!3m5!1s0x390cfae7da4864f3:0xd361afc2c1f8f4af!8m2!3d28.6603398!4d77.3434796!16s%2Fg%2F11bw3_5t9h?entry=ttu">
                                A40/1, Sahibabad Industrial Area Site 4, Ghaziabad, UP 201010    
                                </a></li>
                            </ul>
                        </div>
                         {/* RIGHT BOX  */}
                        <div className="right-box">
                            <ul className="social-box">
                                <li>
                                    <Link to="https://www.facebook.com/autofixers.services">
                                    <FontAwesomeIcon icon={faFacebook} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/autofixers.services?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                        <FontAwesomeIcon icon={faInstagram} />    
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://twitter.com/">
                                        <FontAwesomeIcon icon={faTwitter} />    
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/">
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="w-full ps-4 h-full relative">
                    <div className="flex justify-between items-center h-full">
                        <div className="left-part">
                            <h1><Link to="/">AutoFixers</Link></h1>
                        </div>
                        <div className="right-part xl:ps-[30px]">
                            <div className="main-nav hidden xl:flex items-center flex-1 flex-nowrap">
                                <ul className="main-menu"> 
                                    <li className="menu-link" data-target="home">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="menu-link" data-target="services">
                                        <Link to="/services">Service</Link>
                                    </li>
                                    <li className="menu-link" data-target="about">
                                        <Link to="/about">About</Link>
                                    </li>
                                    <li className={`menu-link ${authUser === null ? "mr-[30px]" : ""}`} data-target="contact">
                                        <Link to="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            {authUser !== null && (<div className="cart ml-[30px] xl:ml-[50px]"
                                onClick={handleCartClick}
                            >
                                <FontAwesomeIcon icon={faCartShopping} />
                                <div id="cart-menu" className="cart-menu hide-cart-menu">
                                    {cart.length === 0 ? 
                                        <div className="h-full px-4 py-8 flex flex-col items-center justify-center">
                                            <h1>Nothing Here</h1>
                                            <h2>Add Services to Cart</h2>
                                            <ButtonThree firstText="Check Services" 
                                                onClick={() => navigate('/services') } 
                                            />
                                        </div>
                                        :
                                        <div className="px-4 py-6 flex flex-col">
                                            <h1>Included Services:</h1>
                                            <ul className="w-full ">
                                                {cart.map((item,i) => (
                                                    <div key={i} className="py-4 flex flex-wrap items-center justify-between border-b">
                                                        <li className="w-1/2 font-Montserrat font-light">
                                                            {item.name}
                                                        </li>
                                                        <li className="w-2/5 font-Montserrat font-light">
                                                         &#8377;{item.price}
                                                        </li>
                                                    </div>
                                                ))}
                                                 <div className="pt-4 flex flex-wrap items-center justify-between">
                                                    <li className="w-1/2 font-semibold">
                                                        Sub Total
                                                    </li>
                                                    <li className="w-2/5">
                                                        &#8377;{subTotal}
                                                    </li>
                                                </div>
                                            </ul>
                                            <ButtonThree firstText="Proceed To Checkout" 
                                                onClick={() => navigate('/cart')}
                                            />
                                        </div>    
                                    }
                                </div>
                            </div>)}
                            <div className="user-box hidden md:block"> 
                                <div className="flex items-center h-full gap-2">
                                    {authUser === null ? (
                                        <li className="menu-link list-none text-xl 
                                            hover:text-[var(--color-one)]" 
                                            data-target="login"
                                        >
                                            <Link to="/login">Login</Link>
                                        </li>
                                    ):(
                                        <>
                                            <div className="user-icon" onClick={handleLogout}>
                                                <FaUser size={25}/>
                                            </div>
                                            <div className="pl-2 select-none">
                                                <h1>{authUser.username}</h1>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            {/* MARK: Aside menu */}
                            <div className="aside-menu hidden xl:flex items-center"
                                onClick={openAsideContent}
                                >
                                <div className="inner-aside">
                                    <span>
                                        <FontAwesomeIcon icon={faBars} />
                                    </span>
                                </div>
                                <div id="aside-content" className="aside-content">
                                    <div className="relative">
                                        <div className="close-btn" onClick={(e) => handleCloseAside(e)}>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>
                                        <div className="py-20 px-12">
                                            <div className="text-wrapper">
                                                <div className="pb-10">
                                                    <h1 className="item--title !text-4xl">
                                                        <FontAwesomeIcon icon={faToolbox} />
                                                        <span className="ml-3">
                                                            AUTO
                                                            <span className="text-[var(--color-red)]">
                                                            FIXERS
                                                            </span>
                                                        </span>
                                                    </h1>
                                                    <p className="item--description">
                                                        When you bring your vehicle to AutoFixers Car Mechanic Center, you can rest easy knowing that your vehicle is in professional hands.
                                                    </p>
                                                </div>

                                                <div className="pb-10">
                                                    <h5 className="item--description">Call Us Anytime</h5>
                                                    <h1 className="text-xl hover:text-[var(--color-red)]">+91 9990387276</h1>
                                                </div>

                                                <div className="pb-10">
                                                    <h5 className="item--description">Send Us Email</h5>
                                                    <h1 className="text-xl hover:text-[var(--color-red)]">autofixers.services@gmail.com</h1>
                                                </div>
                                                <div className="pb-10">
                                                    <h5 className="item--description">VISIT OUR WORKSHOP</h5>
                                                    <h1 className="text-xl hover:text-[var(--color-red)]">A40/1, Sahibabad Industrial Area Site 4, Ghaziabad, UP 201010</h1>
                                                </div>
                                            </div>
                                            <div className="right-box pt-8">
                                                <ul className="social-box">
                                                    <li>
                                                        <Link to="https://www.facebook.com/autofixers.services">
                                                        <FontAwesomeIcon icon={faFacebook} />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="https://www.instagram.com/autofixers.services?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                                            <FontAwesomeIcon icon={faInstagram} />    
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="https://twitter.com/">
                                                            <FontAwesomeIcon icon={faTwitter} />    
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="https://www.linkedin.com/">
                                                            <FontAwesomeIcon icon={faLinkedin} />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MARK: Mobile Nav */}
                            <div className="mob-nav flex xl:hidden items-center"
                                onClick={openMobNav}
                                >
                                <div className="inner">
                                    <span>
                                        <FontAwesomeIcon icon={faBars} />
                                    </span>
                                </div>
                                <div id="menu-content" className="menu-content">
                                    <div className="relative">
                                        <div className="close-btn" onClick={(e) => closeMobNav(e)}>
                                            <FontAwesomeIcon icon={faXmark} />
                                        </div>
                                        <div className="py-20">
                                            <div className="text-wrapper">
                                                <div className="pb-10">
                                                    <h1 className="item--title !text-4xl text-center whitespace-nowrap">
                                                        <FontAwesomeIcon icon={faToolbox} />
                                                        <span className="ml-3">
                                                            FIX
                                                            <span className="text-[var(--color-red)]">
                                                            TON
                                                            </span>
                                                        </span>
                                                    </h1>
                                                </div>
                                                <div>
                                                <ul className="mob-menu"> 
                                                    {authUser === null ? (
                                                        <li className="mob-menu-link" data-target="login">
                                                            <Link to="/login">Login</Link>
                                                        </li>
                                                    ):(
                                                        <li className="mob-menu-link select-none">
                                                            <div className=" flex items-center gap-10 px-[15px] py-[20px]">
                                                                <span>
                                                                    <FaUser size={25} />
                                                                </span>
                                                                {authUser.username}
                                                            </div>
                                                        </li>
                                                    )}
                                                    <li className="mob-menu-link active" data-target="home">
                                                        <Link to="/">Home</Link>
                                                    </li>
                                                    <li className="mob-menu-link" data-target="services">
                                                        <Link to="/services">Service</Link>
                                                    </li>
                                                    <li className="mob-menu-link" data-target="about">
                                                        <Link to="/about">About</Link>
                                                    </li>
                                                    <li className="mob-menu-link" data-target="contact">
                                                        <Link to="/contact">Contact</Link>
                                                    </li>
                                                    {authUser !== null && (
                                                        <li className="mob-menu-link" data-target="logout">
                                                            <Link>Logout</Link>
                                                        </li>
                                                    )}
                                                </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    </>
  )
}

export default Navbar