


import { FaPlus } from "react-icons/fa6";

const ButtonTwo = ({text="TEXT HERE", onClick, disabled=false}) => {

    const handleClick = onClick || (() => console.log("Nothing Here"));
    return (
    <>
        <button className="btn-two" onClick={handleClick} disabled={disabled}>
            <div className="btn-wrapper">
                <span className="text-first">
                    {text}
                </span>
                <span className="text-second">
                    <FaPlus />
                </span>
            </div>
        </button>
    </>
    )
}

export default ButtonTwo;
