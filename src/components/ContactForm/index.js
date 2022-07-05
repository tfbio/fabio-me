import { useEffect, useState } from 'react'
import styles from './Contact.module.scss'

// Usa o YUP para validação dos campos do form

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    setName('')
    setEmail('')
    setMessage('')
    Array.from(document.querySelectorAll('input')).forEach(input => (input.value = ""))
    Array.from(document.querySelectorAll('textarea')).forEach(input => (input.value = ""))
    setSent(false)
  }, [sent])

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

      //if response is shit, guard clause and alert
      if(response.status !== 200) {
        alert('Error trying to send message.')
      }

      setSent(true)
      alert('message was sent.')

      
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.formContainer}>
      <h1>Contact Me</h1>
      <div className={styles.fieldContainer}>
        <input 
          type="text"
          name='name'
          placeholder='Name'
          onChange={(e)=>{setName(e.target.value)}}
        />
      </div>
      <div className={styles.fieldContainer}>
        <input
          type="email"
          name='email'
          placeholder='Email'
          onChange={(e)=>{setEmail(e.target.value)}}
        />
      </div>
      <div className={styles.fieldContainer}>
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
    </div>
  )
}