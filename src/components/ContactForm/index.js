import { useState } from 'react'
import { FormContainer } from './styles'


// Usa o YUP para validação dos campos do form

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [hasSubmitted, setHasSubmitted] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    const body = { name, email, message }

    try {
      const response = await fetch('/api/contact-message', {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <FormContainer>
      <h1>Contact Me</h1>
      <div>
        <input 
          type="text"
          name='name'
          placeholder='Name'
          onChange={(e)=>{setName(e.target.value)}}
        />
      </div>
      <div>
        <input
          type="email"
          name='email'
          placeholder='Email'
          onChange={(e)=>{setEmail(e.target.value)}}
        />
      </div>
      <div>
        <textarea 
          name='message'
          placeholder='Message'
          cols="45" 
          rows="8"
          onChange={(e)=>{setMessage(e.target.value)}}
        />      
      </div>
      <button type='submit' onClick={(e)=>{handleSubmit(e)}}>
        <strong>Send</strong>
      </button>
    </FormContainer>
  )
}