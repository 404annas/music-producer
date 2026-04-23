"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(r => setTimeout(r, 2000));
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  };

  const labelStyle = "text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2 block";
  const inputStyle = "bg-transparent border-b border-white/30 py-2 focus:outline-none focus:border-[#AFD8FF] transition-colors text-sm w-full";

  return (
    <section className="text-white px-4 md:px-6 pb-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-10 border-b border-white/10 pb-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Contact Me</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div><label className={labelStyle}>Full Name</label><input required name="name" value={formData.name} onChange={handleChange} type="text" className={inputStyle} /></div>
            <div><label className={labelStyle}>Email</label><input required name="email" value={formData.email} onChange={handleChange} type="email" className={inputStyle} /></div>
            <div><label className={labelStyle}>Phone</label><input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className={inputStyle} /></div>
          </div>

          <div>
            <label className={labelStyle}>Message</label>
            <textarea required name="message" value={formData.message} onChange={handleChange} rows={6} className="bg-transparent border border-white/30 p-3 focus:outline-none focus:border-[#AFD8FF] text-sm w-full resize-none" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-sm font-bold uppercase tracking-wide text-[#ffffff]">
              {status === 'success' ? "✓ Message Sent Successfully! We'll get back to you soon." : "Let's create something fabulous together."}
            </p>

            <button type="submit" disabled={status === 'loading'} className="bg-white text-black px-14 py-4 rounded-full font-black uppercase text-sm cursor-pointer hover:scale-95 transition-all duration-300 flex items-center gap-4 transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
              {status === 'loading' ? <div className="w-4 h-4 border-2 border-black border-t-transparent animate-spin rounded-full" /> : null}
              {status === 'loading' ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;