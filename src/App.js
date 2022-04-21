import React from "react";
import { Blog, Features, Footer, Header, Possibility, Whatgpt3 } from './containers';
import { Cta, Brand, Navbar } from './components';
import './styles/global.css';

function App() {
  return (
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand /> {/* Marcas Asociadas */}
        <Whatgpt3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
  );
}

export default App;
