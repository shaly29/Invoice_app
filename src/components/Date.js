import React from 'react'

const Date = ({invoiceNumber,invoiceDate,dueDate}) => {
  return (
    <div>
      <article className="mt-5 flex flex-col items-end justify-end">
       <ul>
        <li> <span className="font-bold">Invoicer Number</span>{invoiceNumber}  </li>
        <li><span className='font-bold'>Invoicer Date</span>{invoiceDate} </li>
        <li><span className='font-bold'>Due Date</span>{dueDate} </li>
        </ul> 
      </article>
    </div>
  )
}

export default Date
