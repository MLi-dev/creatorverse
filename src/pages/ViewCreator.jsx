import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../client";
import Card from "../components/Card";

const ViewCreator = ({ data }) => {
	const { id } = useParams();
	const [creator, setCreator] = useState({
		id: null,
		name: "",
		description: "",
		image: "",
	});

	useEffect(() => {
		const result = data.filter((item) => String(item.id) === id)[0];
		setCreator({
			id: result.id,
			name: result.name,
			youtube: result.youtube,
			twitter: result.twitter,
			instagram: result.instagram,
			description: result.description,
			image: result.image,
		});
	}, [data, id]);

	const deleteCreator = async (event) => {
		event.preventDefault();
		const { error } = await supabase.from("creators").delete().eq("id", id);

		if (error) {
			console.log(error);
		}

		window.location = "/";
	};
	return (
		<div className='ViewCreator'>
			<section className='creator-image'>
				<img src={creator.image} alt={creator.name} />
			</section>

			<section className='creator-info'>
				<h2>{creator.name}</h2>
				<p>{creator.description}</p>
			</section>

			<section className='modify-creator'>
				<Link to={"/edit/" + creator.id}>
					<button
						onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
					>
						Edit
					</button>
				</Link>
				<button onClick={deleteCreator} className='delete-button'>
					Delete
				</button>
			</section>
		</div>
	);
};

export default ViewCreator;
