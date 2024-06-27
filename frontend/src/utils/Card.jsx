import React from 'react'

const Card = ({image, color="#ecf2ff",Text="Text",Number="10000"}) => {
  return (
    <>
        <div className='analytic-card' style={{"--analytics-card-color":`${color}`}}>
            <div className='w-[50px] h-[50px]' style={{backgroundImage:`url(${image})`}}/>
            <div className='flex items-center flex-col'>
                <h3 className='text-lg text-black'>{Text}</h3>
                <h2 className='font-Plus text-black'>{Number}</h2>
            </div>
        </div>
    </>
  )
}

export default Card
