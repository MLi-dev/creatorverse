import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "../client";
import Card from "../components/Card";

const ViewCreator = ({ data }) => {
	const navToYouTube = () => {
		window.open("https://www.youtube.com/@" + creator.youtube, "_blank");
	};

	const navToTwitter = () => {
		window.open("https://www.twitter.com/" + creator.twitter, "_blank");
	};

	const navToInstagram = () => {
		window.open("https://www.instagram.com/" + creator.instagram, "_blank");
	};
	const { id } = useParams();
	const [creator, setCreator] = useState({
		id: null,
		name: "",
		youtube: "",
		twitter: "",
		instagram: "",
		description: "",
		imageURL: "",
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
			imageURL: result.imageURL,
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
				<img src={creator.imageURL} alt={creator.name} />
			</section>

			<section className='creator-info'>
				<h2>{creator.name}</h2>
				<p>{creator.description}</p>
				{creator.youtube !== null && creator.youtube !== "" ? (
					<button className='social-button' onClick={navToYouTube}>
						<i className='fab fa-youtube'></i>@{creator.youtube}
					</button>
				) : (
					""
				)}

				{creator.twitter !== null && creator.twitter !== "" ? (
					<button className='social-button' onClick={navToTwitter}>
						<i className='fab fa-twitter'></i>@{creator.twitter}
					</button>
				) : (
					""
				)}

				{creator.instagram !== null && creator.instagram !== "" ? (
					<button className='social-button' onClick={navToInstagram}>
						<i className='fab fa-instagram'></i>@{creator.instagram}
					</button>
				) : (
					""
				)}
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
