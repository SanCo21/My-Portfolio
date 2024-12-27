import { useState } from "react";

const ContactForm = ({ lang }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://formspree.io/f/mgvejwjb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    setName("");
    setEmail("");
    setMessage("");

    setConfirmationMessage(
      lang === "fr"
        ? "Merci, votre message a été envoyé !"
        : "Thank you, your message has been sent!"
    );

    setTimeout(() => {
      setConfirmationMessage("");
    }, 5000);
  };
  return (
    // <div className="mt-20 flex flex-col justify-center w-full">
    <div className="mt-10 flex max-w-xl justify-center mx-auto w-full">
      <form
        // action="https://formspree.io/f/mgvejwjb"
        // method="POST"
        onSubmit={handleSubmit}
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
            required
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
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
            required
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
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
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-32 "
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition-transform transform hover:scale-105"
          >
            {lang === "fr" ? "Envoyer" : "Send"}
          </button>
        </div>
        {confirmationMessage && (
          <div className="mt-4 p-2 bg-accent text-primary rounded">            
            {confirmationMessage}
          </div>
        )}
        <div className="mb-4">
          <p className="text-sm text-primary">
            Vos informations personnelles seront uniquement utilisées pour
            traiter votre demande.
          </p>
        </div>
      </form>
    </div>
    // </div>
  );
};

export default ContactForm;
