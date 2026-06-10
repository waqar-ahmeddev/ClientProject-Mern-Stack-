import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-md w-full bg-slate-800 rounded-xl shadow-2xl p-8 border border-slate-700 text-center transform transition all hover:scale-105 duration-300">
        
        {/* Tailwind Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-medium text-sm mb-6 border border-emerald-500/20 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          React + Tailwind CSS is Live
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Sab Sahi Chal Raha Hai! 🎉
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-base leading-relaxed mb-6">
          Agar aapko ye card center mein, rounded corners, shadow aur gradient text ke sath nazar aa raha hai, to iska matlab aapka Tailwind setup **100% working** hai.
        </p>

        {/* Test Button */}
        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg shadow-cyan-500/20 transition duration-200 active:scale-95">
          Let's Build Something Awesome 🚀
        </button>
        
      </div>
    </div>
  );
}

export default App;