import React, { Component } from "react";
import ShowCreators from "../pages/ShowCreators";

class Main extends React.Component {
	render() {
		return (
			<main className='container'>
				<h1>CREATORVERSE</h1>
				<div className='button-list'>
					<button>View All Creators</button>
					<button>Add Creator</button>
				</div>
				<ShowCreators />
			</main>
		);
	}
}

export default Main;
