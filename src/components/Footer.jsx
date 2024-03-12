import React from "react";

const Footer = () => {
	return (
		<footer className=" py-20 z-[-1]">
			<div className="container mx-auto px-4 flex flex-col justify-between items-center h-full">
				<div>
					<h1 className="text-red-600 text-2xl font-body translate-x-[-40px]">
						Yusupov Dilshodbek
					</h1>
					<img
						src="src/images/photo_2024-02-24_01-14-29.jpg"
						alt=""
						className="w-[120px] h-[150px] rounded-full "
					/>
					<p className="text-white-900 text-lg font-body">Web Developer</p>
				</div>
				<div className="mt-auto">
					<ul className="flex space-x-4">
						<li>
							<a
								href="https://t.me/Nightwing2531"
								className="text-white hover:text-gray-200 transition duration-300"
							>
								<img
									src="https://stihi.ru/pics/2022/08/06/5126.jpg"
									alt="Telegram"
									className="inline-block w-6 h-6 mr-2 rounded-2xl"
								/>
								Telegram
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/"
								className="text-white hover:text-gray-200 transition duration-300"
							>
								<img
									src="https://e7.pngegg.com/pngimages/145/659/png-clipart-computer-icons-instagram-encapsulated-postscript-instagram-cdr-text.png"
									alt="Instagram"
									className="inline-block w-8 h-7 mr-2 rounded-full"
								/>
								Instagram
							</a>
						</li>
						<li>
							<a
								href="Email:yusupovdilshod600@gmail.com"
								className="text-white hover:text-gray-200 transition duration-300"
							>
								Email
							</a>
						</li>
						<li>
							<a href="/contact" className="text-white hover:text-gray-200 transition duration-300">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
