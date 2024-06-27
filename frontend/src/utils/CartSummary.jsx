import React from 'react'

const CartSummary = ({first="First",second="Second"}) => {
  return (
    <>
         <div className="flex justify-between flex-wrap mt-12 pb-4 border-b">
            <div className="col-md-6">
                <h1 className="text-2xl font-Montserrat">
                    {first}
                </h1>
            </div>
            <div className="col-md-6">
                <h1 className="text-2xl font-Montserrat">
                    {second}
                </h1>
            </div>
        </div>
    </>
  )
}

export default CartSummary
