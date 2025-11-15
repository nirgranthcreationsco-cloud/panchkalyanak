'use client';
import { MapPin, MessageCircle, Send, User } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', city: '', whatsapp: '', interest: '' });

  const handleSubmit = () => {
    if (!formData.name || !formData.whatsapp) {
      alert('Please fill in your details 🙏');
      return;
    }
    alert(`🌸 Thank you, ${formData.name}! We’ll connect with you soon on WhatsApp.`);
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-amber-950 via-rose-950/90 to-amber-900 text-white">
      
      {/* ✨ Background divine aura */}
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-gradient-to-br from-amber-400/20 to-rose-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-gradient-to-tr from-rose-400/20 to-amber-400/20 rounded-full blur-[120px] animate-pulse delay-500" />
      </div>

      {/* 🌼 Heading */}
      <div className="relative z-10 text-center mb-16">
        <div className="text-6xl mb-4 animate-pulse">💌</div>
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-amber-300 via-rose-400 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(245,158,11,0.6)]">
          संपर्क करें (Get In Touch)
        </h2>
        <p className="mt-4 text-lg md:text-xl text-amber-100/90 font-light italic">
          हम आपकी सहभागिता और आशीर्वाद का स्वागत करते हैं ✨
        </p>
        <div className="mt-6 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* 🌷 Form Container */}
      <div className="relative z-10 max-w-4xl mx-auto bg-gradient-to-br from-white/10 via-amber-100/5 to-rose-100/5 border border-amber-400/40 backdrop-blur-2xl rounded-[2rem] shadow-[0_0_40px_rgba(245,158,11,0.3)] p-10 md:p-16">
        <div className="grid md:grid-cols-2 gap-8 mb-6">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-4 top-3.5 w-5 h-5 text-amber-300" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-amber-400/30 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-400 outline-none text-white placeholder-amber-200/60"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* City */}
          <div className="relative">
            <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-amber-300" />
            <input
              type="text"
              placeholder="City"
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-amber-400/30 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-400 outline-none text-white placeholder-amber-200/60"
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            />
          </div>
        </div>

        {/* WhatsApp */}
        <div className="relative mb-6">
          <MessageCircle className="absolute left-4 top-3.5 w-5 h-5 text-amber-300" />
          <input
            type="text"
            placeholder="WhatsApp Number"
            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-amber-400/30 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-400 outline-none text-white placeholder-amber-200/60"
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
          />
        </div>

        {/* Interest */}
        <div className="relative mb-10">
          <select
            className="w-full px-4 py-3 bg-white/5 border border-amber-400/30 rounded-xl focus:border-amber-500 focus:ring-1 focus:ring-amber-400 outline-none text-white placeholder-amber-200/60"
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
          >
            <option value="" className="text-gray-800">Select your interest</option>
            <option>Become a Yajman</option>
            <option>Volunteer for Seva</option>
            <option>Make a Donation</option>
            <option>Plan a Visit</option>
          </select>
        </div>

        {/* ✨ Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-4 text-lg font-bold bg-gradient-to-r from-amber-500 to-rose-600 text-white rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:shadow-[0_0_40px_rgba(245,158,11,0.8)] hover:scale-105 transition-all duration-500 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Submit Inquiry
        </button>
      </div>

      {/* 🌺 Footer Line */}
      <div className="relative mt-20 flex justify-center items-center">
        <div className="h-[2px] w-28 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent opacity-80" />
        <div className="mx-3 w-5 h-5 rotate-45 bg-gradient-to-br from-amber-400 to-rose-400 shadow-[0_0_20px_rgba(245,158,11,0.7)] rounded-sm" />
        <div className="h-[2px] w-28 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent opacity-80" />
      </div>
    </section>
  );
};

export default ContactSection;
