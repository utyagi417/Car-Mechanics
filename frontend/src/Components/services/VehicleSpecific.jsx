import { Fragment } from "react";
import { useEffect, useState } from "react";

import ServiceCard_2 from './../Cards/ServiceCard_2';
import serviceData from "../../data/services.json"


const VehicleSpecific = ({selectedVehicle}) => {
  
  const [data, setData] = useState(null);
  
  
  useEffect(() => {
    const modelId = selectedVehicle.model.model_no;
    const temp = serviceData.filter((service) => service.available_for.includes(modelId));
    setData(temp);
  }, [selectedVehicle]);
  


  return (
    <>
      <section>
          <div className="container-xl">
              <div className="row">
                  {data?.map((service,idx) => (
                  <Fragment key={idx}>
                      <ServiceCard_2 heading={service.name} id={service.id} imgUrl={service.imgUrl}/>
                  </Fragment>
                  ))}
              </div>  
          </div>
      </section>
    </>
  )
}

export default VehicleSpecific
