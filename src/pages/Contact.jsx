import React from "react";

const Contact = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-semibold mb-4 text-center font-body">For communication</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
				<div className="col-span-full md:col-span-1 lg:col-span-1 bg-gray-100 p-4 rounded-md">
					<p className="text-lg text-gray-900 mb-2">
						Email:{" "}
						<a href="mailto:yusupovdilshod600@gmail.com" className="text-blue-600">
							yusupovdilshod600@gmail.com
						</a>
					</p>
				</div>
				<div className="col-span-full md:col-span-1 lg:col-span-1 bg-gray-100 p-4 rounded-md">
					<p className="text-lg text-gray-900 mb-2">
						Phone:{" "}
						<a href="tel:+998994901808" className="text-blue-900">
							+998(99) 490-18-08
						</a>
					</p>
				</div>
				<div className="col-span-full md:col-span-2 lg:col-span-1 bg-gray-100 p-4 rounded-lg">
					<p className="text-lg text-gray-900 mb-2">
						Telegram:{" "}
						<a href="https://t.me/Nightwing2531" className="text-blue-600">
							<img
								src="https://stihi.ru/pics/2022/08/06/5126.jpg"
								alt="Telegram"
								className="inline-block w-6 h-6 mr-2 rounded-2xl"
							/>
							My Profile
						</a>
					</p>
				</div>
				<div className="col-span-full bg-gray-100 p-4 rounded-lg ">
					<form>
						<label htmlFor="message" className="block text-lg text-gray-700 mb-2">
							Message:
						</label>
						<textarea
							id="message"
							name="message"
							rows="4"
							cols="50"
							className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
						></textarea>
						<button
							type="submit"
							className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-700 transition duration-300"
						>
							Send
						</button>
					</form>
				</div>
				<div className="col-span-full bg-gray-100 p-4 rounded-md">
					<p className="text-lg text-gray-900">
						Alternatively, you can submit your articles using{" "}
						<a href="/submit" className="text-blue-800">
							our submission form
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Contact;
