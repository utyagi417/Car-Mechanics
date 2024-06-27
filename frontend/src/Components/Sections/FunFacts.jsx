import FunFactCard from "../Cards/FunFactCard"

const FunFacts = () => {
  return (
    <>
        <section id='ff-section'>
            <div className='container'>
                <div className='row py-10'>
                    <FunFactCard quantity="20K" title="Vehicle Repaired" />
                    <FunFactCard quantity="20K" title="Happy Customers" />
                    <FunFactCard quantity="26" title="Expert Mechanics" />
                    <FunFactCard quantity="10+" title="Award Winning" />
                </div>
            </div>
        </section>    
    </>
  )
}

export default FunFacts
