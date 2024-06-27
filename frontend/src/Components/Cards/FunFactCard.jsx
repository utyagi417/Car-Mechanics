import React from 'react'

const FunFactCard = ({quantity="100K" , title="Number"}) => {
  return (
    <>
        <div className='ff-col'>
            <div className='above-text'>
                <h1>{quantity}</h1>
            </div>
            <div className='below-text'>
                <h5>{title}</h5>
            </div>
        </div>
    </>
  )
}

export default FunFactCard
