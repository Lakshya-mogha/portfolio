import Intro from './components/intro/intro';
import Projects from './components/projects/projects';
import Skills from './components/skills/Skills';
import Footer from './components/footer/footer';
import AboutMe from './components/AboutMe';



function App() {
  return (
   <>
{/* <div className="min-h-screen bg-gray-900 text-white font-sans"> */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <nav>
          <ul className="flex justify-center space-x-4">
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>
   <Intro/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
   <Skills/>
   <Projects/>
   <AboutMe/>
 


       

        

        {/* <section id="contact" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors">Submit</button>
          </form>
        </section> */}
      </main>

      {/* <footer className="bg-gray-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <p className="text-sm">© 2024 Lakshya Mogha. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:lakshyamogha1@gmail.com" className="text-gray-400 hover:text-white transition-colors">✉️</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">🐙</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">🔗</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">🐦</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">📷</a>
          </div>
        </div>
      </footer> */}
    {/* </div> */}
    <Footer/> 
   </>
  );
}

export default App;
