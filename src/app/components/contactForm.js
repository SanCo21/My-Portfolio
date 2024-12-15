

const ContactForm = ({ lang }) => {
  return (
    <form action="https://formspree.io/f/mgvejwjb" method="POST" className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 text-lg font-medium text-blue-900 text-start">{lang === 'fr' ? 'Nom' : 'Name'}</label>
        <input type="text" id="name" name="name" required className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-lg font-medium text-blue-900 text-start">{lang === 'fr' ? 'Email' : 'Email'}</label>
        <input type="email" id="email" name="email" required className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-1 text-lg font-medium text-blue-900 text-start">{lang === 'fr' ? 'Message' : 'Message'}</label>
        <textarea id="message" name="message" required className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 h-32"></textarea>
      </div>
      <div>
        <button type="submit" className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          {lang === 'fr' ? 'Envoyer' : 'Send'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
