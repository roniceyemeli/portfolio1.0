import { useState } from "react";
import "./contact.scss"

const Contact = () => {
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" required/>
                    <textarea placeholder="Message" required></textarea>
                    <input className="btn" type="button" value='send'/>
                    {message && <span>Thanks I'll reply ASAP  </span> }
                </form>
            </div>
        </div>
    )
}

export default Contact
