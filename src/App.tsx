/**
 * 
 * @copyright 2026 ChukwunoyeluMmesoma
 * @license Apache-2.0 
 */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

const Home = () => {
  return (
    <div className="">
      <Header />

      <main>
        <Hero />
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/sign-in" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
