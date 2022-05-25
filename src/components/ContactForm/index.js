import { FormContainer } from './styles'
export default function ContactForm() {
  return (
    <FormContainer>
      <h1>Contact Me</h1>
      <div>
        <input type="text" name='name' placeholder='Name'/>
      </div>
      <div>
        <input type="email" name='email' placeholder='Email'/>
      </div>
      <div>
        <textarea name='message' placeholder='Message' cols="45" rows="8"/>      
      </div>
      <button type='submit'>
        <strong>Send</strong>
      </button>
    </FormContainer>
  )
}