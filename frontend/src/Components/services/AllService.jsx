import { Fragment } from "react";

import ServiceCard_2 from './../Cards/ServiceCard_2';
import serviceData from "../../data/services.json"

const AllService = () => {
  return (
    <>
        <section>
            <div className="container-xl">
                <div className="row">
                    {serviceData.map((service,idx) => (
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

export default AllService
