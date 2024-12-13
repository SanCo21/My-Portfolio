import Header from "./components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center mt-20">
        <section id="home" className="section">
          <h1 className="text-4xl font-bold text-blue-900">
            Welcome to My Portfolio !
          </h1>
          <p className="text-lg mt-4 text-blue-900">
            I am Sandra COLOMER, a web integrator passionate about creating
            dynamic and interactive websites.
          </p>
        </section>

        <section id="about" className="section mt-8">
          <h2 className="text-3xl font-bold text-blue-900">About Me</h2>
          <p className="text-lg mt-4 text-blue-900">
            Here is a brief introduction about myself...
          </p>
        </section>

        <section id="projects" className="section mt-8">
          <h2 className="text-3xl font-bold text-blue-900">Projects</h2>
          <p className="text-lg mt-4 text-blue-900">
            Some of the projects I have worked on include...
          </p>
        </section>

        <section id="contact" className="section mt-8">
          <h2 className="text-3xl font-bold text-blue-900">Contact</h2>
          <p className="text-lg mt-4 text-blue-900">
            Feel free to get in touch with me...
          </p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
