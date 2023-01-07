import "./App.css";
import Header from "./Components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import { useState } from "react";
import Context from "./Context/Context";

function App() {
  const [wallet, setWallet] = useState(null);
  return (
    <Context.Provider value={{ wallet, setWallet }}>
      <div className="w-screen flex flex-wrap m-0">
        <header className="w-screen h-auto">
          <Header />
        </header>

        <section className="w-10/12 mx-auto my-2 flex justify-center">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/AddReport" element={""} />
            <Route path="/Events" element={""} />
          </Routes>
        </section>
      </div>
    </Context.Provider>
  );
}

export default App;
