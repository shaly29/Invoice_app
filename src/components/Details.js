import React from 'react'

const Details = ({name,address}) => {
  return (
    <div>
      <section className='flex flex-col items-end justify-end'>
<input type="text" name="text" id='text'
placeholder='Enter Your Name' required  />
<h2 className='text-2xl uppercase font-bold mb-1'> 
{name} </h2>
<p> {address}</p>


      </section>
    </div>
  )
}

export default Details
