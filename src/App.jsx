  import React from "react";
import emailjs from "emailjs-com";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY    // ✔ MUST be inside quotes
    )
    .then(
      () => {
        alert("Message sent successfully!");
      },
      (error) => {
        console.error(error);
        alert("Failed to send message. Try again!");
      }
    );

  e.target.reset(); // Clear fields
}

  export default function App() {
    return (
      <div className="min-h-screen bg-[#0e0f11] text-gray-200 font-sans antialiased">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-6 border-b border-gray-800 bg-[#111317]">
          <div>
            <h1 className="text-3xl font-extrabold">Anshul Wankhede</h1>
            <p className="text-sm text-gray-400">Full Stack Developer • Java • Spring Boot • React</p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:anshul02.jnv@gmail.com"
              className="px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/anshul-wankhede-023b63155"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-6xl mx-auto px-6 py-10">
          {/* Hero / About */}
          <section className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-3">Hi — I’m Anshul</h2>
              <p className="text-gray-300 leading-relaxed">
                I build scalable, high-performance applications using Java, Spring Boot and modern front-end
                frameworks. I enjoy turning product ideas into reliable APIs and clean front-end experiences.
                My background in Automobile Engineering gives me a strong systems-thinking approach to problem solving.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#14161b] p-4 rounded-xl border border-gray-700">
                  <h4 className="text-sm text-gray-400">Location</h4>
                  <p className="mt-1">Pune, Maharashtra, India</p>
                </div>

                <div className="bg-[#14161b] p-4 rounded-xl border border-gray-700">
                  <h4 className="text-sm text-gray-400">Top Skills</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="px-3 py-1 border rounded-full text-sm">Java</span>
                    <span className="px-3 py-1 border rounded-full text-sm">Spring Boot</span>
                    <span className="px-3 py-1 border rounded-full text-sm">React</span>
                    <span className="px-3 py-1 border rounded-full text-sm">Tailwind</span>
                    <span className="px-3 py-1 border rounded-full text-sm">REST APIs</span>
                    <span className="px-3 py-1 border rounded-full text-sm">Data Analytics</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="/_Anshul R. Wankhede-Resume (3).pdf"
                  className="px-4 py-2 text-sm rounded-lg border border-gray-700 hover:bg-gray-800 transition"
                  download >
                  Download Resume
                </a>
                
                <a href="#projects" className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
                  View Projects
                </a>
              </div>
            </div>

            <aside className="bg-[#14161b] p-6 rounded-2xl border border-gray-700">
              <h3 className="text-lg font-semibold">Experience</h3>

              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-semibold">Thunder Cube Pvt. Ltd.</h4>
                  <p className="text-sm text-gray-400">Full Stack Development Intern • Jun 2023 - Nov 2023</p>
                  <p className="mt-1 text-sm text-gray-300">Built full-stack apps with Spring Boot & Angular, contributed to API design and responsive UI components.</p>
                </div>

                <div>
                  <h4 className="font-semibold">BYJU'S</h4>
                  <p className="text-sm text-gray-400">Business Development Executive • Dec 2021 - Mar 2022</p>
                  <p className="mt-1 text-sm text-gray-300">Strengthened communication and stakeholder handling skills.</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Education</h3>
                <p className="mt-2 text-sm">B.Tech — Savitribai Phule Pune University (2019 - 2023)</p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold">Certifications</h3>
                <ul className="mt-2 text-sm list-disc list-inside space-y-1">
                  <li>Full Stack Programming (Java)</li>
                  <li>Build a Backend REST API with Node.js</li>
                  <li>Introduction to Programming Using Python</li>
                </ul>
              </div>
            </aside>
          </section>

          {/* Projects */}
          <section id="projects" className="mt-10">
            <h2 className="text-2xl font-bold border-l-4 border-indigo-500 pl-3 mb-4">Selected Projects</h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <article className="bg-[#14161b] p-5 rounded-2xl border border-gray-700">
                <h3 className="font-semibold">Battery Cooling System Optimization (EV)</h3>
                <p className="text-sm text-gray-300 mt-2">Worked on Arduino code and testing to optimize battery cooling; measured performance improvements and validated thermal models.</p>
                <div className="mt-3 flex gap-2 text-xs">
                  <span className="px-2 py-1 border rounded">Arduino</span>
                  <span className="px-2 py-1 border rounded">Testing</span>
                </div>
              </article>

              <article className="bg-[#14161b] p-5 rounded-2xl border border-gray-700">
                <h3 className="font-semibold">Vehicle Data Analytics</h3>
                <p className="text-sm text-gray-300 mt-2">Analyzed vehicle datasets to extract insights; used Python and visualization tools to support decision-making.</p>
                <div className="mt-3 flex gap-2 text-xs">
                  <span className="px-2 py-1 border rounded">Python</span>
                  <span className="px-2 py-1 border rounded">Data Analytics</span>
                </div>
              </article>

              <article className="bg-[#14161b] p-5 rounded-2xl border border-gray-700">
                <h3 className="font-semibold">Healthcare App Integration (EPIC Simulation)</h3>
                <p className="text-sm text-gray-300 mt-2">Simulated integration with EPIC systems and worked on data exchange and workflow integration.</p>
                <div className="mt-3 flex gap-2 text-xs">
                  <span className="px-2 py-1 border rounded">Integration</span>
                  <span className="px-2 py-1 border rounded">APIs</span>
                </div>
              </article>

              <article className="bg-[#14161b] p-5 rounded-2xl border border-gray-700">
                <h3 className="font-semibold">Order Management & Hospital Management Systems</h3>
                <p className="text-sm text-gray-300 mt-2">Built core modules, REST endpoints and UI screens as part of team projects focused on business workflows.</p>
                <div className="mt-3 flex gap-2 text-xs">
                  <span className="px-2 py-1 border rounded">Java</span>
                  <span className="px-2 py-1 border rounded">REST</span>
                </div>
              </article>
            </div>
          </section>

          {/* Skills & Tools */}
          <section className="mt-10 bg-[#14161b] p-6 rounded-2xl border border-gray-700">
            <h2 className="text-2xl font-bold mb-4">Skills & Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <div className="p-3 border rounded">Java</div>
              <div className="p-3 border rounded">Spring Boot</div>
              <div className="p-3 border rounded">React</div>
              <div className="p-3 border rounded">Tailwind CSS</div>
              <div className="p-3 border rounded">Node.js</div>
              <div className="p-3 border rounded">REST APIs</div>
              <div className="p-3 border rounded">Git</div>
              <div className="p-3 border rounded">Azure / Dev Tools</div>
            </div>
          </section>

          {/* Contact CTA
          <section className="mt-10 text-center">
            <h2 className="text-2xl font-bold">Let’s build something together</h2>
            <p className="mt-2 text-gray-400">I’m available for full-time roles, internships and freelance work.</p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="mailto:anshul02.jnv@gmail.com?subject=Opportunity" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">Contact Me</a>
              <a href="https://www.linkedin.com/in/anshul-wankhede-023b63155" target="_blank" rel="noreferrer" className="px-6 py-3 border rounded-lg">LinkedIn</a>
            </div>
          </section> */}
            {/* Contact Form */}
  <section id="contact" className="mt-16 max-w-xl mx-auto bg-[#14161b] p-6 rounded-2xl border border-gray-700">
    <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
    <p className="text-center text-gray-400 mb-6">Have a project or opportunity? Send me a message!</p>

    <form id="contact-form" onSubmit={sendEmail} className="space-y-4">
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        required
        className="w-full p-3 rounded-lg bg-[#0e0f11] border border-gray-700"
      />
      <input
        type="email"
        name="reply_to"
        placeholder="Your Email"
        required
        className="w-full p-3 rounded-lg bg-[#0e0f11] border border-gray-700"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="4"
        required
        className="w-full p-3 rounded-lg bg-[#0e0f11] border border-gray-700"
      />
      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Send Message
      </button>
    </form>
  </section>

          
        </main>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-500 border-t border-gray-800 mt-10">
          © {new Date().getFullYear()} Anshul Wankhede — Developer Portfolio
        </footer>
      </div>
    );
  
}       