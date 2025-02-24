import { useState } from 'react';

function Contact () {
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        message: '',

    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }; 

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submited!');
    };

    return (
        <div style={{padding: '20px'}}>
            <h1>Contact Us</h1>
            <form action="">
                <input type="text" 
                name = "name"
                placeholder = "Enter your name"
                value = {formData.name}
                onChange={handleChange}
                style={{display: 'block', margin: '10px 0'}}
                />

                <input type="email"
                name = "name"
                placeholder = "Your Email"
                value = {formData.email}
                onChange={handleChange}
                style={{display: 'block', margin: '10px 0'}}
                />

                <textarea
                 name="textarea" 
                 placeholder="Your Message"
                 value = {formData.message}
                 onChange={handleChange}
                 style={{display: 'block', margin: '10px 0'}}
                 />

                 <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;