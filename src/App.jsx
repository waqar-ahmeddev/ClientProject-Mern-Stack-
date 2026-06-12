import React from 'react';
import Backgroundimage from './Components/Header/Backgroundimage';
import Backgroundimage2 from './Components/Next2page/Backgroundimage2';

function App() {
  return (
    // overflow-x-hidden lagaya taaki left-right scroll bilkul block ho jaye
    <div className="w-full min-h-screen bg-black overflow-x-hidden m-0 p-0">
      
      {/* Page 1 Container */}
      <section className="w-full h-screen relative">
        <Backgroundimage />
      </section>

      {/* Page 2 Container - Isko h-screen se hata kar min-h-screen kiya taaki cards ki wajah se image background full cover kare */}
      <section className="w-full min-h-screen relative z-20">
        <Backgroundimage2 />
      </section>

    </div>
  );
}

export default App;