
import ButtonThree from "../Buttons/ButtonThree"

const ServiceCard = ({
    heading,
    description,
    imgUrl,
    btnFirstText,
    btnSecondText = null,
    onClick
}) => {
  return (
    <>
        <div className="service-col-md">
            <div className="service-inner-item">
                <div className="service-item-holder">
                    <div className="text-wrapper">
                        <h1 className="item--title !text-4xl">{heading}</h1>
                        <p className="item--description">{description}</p>
                    </div>
                    <div className="cs-item-image">
                        <img src={imgUrl} alt="ceramic-coating" />
                    </div>
                    <ButtonThree firstText={btnFirstText} secondText={btnSecondText}
                        onClick={onClick}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default ServiceCard
