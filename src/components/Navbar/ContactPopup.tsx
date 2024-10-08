// src/components/ContactPopup.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { KEYS_EMAIL_JS } from '../../constant/emailJS';
import { Button } from '@headlessui/react';

interface ContactPopupProps {
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
  honeypot: string;
  securityAnswer: string; 
}

const ContactPopup: React.FC<ContactPopupProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    honeypot: '',
    securityAnswer: '' 
  });
  const [emailSent, setEmailSent] = useState<boolean>(false);

  // Génère une question de sécurité simple
  const generateSecurityQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return {
      question: `Combien font ${num1} + ${num2}?`,
      answer: (num1 + num2).toString()
    };
  };

  const [securityQuestion] = useState<{ question: string; answer: string }>(generateSecurityQuestion());

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Vérifiez si le champ Honeypot est rempli ou si la réponse à la question de sécurité est incorrecte
    if (formData.honeypot || formData.securityAnswer !== securityQuestion.answer) {
      alert('Réponse incorrecte.');
      return;
    }

    emailjs.send(KEYS_EMAIL_JS.SERVICE_ID, KEYS_EMAIL_JS.TEMPLATE_ID, { ...formData }, KEYS_EMAIL_JS.USER_ID)
      .then(() => {
        setEmailSent(true);
      }, (error) => {
        console.error('Échec de l\'envoi de l\'email :', error);
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="relative bg-gray-900 p-6 rounded shadow-lg w-11/12 max-w-lg text-white">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-300 p-1"
        >
          &times;
        </button>
        {emailSent ? (
          <p className="text-green-500">Merci ! Votre message a bien été envoyé.</p>
        ) : (
          <form onSubmit={handleSubmit} className="text-white">
            <h2 className="text-2xl mb-4">Me contacter !</h2>
            <div className="mb-4">
              <label className="block text-gray-300">Nom</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded bg-gray-800 text-white focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>
            {/* Champ Honeypot caché */}
            <div className="hidden">
              <label className="block text-gray-300">Ne remplissez pas ce champ</label>
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="w-full p-2 border border-gray-600 rounded bg-gray-800"
              />
            </div>
            {/* Question de sécurité */}
            <div className="mb-4 p-3 border border-orange-400 bg-gray-800 rounded">
              <h3 className="text-lg mb-2">🚨 Question de sécurité 🚨</h3>
              <label className="block text-gray-300">{securityQuestion.question}</label>
              <input
                type="text"
                name="securityAnswer"
                value={formData.securityAnswer}
                onChange={handleChange}
                className="w-full p-1 border border-gray-600 rounded bg-gray-800 text-white focus:border-orange-500 focus:ring-orange-500"
                required
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
                Envoyer le message
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPopup;
