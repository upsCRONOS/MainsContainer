import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="App bg-gradient-to-r from-indigo-600 ">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="About" element={<About />} />
					<Route path="Contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
};

export default App;
