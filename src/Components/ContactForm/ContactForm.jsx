import "./ContactForm.css"

function ContactForm() {
  return (
    <div className='contactForm'>
      <h3 className="contact-title">Send Us A Message</h3>

      <form className="contact-form">
        <input className='form-input' type="text" placeholder='your name' name='name' required />
        <input className='form-input' type="email" placeholder='your email' name='email'required />
        <input className='form-input' type="text" placeholder='Subject' name='subjsect' required />
        <textarea className="text-area" name="message" placeholder='your message' required></textarea>
        <button type='submit' className="submit-btn">Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
