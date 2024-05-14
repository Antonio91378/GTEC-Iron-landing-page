"use client";
import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactUsForm.css";
import { Options } from "@emailjs/browser/es/types/Options";

interface CustomEmailOptions extends Options {
  message: string;
  from_name: string;
  recipient: string;
}

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [buttonText, setButtonText] = useState<string>("Enviar");
  const [buttonColor, setButtonColor] = useState<string>("");
  const [timer, setTimer] = useState<number>(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | undefined>(
    undefined
  );

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const messageValue = form.current.message.value;
      const fromNameValue = form.current.from_name.value;
      const recipientValue = form.current.recipient.value;

      const emailOptions: CustomEmailOptions = {
        message: messageValue,
        from_name: fromNameValue,
        recipient: recipientValue,
        publicKey: "9o2wLc_5XnvNV7WGO",
      };

      setButtonText("Enviando...");
      setButtonColor("#aaa");

      emailjs
        .sendForm(
          "service_sn0vc5p",
          "template_mgwtu7e",
          form.current,
          emailOptions
        )
        .then(
          () => {
            setButtonText("Enviado!");
            setButtonColor("#4CAF50");
            setTimer(20);
            const id = setInterval(() => {
              setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            setIntervalId(id);
          },
          (error) => {
            setButtonText("Erro");
            setButtonColor("#f44336");
            setTimer(5);
            const id = setInterval(() => {
              setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            setIntervalId(id);
          }
        );
    }
  };

  useEffect(() => {
    if (timer === 0 && intervalId) {
      clearInterval(intervalId);
      setButtonText("Enviar");
      setButtonColor("");
      setIntervalId(undefined);
    }
  }, [timer, intervalId]);

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label htmlFor="user_name">Seu Nome</label>
      <input type="text" id="user_name" name="from_name" />
      <label htmlFor="user_email">Seu email</label>
      <input type="email" id="user_email" name="recipient" />
      <label htmlFor="message">Mensagem</label>
      <textarea id="message" name="message" rows={4} />
      <input
        type="submit"
        value={buttonText}
        className="submit-button"
        disabled={buttonText === "Enviando..." || buttonText === "Enviado!"}
        style={{ backgroundColor: buttonColor }}
      />
      {(buttonText === "Enviando..." || buttonText === "Enviado!") &&
        ` (${timer}s)`}
    </form>
  );
};

export default ContactUs;
