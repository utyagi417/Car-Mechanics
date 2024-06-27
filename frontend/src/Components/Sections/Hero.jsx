import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import { useState } from 'react';

import {Autoplay, Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react"

import ButtonTwo from '../Buttons/ButtonTwo';
import VehicleModal from '../../utils/VehicleModal';


const Hero = () => {


    const [openBrandModal, setOpenBrandModal] = useState(false)

    const handleOpenModal =  () => {
        setOpenBrandModal(true);
    }


 
  return (
      <>
        <section id="hero" className="py-0">
            <Swiper 
                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                pagination={{ clickable: true }}
                loop
                speed={2500}
                autoHeight
                autoplay 
            >
                <SwiperSlide>
                    <div className="slider--item">
                        <div className="slide-image" 
                            style={{backgroundImage:"url('/Images/Slider/1.jpg')"}}
                        />
                        <div className="container px-3 z-[2] relative">
                            <div className="relative">
                                <div className="row justify-start items-center w-full h-full">
                                    <div className="swiper-col">
                                        <h5> BEST AUTOMOBILE REPAIR WORKSHOP </h5>
                                        <h1> One Stop Solution For Car Maintenance Repair & Detailing</h1>
                                        <ButtonTwo text="CHOOSE VEHICLE" onClick={handleOpenModal}/>
                                    </div>
                                </div>
                                <div className="slide-item-layer slide-item-layer-one" />
                                <div className="slide-item-layer slide-item-layer-two" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider--item">
                        <div className="slide-image" 
                            style={{backgroundImage:"url('/Images/Slider/2.jpg')"}}
                        />
                        <div className="container mx-auto">
                            <div className="slide-inner">
                                <div className="row justify-start items-center w-full h-full">
                                    <div className="swiper-col">
                                        <h5> BEST AUTOMOBILE REPAIR WORKSHOP </h5>
                                        <h1> One Stop Solution For Car Maintenance Repair & Detailing</h1>
                                        <ButtonTwo text="CHOOSE VEHICLE" onClick={handleOpenModal}/>
                                    </div>
                                </div>
                                <div className="slide-item-layer slide-item-layer-one" />
                                <div className="slide-item-layer slide-item-layer-two" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider--item">
                        <div className="slide-image" 
                            style={{backgroundImage:"url('/Images/Slider/3.jpg')"}}
                        />
                        <div className="container mx-auto">
                            <div className="slide-inner">
                                <div className="row justify-start items-center w-full h-full">
                                    <div className="swiper-col">
                                        <h5> BEST AUTOMOBILE REPAIR WORKSHOP </h5>
                                        <h1> One Stop Solution For Car Maintenance Repair & Detailing</h1>
                                        <ButtonTwo text="CHOOSE VEHICLE" onClick={handleOpenModal}/>
                                    </div>
                                </div>
                                <div className="slide-item-layer slide-item-layer-one" />
                                <div className="slide-item-layer slide-item-layer-two" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>


        <VehicleModal 
            openBrandModal={openBrandModal}
            setOpenBrandModal={setOpenBrandModal}
        />
       
    </>
  )
}

export default Hero;
