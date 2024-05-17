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

  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstname.length <= 5) {
        alert('Confirm Name')
    } else {
        setFirstname("")
        setLastname("")
        setEmail("")
        setPhone("")
        setAddress("")
    }
  }

  const generatePDF = () => {
    const amount = number * 3700
    const doc = new jsPDF();

    doc.text('Egg Order', 10, 10);
    doc.text(`Name: ${firstname} ${lastname}`, 10, 20);
    doc.text(`Amount: ${number}`, 10, 30);
    doc.text(`Date: ${amount}`, 10, 40);

    doc.save('receipt.pdf');
  };

  return (
    <div className="FormBody">
      <h1>Place Your Egg Orders</h1>
      <form action="" method="" onSubmit={handleSubmit} >
          <fieldset>
            <field className="firstname">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                id="firstname"
                value={firstname}
                name="firstname"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </field>
            <field className="lastname">
              <label htmlFor="lastname">Last Name</label>
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
              <label htmlFor="number">Number Of Crates</label>
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
          </fieldset>
      </form>

      <p className="prologue">
        I, { firstname } { lastname } would like to order a total of {number} crates of eggs at the current price of #3,700.
        And i would be making a transaction of {number * 3700 } in which my purchase receipt would be generated below.
      </p>
      <button onClick={generatePDF}>Generate Your Receipt</button>
    </div>
  );
}
