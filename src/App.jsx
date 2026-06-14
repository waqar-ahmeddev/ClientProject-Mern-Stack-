import React from 'react';
import Backgroundimage from './Components/Header/Backgroundimage';
import Backgroundimage2 from './Components/Next2page/Backgroundimage2';
import Backgroundimage3 from './Components/Next3page/Backgroundimage3';
import Backgroundimage4 from './Components/Next4page/Backgroundimage4';
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
      <section className="w-full min-h-screen relative z-20">
        <Backgroundimage3 />
      </section>
      <section className="w-full min-h-screen relative z-20">
        <Backgroundimage4 />
      </section>
    </div>
  );
}

export default App;