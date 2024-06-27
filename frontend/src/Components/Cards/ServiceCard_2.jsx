import '../../styles/card.css';

import { useNavigate } from 'react-router-dom';

const ServiceCard_2 = ({heading="Title",imgUrl="/Images/service-01.jpg", id="S01"}) => {

    const navigate = useNavigate();

    const selectedService = {
        id: id,
        name: heading
    }

    const handleLearnMore = () =>{
        sessionStorage.setItem("selected-service",JSON.stringify(selectedService));
        navigate(`/service detail/${id}?service_name=${heading}`)
    }

  return (
    <>
        <div className="col-md-6 col-lg-4 mb-10" style={{"--bs-gutter-x":"2rem"}}>
            <div className="service-card-2" style={{backgroundImage:`url(${imgUrl})`}}>
                <div className="service-card-body">
                    <div className='text-wrapper'>
                        <div className='divider-img' /> 
                        <h1 className='item--title !text-3xl !mb-8'>{heading}</h1>
                        <h5 className='item--description !text-xl'
                            onClick={handleLearnMore}
                        >
                            Learn More &#8594;
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceCard_2;
