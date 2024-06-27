import '../styles/service-detail.css';
import { Fragment } from "react";
import { useState } from 'react';
import useStore from "../Zustand/Store";


import Navbar from './../Components/Navbar';
import PageHeader from "../Components/PageHeader"
import SpecificServiceDetail from '../Components/services/SpecificServiceDetail';

import InnerService from "../data/InnerServices.json";
import { useSelector } from "react-redux";

import VehicleModal from '../utils/VehicleModal';

const ServiceDetail = () => {
    const vehicle = useSelector((state) => state.vehicle)
    const brand = vehicle.brand?.brand_name;
    const model = vehicle.model?.model_name;
    const fuel = vehicle.fuel?.type;

    const [openBrandModal, setOpenBrandModal] = useState(false)

    const handleOpenModal =  () => {
        setOpenBrandModal(true);
    }

    const selectedService = JSON.parse(sessionStorage.getItem("selected-service"));
    const {cart , updateCart} = useStore();
    
    const handleAddToCart = (service) => {
        const tempCart = cart.filter((item) => item.sid !== service.sid) || [];
        tempCart.push(service);
        updateCart(tempCart);
    }

    const cartHasItem = (service) => {
        if(cart?.some(item => item.name === service.name)){
            return true;
        }else{
            return false;
        }
    }
    const filteredServices = InnerService.filter((service) => service.id === selectedService.id);

  return (
    <>
        <Navbar selectedTab="services"/>
        <PageHeader  heading={selectedService.name} subHeading="Choose Vehicle" 
         selectedVehicle={vehicle.brand !== null ? `${brand}-${model}-${fuel}` :null}
         onClick={handleOpenModal}
         />
        <section>
            <div className="container-xl">
                {filteredServices.map((service, idx) => (
                    <Fragment key={idx}>
                        <h1 className="item--title max-md:!text-[2.5rem] !text-[var(--text-color)]">{service.Category}</h1>
                        <SpecificServiceDetail 
                            services={service.service_included} 
                            selectedVehicle={vehicle}
                            cartHasItem={cartHasItem}
                            handleAddToCart={handleAddToCart}
                            handleOpenModal={handleOpenModal}
                        />
                    </Fragment>
                ))}
            </div>
        </section>
        <section />
            
        <VehicleModal openBrandModal={openBrandModal} setOpenBrandModal={setOpenBrandModal}/>

    </>
  )
}

export default ServiceDetail;

