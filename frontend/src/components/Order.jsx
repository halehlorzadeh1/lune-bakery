import { useState } from 'react'
import styles from './Order.module.css'

const OCCASIONS = [
  'Personal order',
  'Birthday / celebration',
  'Wedding',
  'Corporate event',
  'Other',
]

export default function Order() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', occasion: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      setForm({ firstName: '', lastName: '', email: '', occasion: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section id="order" className={styles.section}>
      <div className={styles.info}>
        <span className={styles.label}>Commande</span>
        <h2 className={styles.title}>Place an<br /><em>order</em>.</h2>
        <p className={styles.body}>
          Orders require 48 hours notice. We do our best to accommodate
          last-minute requests — just ask.
        </p>
        <div className={styles.contactList}>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>Hours</span>
            <span className={styles.contactVal}>Tue – Fri: 7am – 5pm<br />Sat – Sun: 7am – 3pm</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>Phone</span>
            <span className={styles.contactVal}>(555) 000-0000</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>Email</span>
            <span className={styles.contactVal}>hello@lunebakery.com</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>Location</span>
            <span className={styles.contactVal}>Coming soon — stay tuned.</span>
          </div>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.group}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName" name="firstName" type="text"
              placeholder="Marie" required
              value={form.firstName} onChange={handleChange}
            />
          </div>
          <div className={styles.group}>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName" name="lastName" type="text"
              placeholder="Dupont" required
              value={form.lastName} onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.group}>
          <label htmlFor="email">Email</label>
          <input
            id="email" name="email" type="email"
            placeholder="marie@example.com" required
            value={form.email} onChange={handleChange}
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" name="occasion" value={form.occasion} onChange={handleChange}>
            <option value="">Select one</option>
            {OCCASIONS.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>

        <div className={styles.group}>
          <label htmlFor="message">What would you like?</label>
          <textarea
            id="message" name="message"
            placeholder="Tell us about your order, including quantity and any special requests…"
            required
            value={form.message} onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.submit} disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Send Enquiry'}
        </button>

        {status === 'success' && (
          <p className={styles.success}>Thank you — we'll be in touch within 24 hours.</p>
        )}
        {status === 'error' && (
          <p className={styles.error}>Something went wrong. Please try again or email us directly.</p>
        )}
      </form>
    </section>
  )
}
