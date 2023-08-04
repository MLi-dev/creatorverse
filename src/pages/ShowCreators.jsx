import React, { Component, useEffect, useState } from "react";
import { supabase } from "../client";
import Card from "../components/Card";

const ShowCreators = (props) => {
	const [creators, setCreators] = useState([]);
	useEffect(() => {
		setCreators(props.data);
	}, [props]);
	return (
		<section className='ShowCreators'>
			{" "}
			{creators.length &&
				creators.map((creator) => <Card key={creator.id} creator={creator} />)}
			{!creators.length && <div>There are no creators!</div>}
		</section>
	);
};

export default ShowCreators;
