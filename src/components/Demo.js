import React from 'react'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Demo.css'

const Contact = () => {
  
  const form = useRef()

 

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_xpm51v6",
        "template_c6b4lpl",
        form.current,
        "tFAJmHj4bU_mGSiHs"
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page" id='contact'>
        <div className="text-zone">
          <h1>
           
            
          </h1>
          <p>
            If interested in scheduleing a phone call, zoom meeting,
             or would like any other info, please feel free to send me a message!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li className='half'>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
       
        
      </div>
     
    </>
  )
}

export default Contact