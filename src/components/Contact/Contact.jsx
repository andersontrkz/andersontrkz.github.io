import { Box } from '@material-ui/core'

import ContactForm from './ContactForm'
import ContactMap from './ContactMap'
import './../styles/contact.css'

export default function Contact () {
  return (
    <Box className="main-contact-container">
      <Box className="contact-form-component">
        <ContactForm/>
      </Box>
      <Box className="contact-map-component">
        <ContactMap />
      </Box>
    </Box>
  )
}