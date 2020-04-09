import React, { useRef, useEffect } from "react";
import track from "../track.mp3";

export default function ExampleUseRef() {
	const audioRef = useRef(null);
	// console.log(audioRef);

	useEffect(() => {
		audioRef.current.play();
	}, []);

	const handleClickPause = () => {
		audioRef.current.pause();
	};
	const handleClickPlay = () => {
		audioRef.current.play();
	};
	return (
		<div className='container'>
			<h1>useRef</h1>
			<hr />
			<audio src={track} ref={audioRef} /*controls*/ />
			<button className='btn btn-warning' onClick={handleClickPause}>
				Pause Music
			</button>
			<button className='btn btn-success' onClick={handleClickPlay}>
				Play Music
			</button>
		</div>
	);
}
