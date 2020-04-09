import React from "react";

export interface HelloProps {
	compiler: string;
	framework: string;
	version: number;
}

const Hello = (props: HelloProps) => (
	<h1>
		<div
			className='alert alert-primary alert-dismissible fade show'
			role='alert'>
			<strong>
				Hello from {props.compiler} and {props.framework}! - Version:{" "}
				{props.version}
			</strong>
		</div>
	</h1>
);

const HelloTS = () => {
	return (
		<div className='container'>
			<h1>Hello TypeScript</h1>
			<hr />
			<Hello compiler='TypeScript' framework='React' version={1} />
		</div>
	);
};

export default HelloTS;
