
import React, { useState } from 'react';

const SubscribeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert('Please fill in all fields.');
      return;
    }

    // Construct WhatsApp message
    const message = `Hello, my name is ${name} and my email address is ${email}. I'd like to stay updated on your projects!`;
    const whatsappUrl = `https://wa.me/27603168301?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Show in-page confirmation
    setSubmitted(true);

    // Clear inputs
    setName('');
    setEmail('');
  };

  return (
    <section className="subscribe">
      <h2>Stay Connected</h2>
      <p>Join for updates on projects, music, and more.</p>

      {submitted ? (
        <p style={{ color: 'green', fontWeight: 'bold' }}>
          Thank you for subscribing! WhatsApp has been opened to confirm your subscription.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </section>
  );
};

export default SubscribeForm;
