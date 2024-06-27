import {Modal} from "antd"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Brands from '../data/brand';
import Models from '../data/model';
import Fuel from '../data/fuel';

import { updateBrand,updateModel,updateFuel} from '../store/vehicleSlice';

import { useDispatch } from "react-redux";

const VehicleModal = ({openBrandModal,setOpenBrandModal}) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [openModelModal, setOpenModelModal] = useState(false)
    const [openFuelModal, setOpenFuelModal] = useState(false)

    const [modelData,setModelData] = useState([]);
    const [fuelData,setFuelData] = useState([]);

    const [selectedBrand, setSelectedBrand] = useState(null)
    const [selectedModel, setSelectedModel] = useState(null)


    const handleBrandChoose = (brand) => {
        setSelectedBrand(brand);
        const temp = Models.filter((model) => model.for_brand === brand.brand_no)
        setModelData(temp);
        setOpenBrandModal(false);
        setOpenModelModal(true);
    }

    const handleModelChoose = (model) => {
        setSelectedModel(model)
        const temp = Fuel.filter((fuel) => fuel.fuel_id === model.fuel_id)
        setFuelData(temp)
        setOpenModelModal(false);
        setOpenFuelModal(true);
    }

    const handleFuelChoose = (fuel) => {
        setOpenFuelModal(false);
        dispatch(updateBrand(selectedBrand))
        dispatch(updateModel(selectedModel))
        dispatch(updateFuel(fuel))
        navigate("/services")
    }

    const handleModalCancel = () => {
        setOpenBrandModal(false);
        setOpenModelModal(false)
        setOpenFuelModal(false);
    }


  return (
    <>
        {/* <Brand> */}
        <Modal 
            width={1000}
            title={<h1 className='text-2xl'>Choose Brand</h1>} 
            open={openBrandModal}
            onCancel={handleModalCancel}
            footer={null}
        >
            <div className='modal-container'>
                {Brands.map((brand,i) => (
                    <div key={i} className='modal-card'
                        onClick={() => handleBrandChoose(brand)}
                    > 
                        <div className='modal-image' style={{backgroundImage:`url(${brand.brand_img})`}}/>
                        <h5 className='text-center'>{brand.brand_name}</h5>
                    </div>
                ))}
            </div>
        </Modal>
        {/* Model */}
        <Modal 
            width={1000}
            title={<h1 className='text-2xl'>Choose Model</h1>} 
            open={openModelModal}
            onCancel={handleModalCancel}
            footer={null}
        >
            <div className='modal-container'>
            {modelData?.map((model,i) => (
                <div key={i} className='modal-card'
                    onClick={() => handleModelChoose(model)}
                > 
                    <div className='modal-image' style={{backgroundImage:`url(${model.model_img})`}}/>
                    <h5 className='text-center'>{model.model_name}</h5>
                </div>
            ))}
            </div>
        </Modal>
        {/* Fuel */}
        <Modal 
            width={1000}
            title={<h1 className='text-2xl'>Choose Fuel</h1>} 
            open={openFuelModal}
            onCancel={handleModalCancel}
            footer={null}
        >
            <div className='modal-container'>
            {fuelData[0]?.fuel_type.map((fuel,i) => (
                <div key={i} className='modal-card'
                    onClick={() => handleFuelChoose(fuel)}
                > 
                    <div className='modal-image' style={{backgroundImage:`url(${fuel.fuel_img})`}}/>
                    <h5 className='text-center'>{fuel.type}</h5>
                </div>
            ))}
            </div>
        </Modal>
    </>
  )
}

export default VehicleModal
