import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, MapPin, Phone, Mail, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-space-gradient py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Let's discuss your project or just say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-panel p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <MessageSquare className="mr-2 text-neon-blue" size={20} />
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-space-blue/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-space-blue/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-space-blue/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all duration-300"
                  placeholder="Your message here..."
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-neon-gradient py-3 rounded-lg font-medium text-white flex items-center justify-center ${
                  isSubmitting || isSubmitted ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Sparkles className="mr-2" size={18} /> Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={18} /> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-6 text-gradient">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-space-blue text-neon-blue">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm text-white/70 mb-1">Email</h4>
                    <p className="font-medium">siddheshsulekar4@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-space-blue text-neon-purple">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm text-white/70 mb-1">Phone</h4>
                    <p className="font-medium">8468823037</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-space-blue text-neon-pink">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm text-white/70 mb-1">Location</h4>
                    <p className="font-medium">ganesh park,phulewadi,kolhapur,maharashtra</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Let's Create Something Amazing</h3>
              <p className="text-white/70 mb-6">
                Whether you have a project in mind or just want to chat about technology and design, 
                I'm always open to interesting conversations and collaborations.
              </p>
              
              <div className="text-sm text-white/60">
                <p>Available for freelance projects and full-time opportunities.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-neon-blue/5 filter blur-[120px]" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-neon-purple/5 filter blur-[100px]" />
      </div>
    </div>
  );
};

export default Contact;