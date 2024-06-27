
import '../styles/about-page.css'


import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faFacebook,faLinkedin,faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWrench,faCompassDrafting,faScrewdriverWrench,faGear } from '@fortawesome/free-solid-svg-icons'


import { PiEngineFill } from "react-icons/pi";
import { BiSolidCarWash } from "react-icons/bi";

import Navbar from '../Components/Navbar'
import PageHeader from "../Components/PageHeader"
import FunFacts from "../Components/Sections/FunFacts"
import Testimonial from '../Components/Sections/Testimonial';


import Footer from '../Components/Footer/Footer'
const About = () => {


  const mechanics = [
    {
      name: "David Brandon",
      designation: "Chief Mechanics",
      img: "/Images/Mechanics/1.jpg",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://www.twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Sarah Smith",
      designation: "Chief Mechanics",
      img: "/Images/Mechanics/2.jpg",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://www.twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Helen Mirren",
      designation: "Consultant",
      img: "/Images/Mechanics/3.jpg",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://www.twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Hazel Grace",
      designation: "Consultant",
      img: "/Images/Mechanics/4.jpg",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://www.twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Jackson Miller",
      designation: "Assistant",
      img: "/Images/Mechanics/5.jpg",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://www.twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Garrison Hall",
      designation: "Consultant",
      img: "/Images/Mechanics/6.jpg",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://www.twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },
    {
      name: "Oakland Miller",
      designation: "Consultant",
      img: "/Images/Mechanics/7.jpg",
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://www.twitter.com/",
      linkedin: "https://www.linkedin.com/",
    },

  ]




  return (
    <>
        <Navbar selectedTab='about'/>
        <PageHeader heading="About Us"/>

        <section className="!pb-12">
          <div className="container-xl">
            <div>
              <img src="/Images/bg-11.jpg" alt="" />
            </div>
            <div className="pt-12 pb-12">
              <h1 className="item--title !text-[var(--text-color)]">About AutoFixers</h1>


              <p className="item--description">When you bring your vehicle to AutoFixers Car Mechanic Center, you can rest easy knowing that your vehicle is in professional hands. We take every possible step to ensure that your experience with us is pleasant and efficient.When you bring your vehicle to AutoFixers Car Mechanic Center, you can rest easy knowing that your vehicle is in professional hands. We take every possible step to ensure that your experience with us is pleasant and efficient.When you bring your vehicle to AutoFixers Car Mechanic Center, you can rest easy knowing that your vehicle is in professional hands.</p>

              <h5 className="text--one mt-2 mb-4">
              We understand that wellbeing is a multifaceted concept, which is why we offer holistic solutions that integrate physical, mental, and spiritual fitness.
              </h5>

              <p className="item--description">
              When you bring your vehicle to AutoFixers Car Mechanic Center, you can rest easy knowing that your vehicle is in professional hands. We take every possible step to ensure that your experience with us is pleasant and efficient.
              </p>
            </div>
          </div>

          <FunFacts />

          <section>
            <div className="container-xl">
              <div className="flex items-center justify-center flex-col pb-12">
                <h5 className="item--subtitle">Our Service List</h5>
                <h1 className="item--title">Why Choose AutoFixers</h1>
              </div>

              <div className="row items-center">
                <div className="col-sm-6 col-lg-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className='flex lg:justify-end'>
                        <span className='text-5xl text-[var(--text-color)]'>
                          <FontAwesomeIcon icon={faScrewdriverWrench} />
                        </span>
                      </div>
                      <h1 className="item--title-1">Fitness Checking facility</h1>
                      <p className="item--description">Take advantage of our spacious gym equipped with a wide range of gym fitness machines so you can achieve the maximum benefits from
                      </p>
                    </div>
                    <div className="col-md-12 !my-10">
                      <div className='flex lg:justify-end'>
                        <span className='text-5xl text-[var(--text-color)]'>
                          <PiEngineFill />
                        </span>
                      </div>
                      <h1 className="item--title-1">Expert Engine & Balancing</h1>
                      <p className="item--description">Take advantage of our spacious gym equipped with a wide range of gym fitness machines so you can achieve the maximum benefits from
                      </p>
                    </div>
                    <div className="col-md-12">
                      <div className='flex lg:justify-end'>
                        <span className='text-5xl text-[var(--text-color)]'>
                          <BiSolidCarWash />
                        </span>
                      </div>
                      <h1 className="item--title-1">Car Wash Facility</h1>
                      <p className="item--description">Take advantage of our spacious gym equipped with a wide range of gym fitness machines so you can achieve the maximum benefits from
                      </p>
                    </div>
                  </div>
                </div>
                <div className="max-lg:hidden col-lg-4">
                  <div>
                    <img src="/Images/car-blueprint.png"/>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className='flex lg:justify-end'>
                        <span className='text-5xl text-[var(--text-color)]'>
                          <FontAwesomeIcon icon={faGear} />
                        </span>
                      </div>
                      <h1 className="item--title-1">Vehicle Parts installation</h1>
                      <p className="item--description">Take advantage of our spacious gym equipped with a wide range of gym fitness machines so you can achieve the maximum benefits from
                      </p>
                    </div>
                    <div className="col-md-12 !my-10">
                      <div className='flex lg:justify-end'>
                        <span className='text-5xl text-[var(--text-color)]'>
                          <FontAwesomeIcon icon={faWrench} />
                        </span>
                      </div>
                      <h1 className="item--title-1">Modern Technology</h1>
                      <p className="item--description">Take advantage of our spacious gym equipped with a wide range of gym fitness machines so you can achieve the maximum benefits from
                      </p>
                    </div>
                    <div className="col-md-12">
                      <div className='flex lg:justify-end'>
                        <span className='text-5xl text-[var(--text-color)]'>
                          <FontAwesomeIcon icon={faCompassDrafting} />
                        </span>
                      </div>
                      <h1 className="item--title-1">Mechanical Engineering</h1>
                      <p className="item--description">Take advantage of our spacious gym equipped with a wide range of gym fitness machines so you can achieve the maximum benefits from
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* MARK: MEET Mechanics */}
          <div className='container-xl'>
            <div className='flex items-center justify-center'>
              <div className='item--title !text-[var(--text-color)]'>
                <img src="/Images/divider-sm.svg" alt="" />
                <h1>
                  Meet Our Expert Mechanics
                </h1>
              </div>
            </div>
            <div className='row'>
              {mechanics.map((mechanic, idx) => (
                <div key={idx} className='col-lg-3 py-4 mechanics'>
                  <div className='relative overflow-hidden'>
                    <img src={mechanic.img} alt="" />
                    <div className='mechanics-batch'>
                        <Link to={mechanic.facebook}>
                          <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                        <Link to={mechanic.instagram}> 
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                        <Link to={mechanic.linkedin}>
                          <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                        <Link to={mechanic.twitter}>
                          <FontAwesomeIcon icon={faTwitter} />
                        </Link>
                    </div>
                    <div className='mechanics-info'>
                      <h5 className='item--designation'>{mechanic.designation}</h5>
                      <h3 className='item--title-1'>{mechanic.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
                
            </div>
          </div>

          <Testimonial />
          
          <section  className='max-lg:hidden !pb-0'/>
        </section>
        <Footer />
    </>
  )
}

export default About
