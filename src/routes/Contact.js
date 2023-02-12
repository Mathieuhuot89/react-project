import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'
import ContactImg from '../assets/contact1.jpg'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <>
    <Navbar />
    <Welcome    
        cName= 'welcome-contact'
        welcomeImg={ContactImg}
        title = 'Contact'
     />
     <ContactForm/>
    </>
  )
}

export default Contact
