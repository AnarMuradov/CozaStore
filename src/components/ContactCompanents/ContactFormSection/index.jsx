import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'

const ContactForm = () => {
  return (
    <section className='contactFormSection'>
        <div className='contactFormContainer'>
            <div className='formBlock'>
                <div className='formContainer'>
                    <span>Send Us A Message</span>
                    <input type="email"/>
                    <textarea name="" id="" cols="30" rows="10">

                    </textarea>
                    <Link>Submit</Link>


                </div>
            </div>
            <div className='contactBlock'>
                <div className='contactContainer'>
                    <div className='address'>
                    <i class="fa-solid fa-location-dot"></i>
                        <div className='addressInfo'>
                         <h4>Address</h4>
                         <p>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                        </div>
                    </div>

                    <div className='phone'>
                    <i class="fa-solid fa-phone"></i>
                        <div className='phoneInfo'>
                         <h4>Lets Talk</h4>
                         <Link>+1 800 1236879</Link>
                        </div>
                    </div>

                    <div className='email'>
                    <i class="fa-solid fa-envelope"></i>
                        <div className='emailName'>
                         <h4>Sale Support</h4>
                         <Link>contact@example.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default ContactForm