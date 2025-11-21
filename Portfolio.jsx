import React from "react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 p-6 antialiased">
      <header className="max-w-5xl mx-auto flex items-center justify-between py-6">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Anshul Wankhede</h1>
          <p className="text-sm text-slate-600">Java Developer • Full‑Stack • RESTful APIs • JSON</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:anshul02.jnv@gmail.com" className="px-4 py-2 border rounded-lg text-sm hover:bg-slate-100">Email</a>
          <a href="https://www.linkedin.com/in/anshul-wankhede-023b63155" target="_blank" rel="noreferrer" className="px-4 py-2 bg-slate-800 text-white rounded-lg text-sm">LinkedIn</a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2 bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-bold">Hi — I’m Anshul</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">I build scalable, high-performance web applications using Java, Spring Boot and modern front-end stacks (Angular / JavaScript). I enjoy turning product ideas into reliable APIs and clean front-end experiences. My background in Automobile Engineering brings methodical problem solving and systems thinking to software projects.</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-semibold text-slate-600">Location</h3>
                <p className="mt-1">Pune, Maharashtra, India</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-600">Top Skills</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="px-3 py-1 border rounded-full text-sm">Java</span>
                  <span className="px-3 py-1 border rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 border rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 border rounded-full text-sm">Spring Boot</span>
                  <span className="px-3 py-1 border rounded-full text-sm">Angular</span>
                  <span className="px-3 py-1 border rounded-full text-sm">REST APIs</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-semibold text-slate-600">Summary</h3>
              <p className="mt-2 text-slate-700">Enthusiastic application developer with experience in full-stack development, RESTful WebServices and JSON. Experienced in building responsive front-end components and robust back-end services. Passionate about creating efficient systems and learning new technologies.</p>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="/mnt/data/Profile.pdf" className="px-4 py-2 border rounded-lg text-sm">Download Resume</a>
              <a href="#projects" className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm">View Projects</a>
            </div>
          </div>

          <aside className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-lg font-bold">Experience</h3>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold">Thunder Cube Pvt. Ltd.</h4>
                <p className="text-sm text-slate-600">Full Stack Development Intern • Jun 2023 - Nov 2023</p>
                <p className="mt-1 text-sm">Built full-stack apps with Spring Boot and Angular, contributed to API design and responsive UI components.</p>
              </div>

              <div>
                <h4 className="font-semibold">BYJU'S</h4>
                <p className="text-sm text-slate-600">Business Development Executive • Dec 2021 - Mar 2022</p>
                <p className="mt-1 text-sm">Consulted with customers and resolved queries — strengthened communication and stakeholder handling skills.</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold">Education</h3>
              <p className="mt-2 text-sm">B.Tech - Savitribai Phule Pune University (2019 - 2023)</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-bold">Certifications</h3>
              <ul className="mt-2 text-sm list-disc list-inside">
                <li>Full Stack Programming (Java)</li>
                <li>Build a Backend REST API with Node.js</li>
                <li>Introduction to Programming Using Python</li>
              </ul>
            </div>
          </aside>
        </section>

        <section id="projects" className="mt-10">
          <h2 className="text-2xl font-bold">Selected Projects</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            <article className="bg-white p-5 rounded-2xl shadow">
              <h3 className="font-semibold">Battery Cooling System Optimization (EV)</h3>
              <p className="text-sm text-slate-600 mt-2">Worked on Arduino code and testing to optimize battery cooling; measured performance improvements and validated thermal models.</p>
              <div className="mt-3 flex gap-2 text-xs">
                <span className="px-2 py-1 border rounded">Arduino</span>
                <span className="px-2 py-1 border rounded">Testing</span>
              </div>
            </article>

            <article className="bg-white p-5 rounded-2xl shadow">
              <h3 className="font-semibold">Vehicle Data Analytics</h3>
              <p className="text-sm text-slate-600 mt-2">Analyzed vehicle datasets to extract insights; used Python and visualization tools to support decision-making.</p>
              <div className="mt-3 flex gap-2 text-xs">
                <span className="px-2 py-1 border rounded">Python</span>
                <span className="px-2 py-1 border rounded">Data Analytics</span>
              </div>
            </article>

            <article className="bg-white p-5 rounded-2xl shadow">
              <h3 className="font-semibold">Healthcare App Integration (EPIC Simulation)</h3>
              <p className="text-sm text-slate-600 mt-2">Simulated integration with EPIC systems and worked on data exchange and workflow integration.</p>
              <div className="mt-3 flex gap-2 text-xs">
                <span className="px-2 py-1 border rounded">Integration</span>
                <span className="px-2 py-1 border rounded">APIs</span>
              </div>
            </article>

            <article className="bg-white p-5 rounded-2xl shadow">
              <h3 className="font-semibold">Order Management & Hospital Management Systems</h3>
              <p className="text-sm text-slate-600 mt-2">Built core modules, REST endpoints and UI screens as part of team projects focused on business workflows.</p>
              <div className="mt-3 flex gap-2 text-xs">
                <span className="px-2 py-1 border rounded">Java</span>
                <span className="px-2 py-1 border rounded">REST</span>
              </div>
            </article>
          </div>
        </section>

        <section className="mt-10 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">Skills & Tools</h2>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div className="p-3 border rounded">Java</div>
            <div className="p-3 border rounded">Spring Boot</div>
            <div className="p-3 border rounded">Angular</div>
            <div className="p-3 border rounded">JavaScript</div>
            <div className="p-3 border rounded">Node.js</div>
            <div className="p-3 border rounded">REST APIs</div>
            <div className="p-3 border rounded">Git</div>
            <div className="p-3 border rounded">Azure / DevTools</div>
          </div>
        </section>

        <section className="mt-10 text-center">
          <h2 className="text-2xl font-bold">Let’s build something together</h2>
          <p className="mt-2 text-slate-700">I’m available for full-time roles, internships and contract work. Send a message and I’ll reply ASAP.</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a href="mailto:anshul02.jnv@gmail.com?subject=Opportunity" className="px-6 py-3 bg-indigo-600 text-white rounded-lg">Contact Me</a>
            <a href="https://www.linkedin.com/in/anshul-wankhede-023b63155" target="_blank" rel="noreferrer" className="px-6 py-3 border rounded-lg">LinkedIn</a>
          </div>
        </section>

        <footer className="mt-12 mb-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Anshul Wankhede — Java Developer • Built with React + Tailwind
        </footer>
      </main>
    </div>
  );
}
