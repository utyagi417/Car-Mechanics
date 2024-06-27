import { SiGooglecloudspanner } from "react-icons/si";
import { PiEngineFill } from "react-icons/pi";
import { IoCarSportSharp } from "react-icons/io5";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench,faCompassDrafting } from '@fortawesome/free-solid-svg-icons'

const WhyChooseUs = () => {
  return (
    <>
        <section>
            <div className="container-fluid !p-0">
                <div className="text-wrapper">
                    <h5 className="item--subtitle text-center">
                        Why Choose Us
                    </h5>
                    <h1 className="item--title text-center !text-[var(--text-color)]"> 
                        Why Choose AutoFixers
                    </h1>
                </div>
                <div className="auto--divider !mt-5 !mx-auto !mb-[35px] before:!right-[calc(100% + 6px)] after:left-[calc(100% + 6px)]" />
                <div className="row" style={{"--bs-gutter-x":"0rem"}}>
                    <div className="col-xxl-7 col-xl-5">
                        <div className="item-image h-full min-h-[500px]" style={{backgroundImage:"url('/Images/bg-5.jpg')"}} />
                    </div>
                    <div className="col-xxl-5 col-xl-7 flex flex-col">
                        <div className="row" style={{"--bs-gutter-x":"0rem"}}>
                            <div className="col">
                                <div className="text-wrapper p-10  bg-[var(--color-red)]">
                                    <div className="text-holder">
                                        <h5 className="item--subtitle !text-7xl pb-5 !text-[var(--color-white)]">
                                            <IoCarSportSharp />
                                        </h5>
                                        <h1 className="item--title my-15 !text-3xl !text-[var(--text-color)] ">Car Protection & Fitness Checking facility</h1>
                                        <p className="item--description">
                                            When you bring your vehicle to AutoFixers Car Mechanic Center, you can rest easy knowing that your vehicle is in professional hands. We take every possible step.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div  className="col">
                                <div className="text-wrapper p-10">
                                    <div className="text-holder">
                                        <h5 className="item--subtitle !text-7xl pb-5">
                                            <FontAwesomeIcon icon={faWrench} /> 
                                        </h5>
                                        <h1 className="item--title backdrop:my-15 !text-3xl !text-[var(--text-color)] ">Fitness Checking facility</h1>
                                        <p className="item--description">
                                            When you bring your vehicle to AutoFixers Car Mechanic Center, you can rest easy knowing that your vehicle is in professional hands. We take every possible step.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{"--bs-gutter-x":"0rem"}}>
                            <div  className="col">
                                <div className="text-wrapper p-10">
                                    <div className="text-holder">
                                        <h5 className="item--subtitle !text-7xl pb-5">
                                        <PiEngineFill />
                                        </h5>
                                        <h1 className="item--title my-15 !text-3xl !text-[var(--text-color)]">Expert Engine & Balancing</h1>
                                        <p className="item--description">
                                            When you bring your vehicle to AutoFixers Car Mechanic Center, you can rest easy knowing that your vehicle is in professional hands. We take every possible step.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div  className="col">
                                <div className="text-wrapper p-10 bg-[var(--color-red)]">
                                    <div className="text-holder">
                                        <h5 className="item--subtitle !text-[var(--color-white)] !text-7xl pb-5">
                                            {/* <SiGooglecloudspanner /> */}
                                            <FontAwesomeIcon icon={faCompassDrafting} />
                                        </h5>
                                        <h1 className="item--title my-15 !text-3xl !text-[var(--text-color)]">Modern Technology</h1>
                                        <p className="item--description">
                                            When you bring your vehicle to AutoFixers Car Mechanic Center, you can rest easy knowing that your vehicle is in professional hands. We take every possible step.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default WhyChooseUs
