import { useState } from 'react';
import './index.css';
import ClientDetails from './components/ClientDetails';
import Date from './components/Date';
import Details from './components/Details';
import Footer from './components/Footer';
import Header from './components/Header';
import Notes from './components/Notes';
import Table from './components/Table';
import Form from './components/Form';


function App() {

  const [showInvoice, setShowInvoice] = useState(true)
  const [name, setName] = useState("shaly")
  const [address, setAddress] = useState("bhjbjdhw")
  const [email, setEmail] = useState("bhbnkh@gmail.com")
  const [bankName, setBankName] = useState("d2ede")
  const [bankAccount, setBankAccount] = useState("211324")
  const [website, setWebsite] = useState("https://www.w3schools.com/js/default.asp")
  const [phone, setPhone] = useState("123234")
  const [clientName, setClientName] = useState("dwede")
  const [clientAddress, setClientAddress] = useState("ewfdewde")
  const [invoiceNumber, setInvoiceNumber] = useState("23343674567")
  const [invoiceDate, setInvoiceDate] = useState("12/02/2023")
  const [dueDate, setDueDate] = useState("10/04/2023")
  const [notes, setNotes] = useState("gyydusffffffgg uegfiyewgf weyfhuwe")
const [description, setDescription] = useState("")
const [quantity,setQuantity] = useState("")
const [price,setPrice] = useState("")
const [amount,setAmount] = useState("")




  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      {showInvoice ? (
      <div>
        <Header handlePrint={handlePrint} />
        <Details name={name} address={address} />
        <ClientDetails clientName={clientName} clientAddress={clientAddress} />
        <Date invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
        <Table description={description}/>
        <Notes notes={notes} />
        <Footer name={name}
          email={email}
          website={website}
          address={address}
          phone={phone}
          bankName={bankName}
          bankAccount={bankAccount}
        />


        <button onClick={() => setShowInvoice(false)}
          className='bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent
 hover:text-blue-500' > Edit Information</button>
      </div>) : (
        <>
          <div className='flex flex-col justify-center items-center'>
            <article className='md:grid grid-cols-2 gap-10'>
              <div className='flex flex-col'>
                <label htmlFor='name'>Name</label>
                <input type="text"
                  name='text'
                  id='name'
                  placeholder='enter name'
                  autoComplete='off'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='address'>Address</label>
                <input type="text"
                  name='address'
                  id='address'
                  placeholder='enter address'
                  autoComplete='off'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <br />
                <br />
              </div>
            </article>


            <article className='md:grid grid-cols-3 gap-10'>
              <div className='flex flex-col'>
                <label htmlFor='email'>Email</label>
                <input type="email"
                  name='email'
                  id='email'
                  placeholder='enter email'
                  autoComplete='off'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
              </div>


              <div className='flex flex-col'>
                <label htmlFor='website'>Website</label>
                <input type="url"
                  name='website'
                  id='website'
                  placeholder='enter website'
                  autoComplete='off'
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <br />
                <br />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='phone'>Phone</label>
                <input type="text"
                  name='phone'
                  id='phone'
                  placeholder='enter phone'
                  autoComplete='off'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <br />
              </div>
            </article>

            <article className='md:grid grid-cols-3 gap-10'>
              <div className='flex flex-col'>
                <label htmlFor='bankName'>Bank Name</label>
                <input type="text"
                  name='bankName'
                  id='bankName'
                  placeholder='enter bankname'
                  autoComplete='off'
                  value={bankName}
                  onChange={(e) => setBankName(e.target.value)}
                />

                <br />
                <br />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='bankAccount'>BankAccount</label>
                <input type="text"
                  name='bankAccount'
                  id='bankAccount'
                  placeholder='enter bankaccount'
                  autoComplete='off'
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                />
                <br />
                <br />
              </div>

            </article>
            <article className='md:grid grid-cols-3 gap-10 md:mt-16'>
              <div className='flex flex-col'>
                <label htmlFor='clientName'>Client Name</label>
                <input type="text"
                  name='clientName'
                  id='clientName'
                  placeholder='enter clientname'
                  autoComplete='off'
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                />
                <br />
                <br />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='clientAddress'>Client Address</label>
                <input type="text"
                  name='clientAddress'
                  id='clientAddress'
                  placeholder='enter clientaddress'
                  autoComplete='off'
                  value={clientAddress}
                  onChange={(e) => setClientAddress(e.target.value)}
                />
                <br />
                <br />
              </div>
            </article>
            <article className='md:grid grid-cols-3 gap-10'>
              <div className='flex flex-col'>
                <label htmlFor='invoiceNumber'>Invoice Number</label>
                <input type="text"
                  name='invoiceNumber'
                  id='invoiceNumber'
                  placeholder='enter invoivenumber'
                  autoComplete='off'
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                />
                <br />
                <br />
              </div>

              <div className='flex flex-col'>
                <label htmlFor='invoiceDate'>Invoice Date</label>
                <input type="date"
                  name='invoiceDate'
                  id='invoiceDate'
                  placeholder='enter invoiceDate'
                  autoComplete='off'
                  value={invoiceDate}
                  onChange={(e) => setInvoiceDate(e.target.value)}
                />
                <br />
                <br />
              </div>
            

            <div className='flex flex-col'>
              <label htmlFor='dueDate'>Due Date</label>
              <input type="date"
                name='dueDate'
                id='dueDate'
                placeholder='enter dueDate'
                autoComplete='off'
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
              <br />
              <br />
            </div>
            </article>
            
<article>
  <Form
  description={description}
  setDescription={setDescription}
  quantity={quantity}
setQuantity={setQuantity}
price={price}
setPrice={setPrice}
amount={amount}
setAmount={setAmount}


  />
</article>












            <div className='flex flex-col'>
              <label htmlFor='notes'>Notes</label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="10"
                placeholder="Additional notes to the client"
                maxLength={500}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
              <br />
              <br />
            </div>
           
            <button
              onClick={() => setShowInvoice(true)}
              className='bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent
                hover:text-blue-500' > preview Invoice</button>

          </div>
        </>
      )}
    </>
  );
}

export default App;
