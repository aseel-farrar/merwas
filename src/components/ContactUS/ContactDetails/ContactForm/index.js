import React from 'react';
import styles from './ContactForm.module.scss';

const ContactForm = ({ handleSubmit }) => {
    return (
        <div className={styles.contactForm}>
            <h4 className={styles.title}>Have A Question?</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="types">Types</label>
                <select id="types" name="types">
                    <option value="complain">Complain</option>
                    <option value="feedback">Feedback</option>
                    <option value="inquiry">Inquiry</option>
                </select>
                <div className={styles.nameEmail}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                </div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Content"></textarea>
                <button type="submit" className={styles.sendButton}>SEND</button>
            </form>
        </div>
    );
};

export default ContactForm;
