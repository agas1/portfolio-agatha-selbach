import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, Send, Sparkles, CheckCircle, X, Loader2 } from 'lucide-react';
import { useState, useRef } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import emailjs from '@emailjs/browser';

// EmailJS Configuration - Replace with your own IDs from https://emailjs.com
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Create at EmailJS > Email Services
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Create at EmailJS > Email Templates
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Get from EmailJS > Account > API Keys

export function Contact() {
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    try {
      // Send email via EmailJS
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );

      setShowModal(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending email:', err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: 'agathaselbach26@gmail.com',
      link: 'mailto:agathaselbach26@gmail.com',
      gradient: 'from-purple-500 to-purple-400',
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      value: '+55 (51) 99269-5086',
      link: 'tel:+5551992695086',
      gradient: 'from-purple-400 to-purple-300',
    },
    {
      icon: MapPin,
      title: t('contact.location'),
      value: 'Porto Alegre, Brasil',
      link: null,
      gradient: 'from-purple-500 to-purple-400',
    },
  ];

  return (
    <section id="contact" className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Background effects - optimized */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[60px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[60px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="w-full max-w-[1400px] mx-auto px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6"
          >
            {t('contact.title')}
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              {t('contact.heading1')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {t('contact.heading2')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="group relative"
              >
                {/* Card glow */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-xl opacity-0 group-hover:opacity-50 blur transition-all duration-300`} />

                <div className="relative p-6 bg-gray-950 border border-gray-800 rounded-xl group-hover:border-transparent transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm mb-1">{item.title}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-white font-medium hover:text-gray-300 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative mt-8"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-purple-400 rounded-xl opacity-75 blur" />
              <div className="relative p-8 bg-gray-950 rounded-xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                  <span className="text-purple-400 font-medium text-sm">{t('contact.available')}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {t('contact.availableTitle')}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {t('contact.availableText')}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-3"
          >
            <div className="relative">
              {/* Form glow */}
              <div className="absolute -inset-0.5 bg-purple-500 rounded-2xl opacity-20 blur-xl" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative p-10 bg-gray-950/80 backdrop-blur-sm border border-gray-800 rounded-2xl"
              >
                <div className="space-y-6">
                  {/* Name field */}
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 transition-colors ${
                        focused === 'name' ? 'text-purple-400' : 'text-gray-400'
                      }`}
                    >
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required
                      className="w-full px-5 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-white placeholder-gray-600"
                      placeholder={t('contact.namePlaceholder')}
                    />
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 transition-colors ${
                        focused === 'email' ? 'text-cyan-400' : 'text-gray-400'
                      }`}
                    >
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      required
                      className="w-full px-5 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all text-white placeholder-gray-600"
                      placeholder={t('contact.emailPlaceholder')}
                    />
                  </div>

                  {/* Message field */}
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 transition-colors ${
                        focused === 'message' ? 'text-pink-400' : 'text-gray-400'
                      }`}
                    >
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      required
                      rows={6}
                      className="w-full px-5 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-all resize-none text-white placeholder-gray-600"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
                      {t('contact.errorMessage')}
                    </div>
                  )}

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className={`group relative w-full py-5 rounded-xl overflow-hidden ${isLoading ? 'cursor-not-allowed opacity-80' : ''}`}
                  >
                    {/* Button gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <span className="relative flex items-center justify-center gap-3 text-white font-semibold text-lg">
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          {t('contact.sending')}
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          {t('contact.send')}
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-2xl opacity-75 blur" />

              <div className="relative bg-gray-900 rounded-2xl p-8 border border-gray-800">
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Success icon */}
                <div className="flex justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15, stiffness: 300, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-center mb-3">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    {t('contact.modalTitle')}
                  </span>
                </h3>

                {/* Message */}
                <p className="text-gray-400 text-center mb-6 leading-relaxed">
                  {t('contact.modalMessage')}
                </p>

                {/* Close button */}
                <motion.button
                  onClick={closeModal}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold hover:from-purple-700 hover:to-purple-600 transition-all"
                >
                  {t('contact.modalClose')}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
