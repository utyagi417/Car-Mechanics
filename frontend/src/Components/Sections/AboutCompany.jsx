
import { FaScrewdriverWrench } from "react-icons/fa6";

import ButtonTwo from "../Buttons/ButtonTwo"
import { useNavigate } from "react-router-dom";

const AboutCompany = () => {

    const navigate = useNavigate();
  return (
    <>
        <section id="about-company" className="bg-auto bg-bottom bg-no-repeat" style={{backgroundImage:"var(--bg-image-2)"}}>
            <div className="container">
                <div className="row pt-[40px]">
                    <div className="col">
                        <div className="select-none">
                            <div className="lg:pl-[100px] lg:pr-[50px]">
                                <img src="/Images/about-company.png" alt="About" className="min-h-[600px] object-cover"/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-wrapper">
                            <h6 className="item--subtitle">
                                <FaScrewdriverWrench size={100}/>
                            </h6>
                            <h1 className="item--title py-4 !text-[var(--text-color)]">
                                We care for Your Car just Like You do
                            </h1>
                            <p className="item--description pb-12">
                                When you bring your vehicle to AutoFixers Car Mechanic Center, you can rest easy knowing that your vehicle is in professional hands. We take every possible step to ensure that your experience with us is pleasant and efficient.
                            </p>
                            <ButtonTwo text="Know More" onClick={() => {navigate("/about")} }/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutCompany
