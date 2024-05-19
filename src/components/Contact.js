import { useState } from "react"

export default function Contact() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("")
    setEmail("")
    setComment("")
    
  }
 
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <fieldset className="contact">
          <div className="formorder">
            <field>
              <label htmlFor="name">Name<sup className="ast">*</sup></label>
              <input type='text' id="name" value={name} onChange={(e) => setName(e.target.value)} min={3} />
            </field>
            <field>
              <label htmlFor="email">Email<sup className="ast">*</sup></label>
              <input type='email' id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </field>
            <field>
              <label htmlFor="comment">Comment<sup className="ast">*</sup></label>
              <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
            </field>
            <button type="submit" className="feedbtn" onClick={handleSubmit}>Send Feedback</button>
          </div>
        </fieldset>
      </form>
    </div>
  )  
};
