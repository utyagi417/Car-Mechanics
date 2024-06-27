import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { TiTick } from "react-icons/ti";
import toast from "react-hot-toast";

import ButtonTwo from "../Buttons/ButtonTwo"



const SpecificServiceDetail = ({selectedVehicle, services, handleAddToCart, cartHasItem,handleOpenModal}) => {

    const navigate = useNavigate();
    const {authUser} = useAuthContext();

    const modelId = selectedVehicle.model?.model_no;


  return (
    <>
        {services.map((innerService, idx) => {
            const specific = selectedVehicle.fuel === null ? {available:true, price:innerService.price} :innerService.vehicle_specific[modelId];
            const serviceForCart = {
                sid: innerService.sid,
                name: innerService.name,
                price: specific.price,
                MRP: innerService.MRP,
            }
            return (
                specific.available === true && (
                    <Fragment key={idx}>
                        <div className="row border border-[var(--color-dark-black)] rounded-xl p-2 md:p-6 lg:p-10 mb-10">
                            <div className="col-lg-4">
                                <div className="flex flex-col">
                                    <div className="col-lg-12 pb-10">
                                        <img src={innerService.img} />
                                    </div>
                                    <div className="col-lg-12 flex items-center">
                                        <h5 className="item--subtitle !text-4xl line-through">{innerService.MRP}</h5>
                                        <h5 className="item--title !text-[var(--text-color)]">{specific.price}</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="flex flex-col justify-between h-full">
                                    <div className="col-md-12">
                                        <h1 className="service-heading">
                                            {innerService.name}{" "}
                                        </h1>

                                        <div className="flex mb-10 gap-4 flex-wrap">
                                        {innerService.major_feature?.map((major_features, i) => (
                                                <h3 key={i} className="flex items-start !text-[var(--text-color)]">
                                                    <span className="gray-dot"/>
                                                    {major_features}
                                                </h3>
                                            ))}
                                        </div>
                                        
                                        <h4 className="item--subtitle !text-xl md:!text-2xl lg:!text-3xl pb-6">List of Features Included :</h4>
                                        <ul className="features-list">
                                            {innerService.features?.map((features, i) => (
                                                <li key={i} className="feature-item">
                                                    <span >
                                                        <TiTick />
                                                    </span>
                                                    {features}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="flex justify-end">
                                            {authUser ? (
                                                modelId ? (
                                                    cartHasItem(serviceForCart) ? (
                                                        <ButtonTwo text="Added to Cart"  
                                                        onClick={() => toast.success("Already in Cart")}
                                                        disabled={true}
                                                        />
                                                    ):(
                                                        <ButtonTwo text="Add to Cart"  
                                                        onClick={() => handleAddToCart(serviceForCart)}
                                                        />
                                                    )
                                                ) :(
                                                    <ButtonTwo text="Choose Vehicle"  
                                                       onClick={handleOpenModal}
                                                    />
                                                )
                                            ):(
                                                <ButtonTwo text="Login"  
                                                    onClick={() => navigate("/login")}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
            )
        })}
    </>
  )
}

export default SpecificServiceDetail
