

const ButtonThree = ({firstText="FIRST TEXT", secondText=null, color="black", onClick}) => {

  const handleClick = onClick || (() => console.log("Nothing Here"));
  return (
    <>
        <div className={`btn-three ${color} select-none`} onClick={handleClick}>
            <span className="btn-wrap">
                <span className="text-first">{firstText}</span>
                <span className="text-second">{secondText === null ? firstText : secondText }</span>
            </span>
        </div>
    </>
  )
}

export default ButtonThree;
