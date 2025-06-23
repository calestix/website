'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import moment from 'moment';
import logo1 from "../assests/logo.png";

const BrandedWhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const url = `https://wa.me/message/`;
    window.open(url, '_blank');
    setMessage('');
  };

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 cursor-pointer z-50"
      >
        <div className="relative w-16 h-16">
          <span className="absolute animate-ping bg-green-500 w-full h-full rounded-full opacity-75"></span>
          <div className="relative w-16 h-16 bg-green-500 p-2 rounded-full shadow-lg flex items-center justify-center">
           <FaWhatsapp size={40} />
          </div>
        </div>
      </div>

      {/* Chat Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-24 sm:right-20 right-10 sm:w-[320px] w-[250px] bg-white rounded-xl overflow-hidden shadow-2xl z-50"
          >
            {/* Header */}
            <div className="bg-[#075E54] text-white p-3 flex items-center gap-3">
              <Image
                src={logo1}
                alt="Braj Kunj"
                width={60}
                height={60}
                className="rounded-full bg-white p-1"
              />
              <div>
                <div className="font-bold">Celestix Technolgy</div>
                <div className="text-sm text-white/90">Welcome to Celestix Support</div>
              </div>
              <button onClick={() => setOpen(false)} className="ml-auto mt-[-40px] text-white text-xl">
                &times;
              </button>
            </div>

            {/* Messages */}
            <div
              className="bg-[url('/whatsapp-bg.png')] bg-cover p-3 min-h-[180px] text-sm"
              style={{ backgroundColor: '#efeae2' }}
            >
              <div className="bg-white rounded-lg shadow p-2 w-fit mb-2">
                <div className="font-semibold text-black mb-1">Braj Kunj</div>
                <div className='text-black'>Greetings! Please let us know what you are looking for</div>
                <div className="text-[10px] text-black text-right text-black-500 mt-1">{moment().format('LT')}✓✓</div>
              </div>
            </div>

            <form onSubmit={(e)=>handleSend(e)} className="flex items-center px-3 py-2 border-t gap-2">
              <input
                type="text"
                placeholder="How can we help you today?"
                className="flex-1 w-full p-2 rounded-full border border-green-300 text-sm text-black focus:outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="text-green-500">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BrandedWhatsAppWidget;
