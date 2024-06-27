
const PageHeader = ({heading = "Heading Here", subHeading="",selectedVehicle=null, onClick}) => {
  return (
    <>
        <section id='page-header'>
          <div>
            <div className='container'>
              <div className='pt-[220px] pb-[180px]'>
                <h2 className='item--title max-md:!text-[2.5rem] text-center'>{heading}</h2>
                {selectedVehicle === null && (
                  <h4 className="text-yellow-400 text-[1.5rem] text-center cursor-pointer"
                    onClick={onClick}
                  >
                    {subHeading}
                  </h4>
                )}
                <h4 className="text-yellow-400 text-[1.5rem] text-center cursor-pointer"
                  onClick={onClick}
                >
                  {selectedVehicle}
                </h4>
              </div>  
            </div>
          </div>
        </section>    
    </>
  )
}

export default PageHeader
