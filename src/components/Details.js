import React from 'react'

const Details = ({ name, address }) => {
  return (
    <div>
      <section className='flex flex-col items-end justify-end'>
        
        <h2 className='text-xl uppercase font-bold mb-1 md:text-4xl'>
          {name} </h2>
        <p> {address}</p>


      </section>
    </div>
  )
}

export default Details
