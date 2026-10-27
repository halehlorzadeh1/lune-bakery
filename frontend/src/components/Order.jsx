import { useState } from 'react'
import styles from './Order.module.css'

const OCCASIONS = [
  'Restaurant',
  'Hotel',
  'Corporate office',
  'Café or coffee shop',
  'Event planning company',
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
        <span className={styles.label}>Partenariat</span>
        <h2 className={styles.title}>Become a<br /><em>partner</em>.</h2>
        <p className={styles.body}>
          Tell us about your business and what you're looking for. We'll be in
          touch within 24 hours to discuss volumes, delivery, and pricing.
        </p>
        <div className={styles.contactList}>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>Delivery</span>
            <span className={styles.contactVal}>Mon – Sat: early morning<br />Custom schedules available</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>Minimums</span>
            <span className={styles.contactVal}>Flexible — let's talk</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>Email</span>
            <span className={styles.contactVal}>partners@lunebakery.com</span>
          </div>
          <div className={styles.contactRow}>
            <span className={styles.contactLabel}>Response</span>
            <span className={styles.contactVal}>Within 24 hours</span>
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
          <label htmlFor="occasion">Business Type</label>
          <select id="occasion" name="occasion" value={form.occasion} onChange={handleChange}>
            <option value="">Select one</option>
            {OCCASIONS.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>

        <div className={styles.group}>
          <label htmlFor="message">Tell us about your needs</label>
          <textarea
            id="message" name="message"
            placeholder="What pastries are you interested in? Estimated weekly volume? Delivery location and schedule? Any specific requirements…"
            required
            value={form.message} onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.submit} disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Send Partnership Enquiry'}
        </button>

        {status === 'success' && (
          <p className={styles.success}>Thank you — a member of our team will be in touch within 24 hours.</p>
        )}
        {status === 'error' && (
          <p className={styles.error}>Something went wrong. Please try again or email us directly.</p>
        )}
      </form>
    </section>
  )
}
