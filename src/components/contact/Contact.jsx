import React, { useState, useEffect } from 'react';
import '@emailjs/browser/dist/email';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  useEffect(() => {
    const nameInput = document.getElementById('name');
    const handleNameChange = (e) => {
      const value = e.target.value;
      setName(value);
      setIsValid((prevState) => ({ ...prevState, name: value.length > 1 }));
    };

    nameInput.addEventListener('input', handleNameChange);

    return () => {
      nameInput.removeEventListener('input', handleNameChange);
    };
  }, []);

  const checkAllInputs = () => {
    const isValidName = name.length > 1;
    const isValidEmail = email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const isValidSubject = subject.length > 2;
    const isValidMessage = message.split(' ').length > 5;

    setIsValid({
      name: isValidName,
      email: isValidEmail,
      subject: isValidSubject,
      message: isValidMessage,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact_form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const submitButton = document.getElementById('send');
    const thanksMessage = document.querySelector('.thanks');
    const spinner = document.querySelector('.spinner-border');
    const charCounter = document.querySelector('.valid-feedback');

    // Get client location
    let location;
    const IP_API_KEY = import.meta.env.VITE_IP_API_KEY;
    const IP_API = `https://api.ipregistry.co/?key=${IP_API_KEY}`;
  
    try {
      const response = await fetch(IP_API);
      const payload = await response.json();
      location = `${payload.location.country.flag.emoji} ${payload.location.city}, ${payload.location.latitude} ${payload.location.longitude}`;
    } catch (error) {
      console.error('Error fetching location:', error);
      // Handle the error as needed
    }

    // Set up emailjs
    const EMAILJS_ID = import.meta.env.VITE_EMAILJS_ID;
    const CONTACT_SERVICE = import.meta.env.VITE_CONTACT_SERVICE;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const EMAIL_API = 'https://api.emailjs.com/api/v1.0/email/send';
  
    const data = {
      service_id: CONTACT_SERVICE,
      template_id: TEMPLATE_ID,
      user_id: EMAILJS_ID,
      template_params: {
        location: String(location),
        name: nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        message: messageInput.value,
      },
    };    

    // Send email
    try {
      const response = await fetch(EMAIL_API, {
        method: 'POST',
        body: JSON.stringify(data),
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        spinner.style.display = 'none';
        thanksMessage.style.display = 'block';
        contactForm.reset();
        [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
          input.classList.remove('is-valid');
        });
      } else {
        throw new Error('Email sending failed');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Something went wrong!! Please try again.');
    }
  };

  return (
    <div id="contact">
      <section>
        <div className="container">
          <h1>CONTACT ME</h1>
          <div className="row">
            <div className="hello mb-4 mb-lg-0 col-12 col-lg-4 d-grid align-content-center" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true" >
              <span>HAVE AN IDEA? 🤔</span>
              <p>Let's make it real! 🤓</p>
              <div className="mt-5 more_info">
                <p><i className="bi bi-geo-alt custom-color me-2 fs-5"></i>Buenos Aires, ARGENTINA ⭐⭐⭐</p>
                <p><i className="bi bi-envelope-fill custom-color me-2 fs-5"></i>djinsaurralde38@gmail.com</p>
              </div>
            </div>
            <div className="contact_form col-12 col-lg-8 d-grid align-content-center">
              <form action="" id="contact_form" name="portfolio_form" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true" onSubmit={sendEmail} >
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        className={`form-control ${isValid.name ? 'is-valid' : (name && 'is-invalid')}`}
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value)
                          checkAllInputs()
                        }}
                        required
                      />
                      <label htmlFor="name" className="label">Name</label>
                      <div className="invalid-feedback small_label">
                        Please enter at least 2 characters
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                    <div className="form-floating">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        className={`form-control ${isValid.email ? 'is-valid' : (email && 'is-invalid')}`}
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value)
                          checkAllInputs()
                        }}
                        required
                      />
                      <label htmlFor="email" className="label">Email</label>
                      <div className="invalid-feedback small_label">
                        Please enter a valid email
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-12 mt-3">
                    <div className="form-floating">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        className={`form-control ${isValid.subject ? 'is-valid' : (subject && 'is-invalid')}`}
                        value={subject}
                        onChange={(e) => {
                          setSubject(e.target.value)
                          checkAllInputs()
                        }}                        
                        required
                      />
                      <label htmlFor="subject" className="label">Subject</label>
                      <div className="invalid-feedback small_label">Please enter a subject</div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-12 mt-3">
                    <div className="form-floating">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        className={`form-control ${isValid.message ? 'is-valid' : (message && 'is-invalid')}`}
                        rows="5"
                        maxLength="400"
                        style={{ maxHeight: '300px', minHeight: '200px' }}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value)
                          checkAllInputs()
                        }}
                        required
                      ></textarea>
                      <label htmlFor="message" className="label">Message</label>
                      <div className="invalid-feedback small_label">
                        Please enter more than 5 words.
                      </div>
                      <div className="valid-feedback text-end" style={{ fontFamily: 'sans-serif' }}></div>
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <p className="thanks">Thank you. I will reply soon.</p>
                  </div>
                  <div className="mt-3 text-center text-lg-end">
                    <button
                      className="btn rounded-pill mx-auto custom-btn"
                      type="submit"
                      id="send"
                      disabled={!isValid.name || !isValid.email || !isValid.subject || !isValid.message}
                    >
                      Send Message
                    </button>
                  </div>
                  <div className="spinner-border text-primary mx-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;