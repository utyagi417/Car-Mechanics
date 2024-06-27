import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight,faAngleRight } from '@fortawesome/free-solid-svg-icons';


import { CgQuote } from "react-icons/cg";
import ButtonThree from '../Buttons/ButtonThree';


import { useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import innerService from '../../data/InnerServices.json';


const Packages = () => {

    const navigate = useNavigate();
    const vehicle = useSelector(state => state.vehicle)
    const modelId = vehicle.model?.model_no;
    const packageService = innerService[0].service_included

    const basicPackPrice= packageService[0].vehicle_specific[modelId]?.price || 12000; 
    const comprehensivePackPrice= packageService[2].vehicle_specific[modelId]?.price || 20000; 

    const basicPack = [
        "Ceramic Coating",
        "Color Changing Indoor Light",
        "Heavy Duty Bumper",
        "Tinting & Polish",
        "Water Proofing"];

    const premiumPack = [
        "Water Proofing of Glass",
        "Seat Cover Installation",
        "Color Changing Indoor Light",
        "Heavy Duty Bumper",
        "Wheel Alignment Checking"
    ]

    const handlePremiumPackHover = () => {
        document.querySelector(".basic-pack").classList.add("premium-pack-hovered");
    }

    const handlePremiumPackUnHover = () => {
        document.querySelector(".basic-pack").classList.remove("premium-pack-hovered");
    }

    const selectedService = {
        id: "S01",
        name: "Periodic Services"
    }

    const handleGetPremiumServices = () =>{
        sessionStorage.setItem("selected-service",JSON.stringify(selectedService));
        navigate(`/service detail/${selectedService.id}?service_name=${selectedService.name}`)
    }

  return (
    <>
        <section>
            <div className="container-xl">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="text-wrapper lg:p-10">
                            <div className="item--subtitle !text-7xl">
                                <FontAwesomeIcon icon={faAnglesRight} />
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                            <h1 className="item--title !text-[var(--text-color)]">Great Packages For Car Repair</h1>
                            <h5 className="item--subtitle">Save 30% On Service Packages</h5>

                            <h1 className='item--title !text-3xl py-10 !text-[var(--color-one)]'>One Time Service Packages</h1>
                        </div>
                    </div>
                    <div className="col-lg-8 row justify-between xxs:!mx-[calc(0.5*var(--bs-gutter-x));]" style={{"--bs-gutter-x":"0"}}>
                        <div className="col-lg-6 lg:!w-[48%]  basic-pack my-8">
                            <div className='text-wrapper py-12 px-2 md:px-10 relative'>
                                <div className='item--badge'>
                                    <h1 className='item--title'>Most Popular</h1>
                                </div>
                                <h1 className='item--title !text-3xl'>Basic Pack</h1>
                                <h1 className='item--title py-4 !text-3xl'>&#8377;{basicPackPrice}/Car</h1>
                                <div className='pt-4 pb-28'>
                                    {basicPack.map((item, idx) => (
                                        <div key={idx} className='list--item text-base'>
                                            <span className='pr-4'>
                                                <CgQuote size={45}/>
                                            </span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <ButtonThree firstText='Get Package' color='white'
                                    onClick={handleGetPremiumServices}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 lg:!w-[48%]  premium-pack my-8"
                            onMouseEnter={handlePremiumPackHover}
                            onMouseLeave={handlePremiumPackUnHover}
                        >
                            <div className='text-wrapper py-12  px-2 md:px-10'>
                                <h1 className='item--title !text-3xl'>Comprehensive FIT</h1>
                                <h1 className='item--title py-4 !text-3xl'>&#8377;{comprehensivePackPrice}/car</h1>
                                <div className='pt-4 pb-28'>
                                    {premiumPack.map((item, idx) => (
                                        <div key={idx} className='list--item text-base'>
                                            <span className='pr-4'>
                                                <CgQuote size={45}/>
                                            </span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                
                                </div>
                                <ButtonThree firstText='Get Package' color='white' 
                                    onClick={handleGetPremiumServices}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Packages
