import { useNavigate } from 'react-router-dom';


import ButtonTwo from "../Buttons/ButtonTwo"
import ServiceCard from "../Cards/ServiceCard"

const Service = () => {

    const navigate = useNavigate();

    const handleGetService = (id,name) =>{
        const selectedService = {
            id: id,
            name: name
        }
        sessionStorage.setItem("selected-service",JSON.stringify(selectedService));
        navigate(`/service detail/${selectedService.id}?service_name=${selectedService.name}`)
    }

  return (
    <>
        <section id="service-section">
            <div className="container">
                <div className="cs-heading">
                    <div className="row items-center">
                        <div className="service-col-lg">
                            <div className="text-wrapper">
                                <h6 className="item--subtitle">Our Service List</h6>
                                <h1 className="item--title max-md:text-3xl !text-[var(--text-color)]"> 
                                    Providing All Types of <br/>
                                    Car{" "}
                                    <span>Maintenance</span> 
                                    {" "}Services
                                </h1>
                            </div>
                        </div>
                        <div className="service-col-sm">
                            <div className="md:text-end">
                                <ButtonTwo text="All Services" onClick={() => {navigate("/services")}}/>
                            </div>
                        </div>
      
                    </div>
                </div>
                <div className="row">
                    <ServiceCard 
                        heading="Ceramic Coating"
                        description="Ceramic coating is a liquid polymer applied to the exterior of a vehicle. Once applied, it chemically bonds with the vehicle’s factory paint, creating a protective layer. "
                        imgUrl="/Images/service-01.jpg" 
                        btnFirstText="GET SERVICE"
                        onClick={() => handleGetService("S06","Detailing Services")}
                    />
                    <ServiceCard 
                        heading="Engine Oil Changing"
                        description="Engine oil changing is a routine maintenance task where the old engine oil is drained from the vehicle's engine and replaced with fresh oil"
                        imgUrl="/Images/service-02.jpg"
                        btnFirstText="GET SERVICE" 
                        onClick={() => handleGetService("S01","Periodic Services")}
                    />
                    <ServiceCard 
                        heading="Hydro Dripping"
                        description=" Hydro dipping, also known as water transfer printing or hydrographics, is a technique used to apply intricate graphics or patterns to three-dimensional objects, including car parts."
                        imgUrl="/Images/service-03.jpg" 
                        btnFirstText="GET SERVICE"
                        onClick={() => handleGetService("S07","Car Spa & Clean")}
                    />

                </div>
            </div>
        </section>
    
    </>
  )
}

export default Service
