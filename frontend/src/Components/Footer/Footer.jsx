import '../../styles/footer.css';

import { Link, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faPhoneVolume,faToolbox} from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faLinkedin,faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



import { CgQuote } from "react-icons/cg";

const Footer = () => {

    const navigate = useNavigate();
    const handleService = (id,name) =>{
        const selectedService = {
            id: id,
            name: name
        }
        localStorage.setItem("selected-service",JSON.stringify(selectedService));
        navigate(`/service detail/${selectedService.id}?service_name=${selectedService.name}`)
    }

  return (
    <>
        <section className='!pb-0 !bg-[var(--color-black)]'>
            <div className='container-xl'>
                <div className='footer-inner'>
                    <div className='footer-top'>
                        <div className='row items-center'>
                            <div className='col-md-7 col-lg-5 left-box'>
                                    
                            <h4 className='item--title flex items-center'>
                                <span>
                                    <CgQuote size={55}/>  
                                </span>
                                IF ANY CAR RELATED ISSUES ARE BOTHERING
                            </h4>
                            <h1 className='item--title'>GIVE A CALL TO AUTOFIXERS</h1>
                            </div>
                            <div className='col-md-5 col-lg-7 right-box'>
                                <div className='flex items-center gap-10 max-lg:flex-wrap'>
                                    <div className='hidden lg:block mt-[-160px] w-[245px]'>
                                        <img src="/Images/Footer-img.png" alt="" />
                                    </div>
                                    <div className='flex items-center gap-4 pb-4'>
                                        <h3 className='phone-icon'>
                                            <FontAwesomeIcon icon={faPhoneVolume} />
                                        </h3>
                                        <div>
                                            <p className='item--description'>Need Help</p>
                                            <h3 className='item--title '>+91 9990387276</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='footer-bottom'>
                        <div className='row'>
                            <div className='col-lg-4 col-xl-3'>
                            <div className="text-wrapper">
                                <div className="pb-10">
                                    <h1 className="item--title ">
                                        {/* <FontAwesomeIcon icon={faToolbox} /> */}
                                        <span className="ml-3">
                                            Auto
                                            <span className="text-[var(--color-red)]">
                                            Fixers
                                            </span>
                                        </span>
                                    </h1>
                                </div>

                                <div className="pb-10">
                                    <h5 className="item--description">Call Us Anytime</h5>
                                    <h1 className="text-xl text-white hover:text-[var(--color-red)]">+91 9990387276</h1>
                                </div>
                                <div className="pb-10">
                                    <h5 className="item--description">VISIT OUR WORKSHOP</h5>
                                    <h1 className="text-xl text-white hover:text-[var(--color-red)]">17110 116th Ave SE Unit Arenton, WA 98058-5055</h1>
                                </div>
                            </div>
                            </div>
                            <div className='col-lg-7 col-xl-8 lg:ml-[8%] xl:[8.33333333%]'>
                                <div className='row footer-widget'>
                                    <div className='col-md-6  max-md:mb-8'>
                                        <h1 className='widget-title'>Services</h1>
                                        <ul className='footer-nav'>
                                            <li >
                                                <h3 onClick={() => handleService("S06","Detailing Services")}>
                                                    Car Detailing
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 onClick={() => handleService("S06","Windshield & Light")}>
                                                    Glass Replacement
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 onClick={() => handleService("S05","Denting & Painting")}>
                                                    Denting & Painting 
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 onClick={() => handleService("S01","Periodic Services")}>
                                                    Car Repairing
                                                </h3>
                                            </li>
                                            <li>
                                                <h3 onClick={() => handleService("S10","Suspension & Fitments")}>
                                                    Alignment Fixing
                                                </h3>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='col-md-6  max-md:mb-8'>
                                        <h1 className='widget-title'>Useful Links</h1>
                                        <ul className='footer-nav'>
                                            <li>
                                                <Link to="/about">About AutoFixers</Link>
                                            </li>
                                            <li>
                                                <Link to="/services">Services</Link>
                                            </li>
                                            <li>
                                                <Link to={{}}>Opening Hours</Link>
                                            </li>
                                            <li>
                                                <Link to={{}}>Expert Mechanics</Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>     
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid border-t'>
                <div className='container'>
                    <div className='row justify-between items-center md:p-8 lg:p-12'>
                        <div className='col-md-5 max-md:py-6'>   
                            <h4 className='item--subtitle !text-[var(--color-white)]'>© Copyright 2017 AutoFixers. All rights reserved</h4>
                        </div>
                        <div className='col-md-5 bottom-social-media max-md:pb-4'>
                            <ul className='flex gap-4 md:justify-end'>
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
        </section>
    </>
  )
}

export default Footer
