import "./ContactFormStyles.css"

function ContactForm() {
  return (
    <div className="form-container">
        <h1>Send a message</h1>
        <form>
            <input placeholder="Name"/>
            <input placeholder="Lastname"/>
            <input placeholder="Email"/>
            <textarea placeholder="Your message" rows='3'></textarea>
            <button>Send</button>
        </form>
      
    </div>
  )
}

export default ContactForm


