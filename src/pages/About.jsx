import React from "react";

const About = () => {
	return (
		<div className="grid place-items-center gap-4 text-wrap text-slate-300 overflow-hidden">
			<br />
			<h1 className="font font-bold">About Me</h1>
			<p className="translate-x-5 font-extralight">
				Hello! My name is Dilshod I'm a junior web developer with a strong background in computer
				programming and web development. I am passionate about continual learning and sharing
				insights with others, and I dedicate myself to crafting innovative websites on a daily
				basis.
			</p>
			<p className="font-serif">
				To me, web development is an exhilarating and ever-evolving field that brings together
				design, technology, and functionality, driving my constant pursuit of growth and innovation
				on a global scale.
			</p>
			<p className="font-mono">
				If you're interested in utilizing my skills and experiences, I'd love to connect with you.
			</p>
			<br />
			<br />
			<h1 className="font-body text-7xl bg-gradient-to-r from-red-800 to-black-600 rounded-2xl animate-pulse scale-100">
				Skills
			</h1>
			<div className="font-body text-2xl bg-gradient-to-r from-blue-900 to-green-500 rounded-xl p-4">
				<h2 className="transform rotate-9">[My Skills]</h2>
				<ul>
					<li>
						<span className="">H</span>TML
					</li>
					<li>
						<span className="">C</span>SS
					</li>
					<li>
						<span className="">J</span>avaScript
					</li>
					<li>
						<span className="">F</span>ront-end Frameworks (React)
					</li>
					<li>
						<span className="">R</span>esponsive Design and CSS Frameworks (Bootstrap, Tailwind CSS)
					</li>
					<li>
						<span className="">S</span>tate Management (Redux)
					</li>
					<li>
						<span className="">V</span>ersion Control Systems (Git, GitHub)
					</li>
				</ul>
				<div className="flex justify-center items-center mt-5">
					<img
						src="https://cdn-edge.kwork.ru/pics/t3/63/14660870-1621420863.jpg"
						alt=""
						className="rounded-2xl mr-5 transform hover:scale-110 transition duration-300 ease-in-out"
					/>
					<img
						src="https://code4mk.gallerycdn.vsassets.io/extensions/code4mk/react-redux-snippets/0.0.3/1629204838618/Microsoft.VisualStudio.Services.Icons.Default"
						alt="react"
						className="rotate-90 mr-5 hover:rotate-180 transition duration-300 ease-in-out"
					/>
					<img
						src="https://i.morioh.com/2021/07/31/33c562b9.webp"
						alt=""
						className="hover:scale-75  rounded-2xl transition duration-300 ease-in-out"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
