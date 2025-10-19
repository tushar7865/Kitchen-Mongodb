import { useState } from 'react'
import { api } from '../api'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  function onChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function submit(e) {
    e.preventDefault()
    setStatus('')
    await api.sendContact(form)
    setForm({ name: '', email: '', message: '' })
    setStatus('Message sent!')
  }

  return (
    <section id="contact" className="section">
      <h2>Contact Us</h2>
      <div className="grid" style={{gridTemplateColumns: '2fr 1fr'}}>
        <form className="form" onSubmit={submit}>
          <div className="row">
            <div>
              <label>Your Name</label>
              <input name="name" required value={form.name} onChange={onChange} />
            </div>
            <div>
              <label>Your Email</label>
              <input type="email" name="email" required value={form.email} onChange={onChange} />
            </div>
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" rows={4} required value={form.message} onChange={onChange} />
          </div>
          <button type="submit">Send Message</button>
          {status && <p>{status}</p>}
        </form>

        <div>
          <p><strong>📍 Address:</strong> Warje, Pune, Maharashtra, India</p>
          <p><strong>📞 Phone:</strong> +91 9922425194</p>
          <p><strong>✉️ Email:</strong> meenakhadke123@gmail.com</p>
          <p><a href="https://wa.me/919922425194" target="_blank" rel="noreferrer">Chat on WhatsApp</a></p>
        </div>
      </div>
    </section>
  )
}

