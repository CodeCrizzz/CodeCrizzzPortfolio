import Reveal from "@/components/Reveal";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

// Main function component to display the contact page 
export default function Contact() {
  return (
    <main className="flex-1 w-full max-w-[900px] mx-auto my-12 px-5">
      <Reveal className="w-full">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl text-slate-800 dark:text-white font-bold mb-3">Get In Touch</h1>
          <p className="text-slate-500 dark:text-slate-300 text-lg">Have a project in mind or just want to say hi? Feel free to message me!</p>
        </header>

        {/* Grid layout for the contact information */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 mt-8">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-5 bg-white dark:bg-slate-800 p-5 rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-colors duration-300">
              <Mail className="text-2xl text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl box-content" size={24} />
              <div>
                <h3 className="text-[1.1rem] text-slate-800 dark:text-white font-bold mb-1">Gmail</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base break-all">natividadchristian670@gmail.com</p>
              </div>
            </div>

            {/* Location contact information */}
            <div className="flex items-center gap-5 bg-white dark:bg-slate-800 p-5 rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-colors duration-300">
              <MapPin className="text-2xl text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl box-content" size={24} />
              <div>
                <h3 className="text-[1.1rem] text-slate-800 dark:text-white font-bold mb-1">Location</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base">Sicayab, Dipolog City, Zamboanga Peninsula, Philippines</p>
              </div>
            </div>

            {/* LinkedIn contact information */}
            <div className="flex items-center gap-5 bg-white dark:bg-slate-800 p-5 rounded-[15px] shadow-[0_4px_15px_rgba(0,0,0,0.05)] transition-colors duration-300">
              <FaLinkedin className="text-2xl text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl box-content" size={24} />
              <div>
                <h3 className="text-[1.1rem] text-slate-800 dark:text-white font-bold mb-1">LinkedIn</h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base break-all">
                  <a href="https://www.linkedin.com/in/natividad-christian-s-a64161338" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    https://www.linkedin.com/in/natividad-christian-s-a64161338
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact form for the user to fill out */}
          <form action="#" className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex flex-col gap-5 transition-colors duration-300">
            <div className="w-full">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                className="w-full p-3 md:p-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-lg font-inherit text-base outline-none transition-colors duration-500 focus:border-blue-600 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-full">
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
                className="w-full p-3 md:p-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-lg font-inherit text-base outline-none transition-colors duration-500 focus:border-blue-600 dark:focus:border-blue-500"
              />
            </div>
            <div className="w-full">
              <textarea 
                placeholder="Your Message" 
                rows={5} 
                required 
                className="w-full p-3 md:p-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 rounded-lg font-inherit text-base outline-none transition-colors duration-500 focus:border-blue-600 dark:focus:border-blue-500 resize-y"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="mt-2 bg-blue-600 text-white py-3 px-8 rounded-lg font-bold transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_6px_-1px_rgba(37,99,235,0.2)] hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgba(37,99,235,0.4)] hover:brightness-110 self-start"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </main>
  );
}
