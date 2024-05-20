import { useState } from "react";
import jsPDF from "jspdf";

export default function Order() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [deliver, setDeliver] = useState("");

  const time = new Date().toLocaleTimeString();
  const day = new Date().toLocaleDateString();


  // setTime(new Date().toLocaleTimeString());





  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstname.length <= 5) {
      alert('Confirm Name')
    } else {
      setFirstname("")
      setLastname("")
      setEmail("")
      setPhone("")
      setAddress("")
    }
  }

  let amount1 = number * 3600;
  let amount2 = number * 3700
  let price = number > 20 ? amount1 : amount2

  const generatePDF = (e) => {
    e.preventDefault()
    setFirstname("")
    setLastname("")
    setEmail("")
    setPhone("")
    setAddress("")
    setNumber("")
    const doc = new jsPDF();

    doc.text(`${firstname} ${lastname} Egg Order`, 10, 10);
    doc.text(`Name: ${firstname} ${lastname}`, 10, 20);
    doc.text(`Number of Crates: ${number}`, 10, 30);
    doc.text(`Amount: ${price}`, 10, 40);
    doc.text(`Day: ${day}`, 10, 50);
    doc.text(`Time: ${time}`, 10, 60);

    doc.save(`${firstname}'s Egg Order.pdf`);
  }


  return (
    <div className="FormBody">
      <h1>Place Your Egg Orders</h1>
      <form action="" method="" onSubmit={handleSubmit} >
        <fieldset className="order">
          <div className="formorder">
            <field className="firstname">
              <label htmlFor="firstname">First Name<sup className="ast">*</sup></label>
              <input
                type="text"
                id="firstname"
                value={firstname}
                name="firstname"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </field>
            <field className="lastname">
              <label htmlFor="lastname">Last Name<sup className="ast">*</sup></label>
              <input
                type="text"
                id="lastname"
                value={lastname}
                name="lastname"
                onChange={(e) => setLastname(e.target.value)}
              />
            </field>
            <field className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </field>
            <field className="phone">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </field>
            <field className="address">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                name="address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </field>
            <field className="number">
              <label htmlFor="number">Number Of Crates<sup className="ast">*</sup></label>
              <input
                type="number"
                id="number"
                value={number}
                name="address"
                onChange={(e) => setNumber(e.target.value)}
              />
            </field>
            <field className="deliver">
              <label htmlFor="deliver">Would you like your eggs delivered to you?</label>
              Yes
              <input
                type="radio"
                id="deliver"
                value={deliver}
                name="deliver"
                onChange={(e) => setDeliver(e.target.value)}
              />
              No
              <input
                type="radio"
                id="deliver"
                value={deliver}
                name="deliver"
                onChange={(e) => setDeliver(e.target.value)}
              />
            </field>
          </div>
        </fieldset>
      </form>

      <p className="prologue">
        I, {firstname} {lastname} would like to order a total of {number} crates of eggs at the current price of {number > 20 ? 3600 : 3700}.
        And i would be making a transaction of {price} in which my purchase receipt would be generated below.
      </p>
      <button type="submit" className="orderbtn" onClick={generatePDF}>Generate Your Receipt</button>
    </div>
  );
}
