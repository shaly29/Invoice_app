import React, {useState, useEffect } from 'react'
import {v4 as uuidv4} from "uuid"
import { MdDeleteOutline } from "react-icons/md";
import { CiEdit } from "react-icons/ci";



const Form = ({description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
list,
setList,
total,
setTotal
}) => {

const [isEditing,setIsEditing] = useState(false)

const handleSubmit = (e) => {
  e.preventDefault()

const newItems = {
  id: uuidv4(),
  description,
  quantity,
  price,
  amount
}
setDescription("")
setQuantity("")
setPrice("")
setAmount("")
setList([...list,newItems])
setIsEditing(false)

}

useEffect(() => {
  const calculateAmount = (amount) => {
    setAmount(quantity* price)
  }
  calculateAmount(amount)
},[quantity,setQuantity,price,setPrice])

// calculate total amount

let rows = document.querySelectorAll(".amount")
let sum = 0

for(let i=0; i < rows.length; i++){
if(rows[i].className === "amount"){
  sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
  setTotal(sum)
}
}


// edit
const editRow = (id) => {
  const editingRow = list.find((row) => row.id === id)
  setList(list.filter((row) => row.id !== id))
  setIsEditing(true)
  setDescription(editingRow.description)
setQuantity(editingRow.quantity)
setPrice(editingRow.price)

}


// dele
const deleteRow = (id) => setList(list.filter((row) => row.id !== id))



  return (
   <>
   <form onSubmit={handleSubmit}>
   <div className="flex flex-col md:mt-16">
          <label htmlFor="description">Item description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item description"
            maxLength={96}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              maxLength={33}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              maxLength={33}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount">Amount</label>
           <p> {amount} </p>
          </div>

        </div>

        <button type='submit'  className='bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent
         hover:text-blue-500'> 
         
         {isEditing ? "Editing row item" : "Add Table Item"}
       
         </button>
        </form>

        <table width="100%" className='mb-10'>
       
<thead>
 <tr className='bg-gray-100 p-1'>
  <td className='font-bold'>Description</td>
  <td className='font-bold'>Quantity</td>
  <td className='font-bold'>Price</td>
  <td className='font-bold'>Amount</td>
 </tr>
</thead>
{list.map(({id,description,quantity,price,amount}) =>(
          
        
          <React.Fragment key={id}>
          

<tbody>
  <tr>
   
  <td>{description}</td>
  <td>{quantity}  </td>
  <td>{price}  </td>
  <td className='amount'>{amount}  </td>
  <td>
    <button onClick={() => deleteRow(id)}><MdDeleteOutline className='text-red-500 font-bold text-xl' /> </button>
    </td>
    <td>
    <button onClick={() => editRow(id)}><CiEdit  className='text-green-500 font-bold text-xl' /> </button>
    </td>
  </tr>
</tbody>

           </React.Fragment>
          ))}
          </table>
          <div>
            <h2 className='text-gray-800'>{total}</h2>
          </div>
   </>
  )
}

export default Form
