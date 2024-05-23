import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
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
    <div className="ContactBody">
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
      <div className="addressinfo">
        <p>
          You can get in touch with us using our various platforms
        </p>
        <p className="numbers">
          <FontAwesomeIcon icon={faPhone} /><span><Link to="tel:08063114697">+(234)-8063114697</Link></span>
          <FontAwesomeIcon icon={faPhone} /><span><Link to="tel:08071668236">+(234)-8071668236</Link></span>
          <FontAwesomeIcon icon={faPhone} /><span><Link to="tel:08066386024">+(234)- 8066386024</Link></span>
        </p>
        <p className="emailsend">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>
            <Link to="mailto:olasehindemichael285@gmail.com">Click to Send an Email</Link>
          </span>
        </p>
        <p className="whatsapp">
          <FontAwesomeIcon icon={faWhatsapp} /><span><Link to="https://wa.link/7j0gz2">+(234)-8071668236</Link></span>
        </p>
      </div>
    </div>
  )
};
