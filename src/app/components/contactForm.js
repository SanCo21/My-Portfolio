import { useState } from "react";

const ContactForm = ({ lang }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    if (fieldName === 'name') {
      if (!value) {
        newErrors.name = lang === "fr" ? "Veuillez saisir votre nom" : "Please enter your name";
      } else {
        delete newErrors.name;
      }
    }

    if (fieldName === 'email') {
      if (!value) {
        newErrors.email = lang === "fr" ? "Veuillez saisir votre adresse email" : "Please enter your email address";
      } else if (!emailRegex.test(value)) {
        newErrors.email = lang === "fr" ? "Adresse email invalide" : "Invalid email address";
      } else {
        delete newErrors.email;
      }
    }

    if (fieldName === 'message') {
      if (!value) {
        newErrors.message = lang === "fr" ? "Veuillez saisir votre message" : "Please enter your message";
      } else {
        delete newErrors.message;
      }
    }

    setErrors(newErrors);
    checkFormValidity(newErrors);
  };

  const checkFormValidity = (newErrors) => {
    const isValid = Object.keys(newErrors).length === 0 && name && email && message;
    setIsFormValid(isValid);
  };

  const handleBlur = (fieldName, value) => {
    validateField(fieldName, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setShowConfirmation(false);
      return;
    }

    setIsLoading(true);

    // Logique d'envoi du formulaire ici
    await fetch('https://formspree.io/f/mgvejwjb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    setIsLoading(false);

    // Réinitialiser les champs du formulaire
    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
    setIsFormValid(false);

    // Afficher le message de confirmation
    setConfirmationMessage(lang === 'fr' ? 'Merci, votre message a été envoyé !' : 'Thank you, your message has been sent!');
    setShowConfirmation(true);

    // Masquer le message de confirmation après 5 secondes
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  };

  return (
    <div className="mt-10 flex max-w-xl justify-center mx-auto w-full">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-4 w-full"
      >
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-1 text-lg font-medium text-primary text-left"
          >
            {lang === "fr" ? "Nom" : "Name"}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={(e) => handleBlur('name', e.target.value)}
            className={`p-2 border rounded focus:outline-none focus:border-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-1 text-lg font-medium text-primary text-left"
          >
            {lang === "fr" ? "Email" : "Email"}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={(e) => handleBlur('email', e.target.value)}
            className={`p-2 border rounded focus:outline-none focus:border-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="mb-1 text-lg font-medium text-primary text-left"
          >
            {lang === "fr" ? "Message" : "Message"}
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={(e) => handleBlur('message', e.target.value)}
            className={`p-2 border rounded focus:outline-none focus:border-blue-500 h-32 ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <div>
          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`px-4 py-2 ${isFormValid ? 'bg-primary hover:bg-blue-700' : 'bg-gray-400'} text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-transform transform hover:scale-105`}
          >
            {isLoading ? (lang === "fr" ? "Envoi en cours..." : "Sending...") : (lang === "fr" ? "Envoyer" : "Send")}
          </button>
        </div>
        {confirmationMessage && !isLoading && (
          <div className={`mt-4 p-2 bg-green-200 text-green-800 rounded ${showConfirmation ? 'fade-in' : 'fade-out'}`}>
            {confirmationMessage}
          </div>
        )}
        <div className="mb-4">
          <p className="text-sm text-primary">
            Vos informations personnelles seront uniquement utilisées pour traiter votre demande.{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
