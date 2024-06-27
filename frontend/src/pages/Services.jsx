import PageHeader from "../Components/PageHeader"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer/Footer";
import AllService from "../Components/services/AllService";
import VehicleSpecific from "../Components/services/VehicleSpecific";

import { useSelector } from "react-redux";
import VehicleModal from "../utils/VehicleModal";
import { useState } from "react";

const Services = () => {

  const vehicle = useSelector((state) => state.vehicle)
  const brand = vehicle.brand?.brand_name;
  const model = vehicle.model?.model_name;
  const fuel = vehicle.fuel?.type;
  
  const [openBrandModal, setOpenBrandModal] = useState(false)

  const handleOpenModal =  () => {
      setOpenBrandModal(true);
  }

  return (
    <>
      <Navbar selectedTab="services"/>
      <PageHeader heading="Our Services" subHeading="Choose Vehicle" 
        selectedVehicle={vehicle.brand !== null ? `${brand}-${model}-${fuel}` :null}
        onClick={handleOpenModal}
      />
      {vehicle.brand === null ? <AllService /> : <VehicleSpecific selectedVehicle={vehicle}/>}
      <section />
      <Footer />
    
      <VehicleModal openBrandModal={openBrandModal} setOpenBrandModal={setOpenBrandModal}/>
    </>
  )
}

export default Services
