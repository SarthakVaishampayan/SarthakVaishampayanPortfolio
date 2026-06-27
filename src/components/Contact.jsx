import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Code2 } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import Magnetic from './Magnetic';
import NoiseOverlay from './NoiseOverlay';
import { Parallax, Reveal } from './Animations';

const SocialButton = ({ href, icon: Icon, label }) => (
  <Magnetic>
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="w-14 h-14 rounded-full bg-[#15171f] border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 transition-all text-white shadow-xl"
    >
      <Icon size={22} />
    </a>
  </Magnetic>
);

export default function Contact() {
  const [status, setStatus] = useState('');
  const [ref, inView] = useInView({ threshold: 0.05 });

  // Web3Forms access key — replace with your actual key
  const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(e.target);
    formData.append('access_key', ACCESS_KEY);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus('Message Sent Successfully!');
        e.target.reset();
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('Something went wrong.');
      }
    } catch {
      setStatus('Error sending message.');
    }
  };

  return (
    <footer id="contact" className="pt-32 pb-10 px-6 lg:px-24 bg-[#1a1c26] border-t border-gray-800 relative z-10 overflow-hidden">
      <NoiseOverlay opacity={0.02} />
      <div ref={ref} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Reveal>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-white uppercase leading-[0.9]">
              Let's <br /> <span className="text-mint">Connect.</span>
            </h2>
          </Reveal>
          <p className="text-gray-400 text-xl mb-16 leading-relaxed max-w-md font-medium">
            I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>

          <div className="space-y-8 mb-16">
            <motion.div
              className="flex items-center gap-6 group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#15171f] border border-gray-800 flex items-center justify-center text-mint shrink-0 group-hover:bg-mint group-hover:text-black transition-all">
                <Mail size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Email</p>
                <a href={`mailto:${socialLinks.email}`} className="text-xs sm:text-sm md:text-xl font-bold hover:text-mint transition text-white break-all">
                  {socialLinks.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 group"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#15171f] border border-gray-800 flex items-center justify-center text-mint shrink-0 group-hover:bg-mint group-hover:text-black transition-all">
                <Phone size={24} strokeWidth={2} />
              </div>
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-1">Phone</p>
                <a href={`tel:${socialLinks.phone.replace(/\s/g, '')}`} className="text-xs sm:text-sm md:text-xl font-bold hover:text-mint transition text-white">
                  {socialLinks.phone}
                </a>
              </div>
            </motion.div>
          </div>

          <div>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Social Networks</p>
            <div className="flex flex-wrap gap-4">
              <SocialButton href={socialLinks.linkedin} icon={Linkedin} label="LinkedIn" />
              <SocialButton href={socialLinks.github} icon={Github} label="GitHub" />
              <SocialButton href={socialLinks.leetcode} icon={Code2} label="LeetCode" />
            </div>
          </div>
        </motion.div>

        <Parallax speed={0.15}>
        <motion.div
          className="bg-[#15171f] p-8 md:p-14 rounded-[3xl] border border-gray-800 shadow-2xl relative z-10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <form onSubmit={handleSubmit} className="space-y-8 flex flex-col h-full">
            {[ 
              { name: 'name', label: 'Your Name', type: 'text' },
              { name: 'email', label: 'Your Email', type: 'email' },
            ].map((field) => (
              <div key={field.name} className="group">
                <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold block mb-4">
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    className="w-full bg-transparent border-b-2 border-gray-800 py-3 text-white text-lg focus:outline-none transition-colors peer"
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] bg-mint w-0 peer-focus:w-full transition-all duration-500 ease-[0.16,1,0.3,1]" />
                </div>
              </div>
            ))}

            <div className="flex-grow group">
              <label className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold block mb-4">Your Message</label>
              <div className="relative">
                <textarea
                  name="message"
                  required
                  className="w-full bg-transparent border-b-2 border-gray-800 py-3 text-white text-lg focus:outline-none transition-colors resize-none h-32 peer"
                />
                <div className="absolute bottom-0 left-0 h-[2px] bg-mint w-0 peer-focus:w-full transition-all duration-500 ease-[0.16,1,0.3,1]" />
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-white text-black font-black tracking-[0.2em] uppercase py-5 rounded-full hover:bg-mint hover:scale-[1.02] transition-all mt-auto shadow-2xl text-sm"
              whileHover={{ scale: 1.02, backgroundColor: '#0be5ba' }}
              whileTap={{ scale: 0.98 }}
            >
              {status || 'Send Request'}
            </motion.button>
          </form>
        </motion.div>
      </Parallax>
      </div>

      <motion.div
        className="text-center mt-32 text-gray-600 text-xs font-bold uppercase tracking-[0.2em]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        © {new Date().getFullYear()} SARTHAK VAISHAMPAYAN. ALL RIGHTS RESERVED.
      </motion.div>
    </footer>
  );
}
