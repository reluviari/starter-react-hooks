import React, { useState, useEffect } from "react";

export default function GeolocationNow() {
	const [location, setLocation] = useState({});

	useEffect(() => {
		/**  watchPosition: Uma função de sucesso no primeiro parametro
		 *   watchPosition: retorna um number - Id do eventListner
		 * interface Geolocation {
 				clearWatch(watchId: number): void;
    			getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): void;
    			watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number;
		}
		 * 
		*/
		const watchId = navigator.geolocation.watchPosition(
			handlePositionReceived
		);

		/** Aqui, o useEffect retorna uma chamada ao clearWatch passando seu Id,
		 * fazendo com que a geolocatizaçao do usuário seja "limpada"
		 *
		 * Toda vez que tivermos uma return dentro de um useEffect ele é
		 * executado assim que o componente é desmontado, "simulando
		 * o componentWillUnmount
		 */
		return () => navigator.geolocation.clearWatch(watchId);
	}, []);

	function handlePositionReceived({ coords }) {
		// console.log(cordinates);
		// console.log(cordinates.coords);
		const { latitude, longitude } = coords;

		setLocation({ latitude, longitude });
	}

	return (
		<>
			Latitude: {location.latitude} <br />
			Longitude: {location.longitude}
		</>
	);
}
