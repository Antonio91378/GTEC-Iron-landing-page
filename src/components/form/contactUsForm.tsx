"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contactUsForm.css";

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
          publicKey: "YOUR_PUBLIC_KEY",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label htmlFor="user_name">Seu Nome</label>
      <input type="text" id="user_name" name="user_name" />
      <label htmlFor="user_email">Seu email/ Telefone</label>
      <input type="email" id="user_email" name="user_email" />
      <label htmlFor="message">Mensagem</label>
      <textarea id="message" name="message" rows={4} />
      <input type="submit" value="Enviar" className="submit-button" />
    </form>
  );
};

export default ContactUs;
