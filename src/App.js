import { useState,useRef } from 'react';
import './index.css';
import ClientDetails from './components/ClientDetails';
import Date from './components/Date';
import Details from './components/Details';
import Footer from './components/Footer';
import Header from './components/Header';
import Notes from './components/Notes';
import Table from './components/Table';
import Form from './components/Form';
import ReactToPrint from 'react-to-print'

function App() {

  const [showInvoice, setShowInvoice] = useState(false)
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [bankName, setBankName] = useState("")
  const [bankAccount, setBankAccount] = useState("")
  const [website, setWebsite] = useState("")
  const [phone, setPhone] = useState("")
  const [clientName, setClientName] = useState("")
  const [clientAddress, setClientAddress] = useState("")
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [notes, setNotes] = useState("")
const [description, setDescription] = useState("")
const [quantity,setQuantity] = useState("")
const [price,setPrice] = useState("")
const [amount,setAmount] = useState("")
const [list,setList] = useState([])
const [total,setTotal] =useState(0)


const componentRef = useRef()

  const handlePrint = () => {
    window.print()
  }
  return (
    <>
    <main className='p-5 m-5 lg:max-w-xl lg:mx-auto bg-whiteow rounded shad'>
      {showInvoice ? (
        <>
         <ReactToPrint 
     trigger={() => 
     <button>Print/Download </button>}
      content={() => componentRef.current}  
      />

      <div ref={componentRef} className='p-5 bg-white  rounded shadow'>
        <Header handlePrint={handlePrint} />
        <Details name={name} address={address} />
        <ClientDetails clientName={clientName} clientAddress={clientAddress} />
        <Date invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
        <Table 
        description={description}
        quantity={quantity}
        price={price}
        amount={amount}
        list={list}
        setList={setList}
        total={total}
        setTotal={setTotal}
        />
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
      </div>
      </>
      ) : (
        <>
         <section>
          <div className="bg-white p-5 rounded shadow">
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="name">Your full name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter your name"
                    maxLength={56}
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="address">Enter your address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    autoComplete="off"
                    maxLength={96}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter your email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    maxLength={255}
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="website">Enter your website</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    placeholder="Enter your website"
                    maxLength={96}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone"
                    maxLength={12}
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter your bank name</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    placeholder="Enter your bank name"
                    maxLength={56}
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="bankAccount">
                    Enter your bank account number
                  </label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    placeholder="Enter your bank account number"
                    maxLength={20}
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-2 gap-10 md:mt-16">
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client's name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    placeholder="Enter your client's name"
                    maxLength={56}
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="clientAddress">
                    Enter your client's address
                  </label>
                  <input
                    type="text"
                    name="clientAddress"
                    id="clientAddress"
                    placeholder="Enter your client's address"
                    maxLength={96}
                    autoComplete="off"
                    value={clientAddress}
                    onChange={(e) => setClientAddress(e.target.value)}
                  />
                </div>
              </article>

              <article className="md:grid grid-cols-3 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">Invoice Number</label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    placeholder="Invoice Number"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Invoice Date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    placeholder="Invoice Date"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                </div>
              </article>

              {/* This is our table form */}
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
            list={list}
            setList={setList}
total={total}
setTotal={setTotal}
              />
            </article>

              <label htmlFor="notes">Additional Notes</label>
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
            </div>
          </div>
          <button
              onClick={() => setShowInvoice(true)}
              className='bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent
                hover:text-blue-500' > preview Invoice
                
          </button>

        
        </section>
{/* hbhbjh */}
         
           
        </>
      )}
      </main>
    </>
  );
}

export default App;
