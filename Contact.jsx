import React from 'react'
import '../styles/contact.css'

const Contact = () => {
  return (
    <div className='contact' >
      <h1>Contact</h1>
      <div className="contact-inner">
        <form action=''>
          <div className="form-group">
            <label>Fullname</label>
            <input type="text" placeholder='Enter Fullname' />
          </div>
          <div className="form-group">
            <label>Email Id</label>
            <input type="email" placeholder='Enter Email id' />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="number" placeholder='Phone Number' />
          </div>
          <div className="form-group">
            <label>Any Queries</label>
            <input type="text" placeholder='Tell us about your Query' />
          </div>
          <div className="form-submit">
            <button type='submit'>SUBMIT</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Contact