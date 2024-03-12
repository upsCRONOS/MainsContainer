import React from "react";

const Home = () => {
	return (
		<div className="font-body flex flex-col justify-center items-center h-screen">
			<div className="flex items-center justify-center h-56 animate-pulse">
				<h1 className="text-5xl animate-bounce">Welcome to my Portfolio</h1>
			</div>
			<div className="flex-grow w-full max-w-screen-2xl mt-[50px]">
				<video autoPlay loop className="w-full h-full object-cover">
					<source
						src="https://v4.cdnpk.net/videvo_files/video/free/video0464/large_preview/_import_61160c21dcb471.68742356.mp4"
						className=""
					></source>
				</video>
			</div>
		</div>
	);
};

export default Home;
